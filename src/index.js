import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Prog from './Prog';
import reportNetEssentials from './reportNetEssentials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Prog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportNetEssentials(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportNetEssentials();
