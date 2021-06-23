import React from 'react';
import { Home } from './container/Home';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2 className='heading'>Reminder App</h2>
      </div>
      <Home />
    </div>
  );
};

export default App;
