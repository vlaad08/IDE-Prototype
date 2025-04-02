import React from 'react';
import '../App.css';

const Arrows = ({ currentIndex, switchCharacter, total }) => {
  return (
    <div className="nav-buttons">
      <button
        onClick={() => switchCharacter(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        ◀
      </button>
      <button
        onClick={() => switchCharacter(currentIndex + 1)}
        disabled={currentIndex === total - 1}
      >
        ▶
      </button>
    </div>
  );
};

export default Arrows;
