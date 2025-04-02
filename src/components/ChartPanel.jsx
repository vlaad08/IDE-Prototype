import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { sampleGraphData } from '../data/sampleGraphData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ChartPanel = ({ characterIndex }) => {
    const data = sampleGraphData[characterIndex];
  
    return (
      <div className="chart-panel">
        <h3>Moisture</h3>
        <Line data={data.moisture} />
        <h3>Light</h3>
        <Line data={data.light} />
        <h3>Combined</h3>
        <Line data={data.combined} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
    );
  };