import React from 'react';
import Table from './components/Table/Table';
import Panel from './components/Panel/Panel';

import './App.css';

function App() {
  const matrix = [
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  const move = () => {
    console.log('Moved');
  };

  return (
    <div className="App">
      <Table matrix={matrix} />
      <Panel commands={move} />
    </div>
  );
}

export default App;
