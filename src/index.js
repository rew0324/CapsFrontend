import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { store } from './hamper/hamper';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
       
  </React.StrictMode>*/

  //This code is for Cash Flow Statement
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode> 


  
);

//This code is for Cash Flow Statement
 /*<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode> */


