import { useState, useEffect, useCallback } from 'react';
import { McapIndexedReader } from '@mcap/core';
import * as lz4 from 'lz4js';
import { decodeProtobuf } from '../../mcap/protobufDecoder';
import './MCAPInspectorModal.css';

interface MCAPInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  simulationName: string;
  simulationUrl: string;
}

interface TopicInfo {
  id: number;
  topic: string;
  schemaName: string;
  encoding: string;
  messageCount: number;
}

interface SchemaInfo {
  id: number;
  name: string;
  encoding: string;
}

interface SampleMessage {
  topic: string;
  timestamp: number;
  data: unknown;
}

type TabType = 'overview' | 'topics' | 'schemas' | 'messages';

const decompressHandlers = {
  lz4: (buffer: Uint8Array, decompressedSize: bigint): Uint8Array => {
    return lz4.decompress(buffer, Number(decompressedSize));
  },
};

function MCAPInspectorModal({ isOpen, onClose, simulationName, simulationUrl }: MCAPInspectorModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // MCAP metadata
  const [fileSize, setFileSize] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [messageCount, setMessageCount] = useState<number>(0);
  const [chunkCount, setChunkCount] = useState<number>(0);
  const [topics, setTopics] = useState<TopicInfo[]>([]);
  const [schemas, setSchemas] = useState<SchemaInfo[]>([]);
  const [sampleMessages, setSampleMessages] = useState<SampleMessage[]>([]);
  const [loadingSamples, setLoadingSamples] = useState(false);

  // Selected topic for message viewing
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const loadMCAPMetadata = useCallback(async () => {
    if (!simulationUrl) return;

    setLoading(true);
    setError(null);

    try {
      // Fetch file size
      const headResponse = await fetch(simulationUrl, { method: 'HEAD' });
      const contentLength = headResponse.headers.get('content-length');
      setFileSize(contentLength ? parseInt(contentLength, 10) : 0);

      // Create HTTP range reader for MCAP
      const readable = {
        size: async () => BigInt(contentLength ? parseInt(contentLength, 10) : 0),
        read: async (offset: bigint, length: bigint) => {
          const start = Number(offset);
          const end = Number(offset + length) - 1;
          const response = await fetch(simulationUrl, {
            headers: { Range: `bytes=${start}-${end}` },
          });
          const buffer = await response.arrayBuffer();
          return new Uint8Array(buffer);
        },
      };

      const reader = await McapIndexedReader.Initialize({
        readable,
        decompressHandlers,
      });

      // Extract metadata
      const chunkIndexes = [...reader.chunkIndexes];
      setChunkCount(chunkIndexes.length);

      // Calculate duration
      let startTime = Number.MAX_SAFE_INTEGER;
      let endTime = 0;
      for (const chunk of chunkIndexes) {
        const chunkStart = Number(chunk.messageStartTime) / 1e9;
        const chunkEnd = Number(chunk.messageEndTime) / 1e9;
        startTime = Math.min(startTime, chunkStart);
        endTime = Math.max(endTime, chunkEnd);
      }
      setDuration(endTime - startTime);

      // Count messages
      let totalMessages = 0;
      const topicMessageCounts = new Map<number, number>();
      for (const [channelId, count] of reader.statistics?.channelMessageCounts?.entries() ?? []) {
        totalMessages += Number(count);
        topicMessageCounts.set(channelId, Number(count));
      }
      setMessageCount(totalMessages);

      // Extract topics
      const topicInfos: TopicInfo[] = [];
      for (const [id, channel] of reader.channelsById) {
        const schema = reader.schemasById.get(channel.schemaId);
        topicInfos.push({
          id,
          topic: channel.topic,
          schemaName: schema?.name ?? 'unknown',
          encoding: channel.messageEncoding,
          messageCount: topicMessageCounts.get(id) ?? 0,
        });
      }
      topicInfos.sort((a, b) => a.topic.localeCompare(b.topic));
      setTopics(topicInfos);

      // Extract schemas
      const schemaInfos: SchemaInfo[] = [];
      for (const [id, schema] of reader.schemasById) {
        schemaInfos.push({
          id,
          name: schema.name,
          encoding: schema.encoding,
        });
      }
      schemaInfos.sort((a, b) => a.name.localeCompare(b.name));
      setSchemas(schemaInfos);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load MCAP metadata');
    } finally {
      setLoading(false);
    }
  }, [simulationUrl]);

  const loadSampleMessages = useCallback(async (topic: string) => {
    if (!simulationUrl) return;

    setLoadingSamples(true);
    setSelectedTopic(topic);
    setSampleMessages([]);

    try {
      const headResponse = await fetch(simulationUrl, { method: 'HEAD' });
      const contentLength = headResponse.headers.get('content-length');

      const readable = {
        size: async () => BigInt(contentLength ? parseInt(contentLength, 10) : 0),
        read: async (offset: bigint, length: bigint) => {
          const start = Number(offset);
          const end = Number(offset + length) - 1;
          const response = await fetch(simulationUrl, {
            headers: { Range: `bytes=${start}-${end}` },
          });
          const buffer = await response.arrayBuffer();
          return new Uint8Array(buffer);
        },
      };

      const reader = await McapIndexedReader.Initialize({
        readable,
        decompressHandlers,
      });

      const samples: SampleMessage[] = [];
      const maxSamples = 5; // Only load first 5 messages

      for await (const msg of reader.readMessages({ topics: [topic] })) {
        if (samples.length >= maxSamples) break;

        const channel = reader.channelsById.get(msg.channelId);
        const schema = channel ? reader.schemasById.get(channel.schemaId) : null;
        const timestamp = Number(msg.logTime) / 1e9;

        let parsedData: unknown = null;

        // Try to parse the message data
        if (channel?.messageEncoding === 'json') {
          try {
            const decoder = new TextDecoder();
            parsedData = JSON.parse(decoder.decode(msg.data));
          } catch {
            parsedData = { _raw: `[Binary data: ${msg.data.length} bytes]` };
          }
        } else if (channel?.messageEncoding === 'protobuf' && schema) {
          try {
            parsedData = decodeProtobuf(msg.data, schema.data, schema.name);
          } catch {
            parsedData = { _raw: `[Protobuf: ${msg.data.length} bytes]` };
          }
        } else {
          parsedData = { _raw: `[${channel?.messageEncoding ?? 'unknown'}: ${msg.data.length} bytes]` };
        }

        samples.push({
          topic,
          timestamp,
          data: parsedData,
        });
      }

      setSampleMessages(samples);
    } catch (err) {
      console.error('Failed to load sample messages:', err);
    } finally {
      setLoadingSamples(false);
    }
  }, [simulationUrl]);

  useEffect(() => {
    if (isOpen) {
      loadMCAPMetadata();
    }
  }, [isOpen, loadMCAPMetadata]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const formatTimestamp = (timestamp: number): string => {
    return `${timestamp.toFixed(3)}s`;
  };

  const truncateData = (data: unknown, maxLength: number = 2000): string => {
    const str = JSON.stringify(data, null, 2);
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '\n... [truncated]';
    }
    return str;
  };

  return (
    <div className="mcap-modal-overlay" onClick={onClose}>
      <div className="mcap-modal" onClick={(e) => e.stopPropagation()}>
        <header className="mcap-modal-header">
          <div className="mcap-modal-title">
            <svg viewBox="0 0 24 24" fill="currentColor" className="mcap-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <h2>{simulationName}.mcap</h2>
          </div>
          <button className="mcap-modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <nav className="mcap-modal-tabs">
          <button
            className={`mcap-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`mcap-tab ${activeTab === 'topics' ? 'active' : ''}`}
            onClick={() => setActiveTab('topics')}
          >
            Topics ({topics.length})
          </button>
          <button
            className={`mcap-tab ${activeTab === 'schemas' ? 'active' : ''}`}
            onClick={() => setActiveTab('schemas')}
          >
            Schemas ({schemas.length})
          </button>
          <button
            className={`mcap-tab ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
        </nav>

        <div className="mcap-modal-content">
          {loading ? (
            <div className="mcap-loading">
              <div className="mcap-spinner" />
              <p>Loading MCAP metadata...</p>
            </div>
          ) : error ? (
            <div className="mcap-error">
              <p>Error: {error}</p>
              <button onClick={loadMCAPMetadata}>Retry</button>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="mcap-overview">
                  <div className="mcap-stats-grid">
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">File Size</span>
                      <span className="mcap-stat-value">{formatFileSize(fileSize)}</span>
                    </div>
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">Duration</span>
                      <span className="mcap-stat-value">{formatDuration(duration)}</span>
                    </div>
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">Total Messages</span>
                      <span className="mcap-stat-value">{messageCount.toLocaleString()}</span>
                    </div>
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">Chunks</span>
                      <span className="mcap-stat-value">{chunkCount}</span>
                    </div>
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">Topics</span>
                      <span className="mcap-stat-value">{topics.length}</span>
                    </div>
                    <div className="mcap-stat">
                      <span className="mcap-stat-label">Schemas</span>
                      <span className="mcap-stat-value">{schemas.length}</span>
                    </div>
                  </div>

                  <div className="mcap-section">
                    <h3>Top Topics by Message Count</h3>
                    <div className="mcap-topic-list">
                      {[...topics]
                        .sort((a, b) => b.messageCount - a.messageCount)
                        .slice(0, 10)
                        .map((topic) => (
                          <div key={topic.id} className="mcap-topic-item">
                            <span className="mcap-topic-name">{topic.topic}</span>
                            <span className="mcap-topic-count">{topic.messageCount.toLocaleString()}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'topics' && (
                <div className="mcap-topics">
                  <table className="mcap-table">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th>Schema</th>
                        <th>Encoding</th>
                        <th>Messages</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topics.map((topic) => (
                        <tr key={topic.id}>
                          <td className="mcap-topic-cell">{topic.topic}</td>
                          <td>{topic.schemaName}</td>
                          <td>{topic.encoding}</td>
                          <td>{topic.messageCount.toLocaleString()}</td>
                          <td>
                            <button
                              className="mcap-view-btn"
                              onClick={() => {
                                setActiveTab('messages');
                                loadSampleMessages(topic.topic);
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'schemas' && (
                <div className="mcap-schemas">
                  <table className="mcap-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Encoding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schemas.map((schema) => (
                        <tr key={schema.id}>
                          <td>{schema.id}</td>
                          <td className="mcap-schema-name">{schema.name}</td>
                          <td>{schema.encoding}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="mcap-messages">
                  <div className="mcap-message-header">
                    <label>Select Topic:</label>
                    <select
                      value={selectedTopic ?? ''}
                      onChange={(e) => loadSampleMessages(e.target.value)}
                    >
                      <option value="">-- Select a topic --</option>
                      {topics.map((topic) => (
                        <option key={topic.id} value={topic.topic}>
                          {topic.topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  {loadingSamples ? (
                    <div className="mcap-loading">
                      <div className="mcap-spinner" />
                      <p>Loading sample messages...</p>
                    </div>
                  ) : selectedTopic && sampleMessages.length > 0 ? (
                    <div className="mcap-message-list">
                      <p className="mcap-message-note">
                        Showing first {sampleMessages.length} messages from {selectedTopic}
                      </p>
                      {sampleMessages.map((msg, index) => (
                        <div key={index} className="mcap-message-item">
                          <div className="mcap-message-meta">
                            <span className="mcap-message-index">#{index + 1}</span>
                            <span className="mcap-message-timestamp">
                              {formatTimestamp(msg.timestamp)}
                            </span>
                          </div>
                          <pre className="mcap-message-data">
                            {truncateData(msg.data)}
                          </pre>
                        </div>
                      ))}
                    </div>
                  ) : selectedTopic ? (
                    <div className="mcap-empty">
                      <p>No messages found for this topic</p>
                    </div>
                  ) : (
                    <div className="mcap-empty">
                      <p>Select a topic to view sample messages</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MCAPInspectorModal;
