import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strikeFunction = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes+1)
    }
  };

  const ballFunction = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls+1)
    }
    }

    const foulFunction = () => {
      if (strikes < 2) {
        setStrikes(strikes+1)
      }
    };
    const hitFunction = () => {
      setStrikes(0);
      setBalls(0);
    }
  




  return (
    <div className="App">
      <header className='App-header'>
        <h1>At bat</h1>
        <Display strikes = {strikes} balls={balls}/>
        <Dashboard strike={strikeFunction}
        ball={ballFunction}
        foul={foulFunction}
        hit={hitFunction} /> 
      </header>
    </div>
  );
}

export default App;
