import React from 'react';
import './App.css';
import { Balance } from './features/Balance';
import { Charges } from './features/Charges';
import { Search } from './features/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Balance />
        <Search />
        <Charges />
      </header>
    </div>
  );
}

export default App;
