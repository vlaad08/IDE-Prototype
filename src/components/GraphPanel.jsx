import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { sampleGraphData } from '../data/chartData.js';
import '../App.css';

Chart.register(...registerables);

const GraphPanel = ({ currentIndex }) => {
  const data = sampleGraphData[currentIndex];

  return (
    <div className="chart-panel">
      <h3>Moisture</h3>
      <Line data={data.moisture} />
      <h3>Light</h3>
      <Line data={data.light} />
      <h3>Combined</h3>
      <Line data={data.combined} options={{
        responsive: true,
        scales: {
          y: { type: 'linear', position: 'left', min: 30, max: 100 },
          y1: {
            type: 'linear',
            position: 'right',
            min: 4000,
            max: 9000,
            grid: { drawOnChartArea: false }
          }
        }
      }} />
    </div>
  );
};

export default GraphPanel;
