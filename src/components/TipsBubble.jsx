import React, { useState, useEffect } from 'react';
import '../App.css';

const TipsBubble = ({ character }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setIndex(0);
    setVisible(false);
  }, [character]);

  const tip = character.careTips[index];

  const nextTip = () => {
    setIndex((prev) => (prev + 1) % character.careTips.length);
    setVisible(true);
  };

  return (
    <div className={`tips-bubble ${visible ? 'active' : ''}`} onClick={nextTip}>
      <div className="tip-title">{tip.title}</div>
      <div className="tip-content">{tip.content}</div>
    </div>
  );
};

export default TipsBubble;
