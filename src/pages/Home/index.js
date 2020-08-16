import React from 'react';

import Logo from '../../assets/img/logo.png';
import Triangulos from '../../assets/img/triangulos.png';

import './styles.css';

function Home() {
  return (
    <section id="home">
      <div className="logo">
        <img src={Logo} alt="logomarca" />
      </div>
      <div className="conteudo">
        <h1>AULA ONLINE GRATUITA</h1>
      </div>
      <div className="footer">
        <div className="inscricao">
          <a className="btn" href="#contato">CLIQUE AQUI E INSCREVA-SE</a>
        </div>
        <div className="triangulos">
          <img src={Triangulos} alt="decoração" />
        </div>
      </div>
    </section>
  );
}

export default Home;
