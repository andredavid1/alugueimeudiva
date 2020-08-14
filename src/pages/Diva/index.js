import React from 'react';

import LogoImage from '../../assets/img/logo.png';
import DivaImage from '../../assets/img/diva.png';
import YouTubeImage from '../../assets/img/youtube.png';
import TrianguloImage from '../../assets/img/triangulo-branco.png';

import './styles.css';

function Diva() {
  return (
    <section id="diva">
      <div className="logo">
        <img src={LogoImage} alt="logomarca" />
      </div>
      <div className="conteudo">
        <h2>TODO SÁBADO<br />ÀS 10:00 HORAS DA MANHÃ</h2>
        <h3>NO MEU CANAL DO YOUTUBE <strong>ALUGUEI MEU DIVÃ</strong></h3>
      </div>
      <div className="footer">
        <div className="logoCanal">
          <a href="/">
            <img className="diva" src={DivaImage} alt="aluguei meu divã" />
            <img className="youtube" src={YouTubeImage} alt="canal do youtube" />
          </a>          
        </div>        
        <div className="decoracao">
          <img src={TrianguloImage} alt="decoração"/>
        </div>
      </div>
    </section>
  );
}

export default Diva;
