// // src/LineGraph.js
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const LineGraph = () => {
//   const data = [150, 230, 310, 450, 560, 670, 780, 890, 910, 1020];

//   const chartData = {
//     labels: data.map((_, index) => `Point ${index + 1}`), // Generate labels dynamically
//     datasets: [
//       {
//         label: 'TDS Values',
//         data: data,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false, // Allows custom width and height
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Line Graph of TDS Values',
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Data Points',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'TDS Values',
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ position: 'relative', width: '80%', height: '400px' }}>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default LineGraph;




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
    { time: '2024-07-02T08:00:00Z', tds: 150 },
    { time: '2024-07-02T09:00:00Z', tds: 230 },
    { time: '2024-07-02T10:00:00Z', tds: 310 },
    { time: '2024-07-02T11:00:00Z', tds: 450 },
    { time: '2024-07-02T12:00:00Z', tds: 560 },
    { time: '2024-07-02T13:00:00Z', tds: 670 },
    { time: '2024-07-02T14:00:00Z', tds: 780 },
    { time: '2024-07-02T15:00:00Z', tds: 890 },
    { time: '2024-07-02T16:00:00Z', tds: 910 },
    { time: '2024-07-02T17:00:00Z', tds: 1020 },
  ];

  const chartData = {
    labels: data.map(entry => new Date(entry.time).toLocaleTimeString()), // Convert time to readable format
    datasets: [
      {
        label: 'TDS Values',
        data: data.map(entry => entry.tds),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
      },
      title: {
        display: true,
        text: 'Line Graph of TDS Values Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'TDS Values',
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
