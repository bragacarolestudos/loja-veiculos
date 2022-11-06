import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro/index';
import Home from './pages/home/index';
import Login from './pages/login/index';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
