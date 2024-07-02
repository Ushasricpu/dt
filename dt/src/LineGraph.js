// src/LineGraph.js
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
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const data = [
    { time: '08:00:00', tds: 150, id: 1 },
    { time: '09:00:00', tds: 230, id: 2 },
    { time: '10:00:00', tds: 310, id: 1 },
    { time: '11:00:00', tds: 450, id: 1 },
    { time: '12:00:00', tds: 560, id: 1 },
    { time: '13:00:00', tds: 670, id: 2 },
    { time: '14:00:00', tds: 780, id: 2 },
    { time: '15:00:00', tds: 890, id: 2 },
    { time: '16:00:00', tds: 910, id: 1 },
    { time: '17:00:00', tds: 1020, id: 2 },
  ];

  // Create an array of unique timestamps
  const timestamps = Array.from(new Set(data.map(entry => entry.time)));

  // Generate chart data for each ID
  const chartData = {
    labels: timestamps, // Use unique timestamps as labels
    datasets: [
      {
        label: 'Soil',
        data: timestamps.map(time => {
          const entry = data.find(item => item.time === time && item.id === 1);
          return entry ? entry.tds : null; // Use null for missing data
        }),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'TDS',
        data: timestamps.map(time => {
          const entry = data.find(item => item.time === time && item.id === 2);
          return entry ? entry.tds : null; // Use null for missing data
        }),
        borderColor: 'rgba(255, 205, 86, 1)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom width and height
    plugins: {
      legend: {
        position: 'top',
        labels: {
          // Adjust legend labels here
          boxWidth: 10, // Width of the colored box next to label
          padding: 10, // Padding between labels
          usePointStyle: true, // Use a circular point style
        },
      },
      title: {
        display: true,
        text: 'Soil and TDS Values VS Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          // text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          // text: 'TDS Value',
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '80%', height: '400px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
