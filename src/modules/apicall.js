import axios from 'axios';

const ApiCall = (() => {
  const callStocks = async () => {
    const result = axios.get('https://financialmodelingprep.com/api/v3/actives?apikey=18e14f4a06420f6541dc232dea254989');
    return result;
  };

  const callDetails = async symbol => {
    const result = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=18e14f4a06420f6541dc232dea254989`);
    return result;
  };

  const callNews = async () => {
    const result = await axios.get('https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=18e14f4a06420f6541dc232dea254989');
    return result;
  };
  return { callStocks, callDetails, callNews };
})();

export default ApiCall;
