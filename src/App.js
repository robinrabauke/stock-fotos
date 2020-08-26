import React, { useEffect, useState } from 'react';

import './App.css';

import { request } from 'graphql-request';

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


  const randomStock = stocks && stocks[Math.floor(Math.random() * stocks.length)];

  const stockDescriptoion = randomStock && { __html: randomStock.description }
  return (
    <>
      <div className="stockwrapper">
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
