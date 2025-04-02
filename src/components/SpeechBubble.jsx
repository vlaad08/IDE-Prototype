import React, { useEffect, useState } from 'react';
import '../App.css';

const SpeechBubble = ({ character }) => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!character.dialogue) return;
    const lines = character.dialogue.additionalLines;
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    setText(randomLine);
    setActive(true);

    const timer = setTimeout(() => setActive(false), 4000);
    return () => clearTimeout(timer);
  }, [character]);

  return (
    <div className={`speech-bubble ${active ? 'active' : ''}`}>
      {text}
    </div>
  );
};

export default SpeechBubble;
