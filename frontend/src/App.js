import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    // Devido a palavra class ser reservado do HTML, em React se usa classname para dizer a qual classe o componente se refere
    <div className="container">
      {/* Alt = texto alternativo */}
      <img src={logo} alt="Aircnc"/>
      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
        <form>
          <label htmlFor="email">E-mail *</label>
          <input type="text" id="email" placeholder="Seu melhor e-mail"/>
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
