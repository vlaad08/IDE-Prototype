import React, { useState } from 'react';
import './App.css';
import ThreeScene from './three/ThreeScene';
import StatusPanel from './components/StatusPanel';
import MetricsPanel from './components/MetricsPanel';
import WateringSchedule from './components/WateringSchedule';
import GraphPanel from './components/GraphPanel';
import Lightbulb from './components/Lightbulb';
import TipsBubble from './components/TipsBubble';
import SpeechBubble from './components/SpeechBubble';
import SwipeIndicators from './components/SwipeIndicators';
import Arrows from './components/Arrows';
import { characters } from './data/characters';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchCharacter = (index) => {
    if (index >= 0 && index < characters.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="app-container">
      <div className="three-container">
        <ThreeScene currentIndex={currentIndex} />
      </div>

      <StatusPanel character={characters[currentIndex]} />
      <MetricsPanel character={characters[currentIndex]} />
      <WateringSchedule />
      <GraphPanel currentIndex={currentIndex} />
      <Lightbulb character={characters[currentIndex]} />
      <TipsBubble character={characters[currentIndex]} />
      <SpeechBubble character={characters[currentIndex]} />
      <SwipeIndicators currentIndex={currentIndex} total={characters.length} />
      <Arrows currentIndex={currentIndex} switchCharacter={switchCharacter} total={characters.length} />
    </div>
  );
}

export default App;
