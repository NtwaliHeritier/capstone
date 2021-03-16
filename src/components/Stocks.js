import React from 'react';
import '../css/index.css';
import { useSelector } from 'react-redux';

const Stocks = () => {
  const stocks = useSelector(store => store);
  return (
    <section className="companies mt-3">
      {stocks.map(stock => (
        <div key={stock.symbol} className="company">
          <h3 className="text-white">{stock.userId}</h3>
          <span className="symbol">{stock.symbol}</span>
          <div className="finances mt-3 mb-4">
            <span className="price">{stock.price}</span>
            <span>{stock.exchange}</span>
          </div>
          <a href="./show.html" className="details btn">Details</a>
        </div>
      ))}
    </section>
  );
};

export default Stocks;
