import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/home-view/home-view';
import './custom.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);