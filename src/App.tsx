import React from 'react';
import './App.css';
import { Balance } from './features/Balance';
import { Charges } from './features/Charges';
import { Search } from './features/Search';
import { UserInfo } from './features/User';

function App() {
  return (
    <div className="App">
      <UserInfo />
      <Balance />
      <Search />
      <Charges />
    </div>
  );
}

export default App;
