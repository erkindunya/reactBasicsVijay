import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Hello } from "./Hello";
import { Product } from './Product';

function App() {
  return (
    <div className="App">
      <Product id={1001} name="Nose Plier" cat="Tools" price={65} />
    </div>
  );
}

export default App;
