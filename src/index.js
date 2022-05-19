import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { debounce } from 'debounce';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import HomePage from './components/home-view/home-view';
import { saveState, loadState } from './util/localStorage';
import './custom.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const persistedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, 
  devToolsEnhancer,
});

store.subscribe(
  debounce(() => {
    saveState(store.getState())
  }, 800)
);

root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);