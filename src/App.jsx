import React from 'react';
import Table from './components/Table/Table';

import './App.css';

function App() {
  const matrix = [
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  return (
    <div className="App">
      <Table matrix={matrix} />
    </div>
  );
}

export default App;
