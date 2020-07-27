import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter initial={ 10 } book={{
        id: 1,
        name: "Sample book"
      }} />
    </div>
  );
}

export default App;
