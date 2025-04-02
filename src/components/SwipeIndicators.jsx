import React from 'react';
import '../App.css';

const SwipeIndicators = ({ currentIndex, total }) => {
  return (
    <div className="swipe-indicators">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`swipe-dot ${i === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default SwipeIndicators;
