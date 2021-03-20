import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ADD_COMPANY_INFO } from '../actions/stock_action';
import { useHistory } from 'react-router';
import '../css/index.css';

const Stock = ({stock}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = async symbol => {
    const companyInfo = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=18e14f4a06420f6541dc232dea254989`);
    dispatch(ADD_COMPANY_INFO(companyInfo.data[0]));
    history.push('/info');
  };
  return (
          <>
          <h5 className="text-white">{stock.companyName}</h5>
          <span className="symbol">{stock.ticker}</span>
          <div className="finances mt-3 mb-4">
            <span className={stock.changes > 0 ? 'price' : 'text-danger'}>{stock.changes}</span>
            <span>{stock.price}</span>
          </div>
          <button type="submit" className="details" onClick={() => handleClick(stock.ticker)}>Details</button>
          </>
   );
}
 
export default Stock;