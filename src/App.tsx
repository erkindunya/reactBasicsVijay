import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Hello } from "./Hello";
import { Product } from './Product';

function App() {

  let p = {
    id: 1001,
    name: "Nose Plier",
    cat: "Tools",
    price: 65
  };
  let p2 = {
    id: 1002,
    name: "cutting Plier",
    cat: "Tools",
    price: 300
  };

  return (
    <div className="App">
      <Product id={p.id} name={p.name} cat={p.cat} price={p.price} />
      <Product id={p2.id} name={p2.name} cat={p2.cat} price={p2.price} />
    </div>
  );
}

export default App;
