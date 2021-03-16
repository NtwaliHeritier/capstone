import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stocks from './components/Stocks';

function App() {
  const [stocks, setStock] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const stockApi = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=c2ea40d4e9b1d03067a58a27521c202e');
      setStock(stockApi.data);
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <Navbar />
      <Stocks stocks={stocks} />
    </div>
  );
}

export default App;
