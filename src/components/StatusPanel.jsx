import React from 'react';
import '../App.css';

const StatusPanel = ({ character }) => {
  return (
    <div className="status-panel">
      <div className="plant-name">{character.name}</div>
      <div className="plant-stats">
        <div className="stat-item">
          <div className="stat-value">{character.age}</div>
          <div className="stat-label">Months</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{character.height}</div>
          <div className="stat-label">cm</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{character.mood}</div>
          <div className="stat-label">Mood</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{character.level}</div>
          <div className="stat-label">Level</div>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
