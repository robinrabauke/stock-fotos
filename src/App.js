import React from 'react';
import stock1 from './stocks/Stock1.jpg';
import stock2 from './stocks/Stock2.jpg';
import stock3 from './stocks/Stock3.jpg';
import stock4 from './stocks/Stock4.jpg';
import stock5 from './stocks/Stock5.jpg';
import stock6 from './stocks/Stock6.jpg';
import stock7 from './stocks/Stock7.jpg';
import './App.css';
import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll'

function App() {

  const stocks = [stock1, stock2, stock3, stock4, stock5, stock6, stock7];

  const randomStock = stocks[Math.floor(Math.random() * stocks.length)];

  return (
    <div>
      <div className="stockwrapper">
        <img src={randomStock} className="stock" alt="stock" />
      </div >
    </div>
  );
}

export default App;
