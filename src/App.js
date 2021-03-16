import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Stocks from './components/Stocks';
import './css/index.css';
import './App.css';
import { ADD_TO_STOCK } from './actions/stock_action';
import Info from './components/Info';

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    const stockApi = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=18e14f4a06420f6541dc232dea254989');
    dispatch(ADD_TO_STOCK(stockApi.data));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) {
    return (
      <div className="loader-div mt-5 ml-5">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }

  return (
    <div className="body">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route component={Stocks} path="/stocks" />
          <Route component={Info} path="/info" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
