import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderDemo from "./RenderDemo"

import { JSXDemo } from "./JSXDemo";

function App() {

  return (
    <div className="App">
      <RenderDemo flag={true} hide={true} show={true} />
    </div>
  );
}

export default App;
