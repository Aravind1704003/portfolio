import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <head>
      <title>
        portfolio
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
