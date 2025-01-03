import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StoreContextProvider from './Context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  
);
