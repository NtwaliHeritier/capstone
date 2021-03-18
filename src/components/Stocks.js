import React from 'react';
import '../css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stock from './Stock';

const Stocks = () => {
  const stocks = useSelector(store => store.stocks);
  const filter = useSelector(store => store.filter);
  
  let filteredStock;
    if(filter === '') {
      filteredStock = stocks;
    } else {
    filteredStock = stocks.filter(s => s.companyName.startsWith(filter.charAt(0).toLocaleUpperCase() + filter.slice(1)));
    }
  
  return (
    <section className="companies mt-3">
      {filteredStock.map(stock => (
        <div key={stock.ticker} className="company">
        <Stock stock={stock}/>
        </div>
      ))}
    </section>
  );
};

export default Stocks;
