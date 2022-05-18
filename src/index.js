import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import HomePage from './components/home-view/home-view';
import './custom.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const store = configureStore({reducer: rootReducer}, devToolsEnhancer());

root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);