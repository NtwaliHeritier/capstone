import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import stockReducer from './reducers/stockReducer';
import './index.css';
import App from './App';

const store = createStore(stockReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
