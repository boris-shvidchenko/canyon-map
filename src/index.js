// Components
import App from './App';
// Style
import './index.css';
// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
// Functions
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
