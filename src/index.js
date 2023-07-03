import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import products from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Create the Redux store
const store = createStore(products);

// Get the root element
const rootElement = document.getElementById('root');

// Render the app wrapped in the Redux provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
