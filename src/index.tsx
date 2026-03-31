import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { STORAGE_KEYS } from './constants/storageKeys';

// Limpiar localStorage al cargar la aplicación
localStorage.removeItem(STORAGE_KEYS.FIGURITAS_COMPLETAS);
localStorage.removeItem(STORAGE_KEYS.BILLETERA);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);

reportWebVitals();
