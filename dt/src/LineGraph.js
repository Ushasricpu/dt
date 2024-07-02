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

const LineGraph = ({ data }) => {
  // Sort data by time if not already sorted
  const sortedData = data.sort((a, b) => a.time.localeCompare(b.time));

  // Create an array of unique timestamps
  const timestamps = Array.from(new Set(sortedData.map(entry => entry.time)));

  // Generate chart data for each ID
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Soil',
        data: timestamps.map(time => {
          const entry = sortedData.find(item => item.time === time && item.id === 1);
          return entry ? entry.tds : null;
        }),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'TDS',
        data: timestamps.map(time => {
          const entry = sortedData.find(item => item.time === time && item.id === 2);
          return entry ? entry.tds : null;
        }),
        borderColor: 'rgba(255, 205, 86, 1)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        fill: false,
      },
    ],
  };

  // Debugging: Log the chartData to ensure it's structured correctly
  console.log(chartData);

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
