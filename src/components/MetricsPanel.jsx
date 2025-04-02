import React from 'react';
import '../App.css';

const MetricsPanel = ({ character }) => {
  return (
    <div className="metrics-panel">
      <div className="metrics-title">Happiness Level</div>
      <div className="happiness-meter">
        <div
          className="happiness-level"
          style={{ width: `${character.happiness}%` }}
        />
      </div>
      <div className="meter-label">
        <span>Low</span>
        <span>Average</span>
        <span>High</span>
      </div>

      <div className="metrics-grid">
        <div className="metric-box">
          <div className="metric-title">Sunlight</div>
          <div className="metric-value">{character.sunlight}</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Water</div>
          <div className="metric-value">{character.water}</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Growth</div>
          <div className="metric-value">{character.growth}</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">{character.specialMetric.title}</div>
          <div className="metric-value">{character.specialMetric.value}</div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
