import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Simulation } from '../../types';
import { fetchSimulations, formatFileSize } from '../../simulations/simulationService';
import './SimulationList.css';

function SimulationList() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
              <Link
                key={sim.id}
                to={`/viewer/${sim.id}`}
                className="simulation-card"
              >
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SimulationList;
