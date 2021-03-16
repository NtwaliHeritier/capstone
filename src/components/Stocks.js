import React from 'react';
import '../css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADD_COMPANY_INFO } from '../actions/stock_action';

const Stocks = () => {
  const stocks = useSelector(store => store.stocks);
  const dispatch = useDispatch();
  const handleClick = async symbol => {
    const companyInfo = await (`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=18e14f4a06420f6541dc232dea254989`);
    dispatch(ADD_COMPANY_INFO(companyInfo));
    useHistory().push('/info');
  };
  return (
    <section className="companies mt-3">
      {stocks.map(stock => (
        <div key={stock.symbol} className="company">
          <h5 className="text-white">{stock.name}</h5>
          <span className="symbol">{stock.symbol}</span>
          <div className="finances mt-3 mb-4">
            <span className="price">{stock.price}</span>
            <span>{stock.exchange}</span>
          </div>
          <button type="submit" className="details btn" onClick={() => handleClick(stock.symbol)}>Details</button>
        </div>
      ))}
    </section>
  );
};

export default Stocks;
