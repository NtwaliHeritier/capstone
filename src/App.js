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
import News from './components/News';
import ApiCall from './modules/apicall';

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    const stockApi = await ApiCall.callStocks();
    dispatch(ADD_TO_STOCK(stockApi.data));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) {
    return (
      <div className="loader-div d-flex align-items-center justify-content-center">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Stocks} exact path="/" />
          <Route component={Info} exact path="/info" />
          <Route component={News} exact path="/news" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
