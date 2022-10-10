import React from 'react';
import './App.css';
import { Balance } from './features/Balance';
import { Charges } from './features/Charges';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Balance />
        <Charges />
      </header>
    </div>
  );
}

export default App;
