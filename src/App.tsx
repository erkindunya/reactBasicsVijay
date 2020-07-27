import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from "./Counter";
import { countReset } from 'console';


function App() {
  return (
    <div className="App">
      <Counter initial={ 10 } />
    </div>
  );
}

export default App;