import React, { useState } from 'react';
import '../App.css';

const Lightbulb = ({ character }) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="lightbulb-container" onClick={toggle}>
      <div className={`lightbulb ${active ? 'active' : ''}`}>
        <div className="bulb">
          <div className="filament-left"></div>
          <div className="filament-right"></div>
        </div>
        <div className="bulb-base"></div>
      </div>
    </div>
  );
};

export default Lightbulb;
