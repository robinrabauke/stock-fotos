import React, { useEffect, useState } from 'react';

import './App.css';

import { request } from 'graphql-request';
import GraphImg from 'graphcms-image'

export const App = () => {

  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      const { stocks } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckebe31k90oeq01xv1p012e1a/master',
        `
      { 
        stocks {
          description
          image {
            handle
            width
            height
            url
          }
        }
      }
    `
      );

      setStocks(stocks);
    };

    fetchStocks();
  }, []);

  // const stocks = [stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11, stock12, stock13, stock14, stock15, stock16, stock17, stock18, stock19, stock20, stock21];

  const randomStock = stocks && stocks[Math.floor(Math.random() * stocks.length)];

  console.log(randomStock && randomStock.image);
  const stockDescriptoion = randomStock && { __html: randomStock.description }
  return (
    <>
      <div className="stockwrapper">
        {/* {randomStock && <GraphImg className="stock" fadeIn image={randomStock.image} />} */}
        {randomStock
          && <div className='stock' style={{
            backgroundImage: `url(${randomStock.image.url})`
          }} > </div>}
        <div className="footer">
          <span className="footer-item">Made with {'<3'} for stock-footage in Berlin</span>
          <span className="footer-link" dangerouslySetInnerHTML={randomStock && stockDescriptoion}></span>
          <span className="footer-item"><a className="footer-link" href='/impressum'>impressum</a></span>
        </div >
      </div>

    </>
  );
}

export default App;
