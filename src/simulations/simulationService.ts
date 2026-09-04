import type { Simulation } from '../types';
import type { S3Object, S3ListResult } from './types';

const S3_BUCKET_URL = 'https://sim-playback-test-data.s3.us-west-2.amazonaws.com';

// Use Vite proxy in development to avoid CORS issues
const getProxyUrl = (path: string) => {
  if (import.meta.env.DEV) {
    return `/s3-proxy${path}`;
  }
  return `${S3_BUCKET_URL}${path}`;
};

/**
 * Parse S3 ListBucketResult XML response
 */
function parseS3ListXML(xmlText: string): S3ListResult {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');

  const name = doc.querySelector('Name')?.textContent ?? '';
  const prefix = doc.querySelector('Prefix')?.textContent ?? '';
  const isTruncated = doc.querySelector('IsTruncated')?.textContent === 'true';
  const continuationToken = doc.querySelector('NextContinuationToken')?.textContent ?? undefined;

  const contents: S3Object[] = [];
  const contentElements = doc.querySelectorAll('Contents');

  contentElements.forEach((element) => {
    const key = element.querySelector('Key')?.textContent ?? '';
    const lastModifiedStr = element.querySelector('LastModified')?.textContent ?? '';
    const sizeStr = element.querySelector('Size')?.textContent ?? '0';
    const etag = element.querySelector('ETag')?.textContent ?? '';

    contents.push({
      key,
      lastModified: new Date(lastModifiedStr),
      size: parseInt(sizeStr, 10),
      etag: etag.replace(/"/g, ''),
    });
  });

  return { name, prefix, contents, isTruncated, continuationToken };
}

/**
 * Fetch list of MCAP files from S3 bucket
 */
export async function fetchSimulations(): Promise<Simulation[]> {
  const url = getProxyUrl('?list-type=2&prefix=mcap/');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch simulations: ${response.status} ${response.statusText}`);
  }

  const xmlText = await response.text();
  const result = parseS3ListXML(xmlText);

  // Filter for .mcap files and convert to Simulation objects
  const simulations: Simulation[] = result.contents
    .filter((obj) => obj.key.endsWith('.mcap'))
    .map((obj) => {
      // Extract filename from key (e.g., "mcap/simulation1.mcap" -> "simulation1")
      const fileName = obj.key.split('/').pop() ?? obj.key;
      const name = fileName.replace('.mcap', '');

      return {
        id: encodeURIComponent(obj.key),
        name,
        url: getProxyUrl(`/${obj.key}`),
        size: obj.size,
        lastModified: obj.lastModified,
      };
    });

  if (simulations.length === 0) {
    throw new Error('No MCAP files found in S3 bucket');
  }

  return simulations;
}

/**
 * Get simulation URL by ID
 */
export function getSimulationUrl(simulationId: string): string {
  const key = decodeURIComponent(simulationId);
  return getProxyUrl(`/${key}`);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
