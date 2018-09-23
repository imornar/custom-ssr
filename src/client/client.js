import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: '/api'
});
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
), document.querySelector('#react-root'));
