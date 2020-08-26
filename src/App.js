import React from 'react';
import stock1 from './stocks/Stock1.jpg';
import stock2 from './stocks/Stock2.jpg';
import stock3 from './stocks/Stock3.jpg';
import stock4 from './stocks/Stock4.jpg';
import stock5 from './stocks/Stock5.jpg';
import stock6 from './stocks/Stock6.jpg';
import stock7 from './stocks/Stock7.jpg';
import stock8 from './stocks/Stock8.jpg';
import stock9 from './stocks/Stock9.jpg';
import stock10 from './stocks/Stock10.jpg';
import stock11 from './stocks/Stock11.jpg';
import stock12 from './stocks/Stock12.jpg';
import stock13 from './stocks/Stock13.jpg';
import stock14 from './stocks/Stock14.jpg';
import stock15 from './stocks/Stock15.jpg';
import stock16 from './stocks/Stock16.jpg';
import stock17 from './stocks/Stock17.jpg';
import stock18 from './stocks/Stock18.jpg';
import stock19 from './stocks/Stock19.jpg';
import stock20 from './stocks/Stock20.jpg';
import stock21 from './stocks/Stock21.jpg';
import './App.css';


function App() {

  const stocks = [stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11, stock12, stock13, stock14, stock15, stock16, stock17, stock18, stock19, stock20, stock21];

  const randomStock = stocks[Math.floor(Math.random() * stocks.length)];



  return (
    <div>
      <div style={{
        backgroundImage: `url(${randomStock})`
      }} className="stockwrapper">

      </div >
      <div className="footer">
        <span className="footer-item">Made with {'<3'} for stock-footage in Berlin</span>
        <span className="footer-item"><a className="footer-link" href='/impressum'>impressum</a></span>
      </div>
    </div>
  );
}

export default App;
