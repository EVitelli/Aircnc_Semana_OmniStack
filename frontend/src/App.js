// usestate = serve para criação de uma novo estado dentro do react
import React from 'react';
import Routes from './routes';

import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    // Devido a palavra class ser reservado do HTML, em React se usa classname para dizer a qual classe o componente se refere
    <div className="container">
      {/* Alt = texto alternativo */}
      <img src={logo} alt="Aircnc" />
      <div className="content">
        < Routes />
      </div>
    </div>
  );
}

export default App;
