import React from 'react';
import '../css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ADD_COMPANY_INFO } from '../actions/stock_action';

const Stocks = () => {
  const stocks = useSelector(store => store.stocks);
  const filter = useSelector(store => store.filter);
  const filtered = filter ? filter : stocks; 
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = async symbol => {
    const companyInfo = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=18e14f4a06420f6541dc232dea254989`);
    dispatch(ADD_COMPANY_INFO(companyInfo.data[0]));
    history.push('/info');
  };
  return (
    <section className="companies mt-3">
      {filtered.map(stock => (
        <div key={stock.ticker} className="company">
          <h5 className="text-white">{stock.companyName}</h5>
          <span className="symbol">{stock.ticker}</span>
          <div className="finances mt-3 mb-4">
            <span className={stock.changes > 0 ? 'price' : 'text-danger'}>{stock.changes}</span>
            <span>{stock.price}</span>
          </div>
          <button type="submit" className="details btn" onClick={() => handleClick(stock.ticker)}>Details</button>
        </div>
      ))}
    </section>
  );
};

export default Stocks;
