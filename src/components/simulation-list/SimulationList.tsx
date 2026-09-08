import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Simulation } from '../../types';
import { fetchSimulations, formatFileSize } from '../../simulations/simulationService';
import MCAPInspectorModal from '../mcap-inspector/MCAPInspectorModal';
import './SimulationList.css';

function SimulationList() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [selectedSimulation, setSelectedSimulation] = useState<Simulation | null>(null);

  useEffect(() => {
    async function loadSimulations() {
      try {
        setLoading(true);
        setError(null);
        const sims = await fetchSimulations();
        setSimulations(sims);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load simulations');
      } finally {
        setLoading(false);
      }
    }

    loadSimulations();
  }, []);

  const handleInspect = (sim: Simulation, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSimulation(sim);
    setInspectorOpen(true);
  };

  const closeInspector = () => {
    setInspectorOpen(false);
    setSelectedSimulation(null);
  };

  if (loading) {
    return (
      <div className="simulation-list-container">
        <header className="simulation-list-header">
          <h1>Simulation Replay Viewer</h1>
        </header>
        <div className="simulation-list-content">
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Loading simulations...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="simulation-list-container">
        <header className="simulation-list-header">
          <h1>Simulation Replay Viewer</h1>
        </header>
        <div className="simulation-list-content">
          <div className="error-state">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="simulation-list-container">
      <header className="simulation-list-header">
        <h1>Simulation Replay Viewer</h1>
        <p className="subtitle">Select a simulation to view</p>
      </header>
      <div className="simulation-list-content">
        {simulations.length === 0 ? (
          <div className="empty-state">
            <p>No simulations found</p>
          </div>
        ) : (
          <div className="simulation-grid">
            {simulations.map((sim) => (
              <div key={sim.id} className="simulation-card">
                <Link to={`/viewer/${sim.id}`} className="simulation-card-link">
                  <div className="simulation-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="simulation-info">
                    <h3 className="simulation-name">{sim.name}</h3>
                    <div className="simulation-meta">
                      <span className="simulation-size">{formatFileSize(sim.size)}</span>
                      <span className="simulation-date">
                        {sim.lastModified.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  className="simulation-inspect-btn"
                  onClick={(e) => handleInspect(sim, e)}
                >
                  Inspect
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSimulation && (
        <MCAPInspectorModal
          isOpen={inspectorOpen}
          onClose={closeInspector}
          simulationName={selectedSimulation.name}
          simulationUrl={selectedSimulation.url}
        />
      )}
    </div>
  );
}

export default SimulationList;
