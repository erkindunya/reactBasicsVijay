import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Invoices } from "./Invoices";
import { InvoiceProvider } from "./InvoiceProvider";

function App() {
  let provider = new InvoiceProvider();

  provider.addInvoice({
    invno: 1001,
    invdate: new Date(),
    customer: "XYZ",
    amount: 2000
  });

  provider.addInvoice({
    invno: 1002,
    invdate: new Date(),
    customer: "XYZ",
    amount: 5000
  });

  return (
    <div className="App">
      <Invoices provider={provider} />
    </div>
  );
}

export default App;