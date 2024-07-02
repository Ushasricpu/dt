// src/App.js
import React from 'react';
import LineGraph from './LineGraph'; // Ensure the path is correct

  const datagraph = [
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


const App = () => {
  return (
    <div>
      <LineGraph data={datagraph}/>
    </div>
  );
};

export default App;
