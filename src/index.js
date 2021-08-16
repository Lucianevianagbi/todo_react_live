import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/globalCSS'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
