import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import stockReducer from './reducers/stockReducer';
import './index.css';
import App from './App';
import companyReducer from './reducers/companyReducer';

const combinedReducers = combineReducers({
  stocks: stockReducer,
  info: companyReducer,
});
const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
