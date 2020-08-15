import React from 'react';

import MelissaImage from '../../assets/img/melissa.png';
import DivaImage from '../../assets/img/diva.png';
import YouTubeImage from '../../assets/img/youtube.png';

import './styles.css';

function Contato() {
  return (
    <section id="contato">
      <div className="melissa">
        <img src={MelissaImage} alt="doutora Melissa Duarte - psiquiatra" />
      </div>
      <div className="main">
        <div className="formContato">
          <div className="title">
            <span>Contato</span>
          </div>
          <div className="formulario">
            <form action="/" className="form">
              <label htmlFor="name">Nome:</label>
              <input className="form-control" type="text" name="name" id="name"/>
              <label htmlFor="email">E-mail:</label>
              <input className="form-control" type="email" name="email" id="email"/>
              <button className="btn btn-block" type="submit">Enviar</button>  
            </form>
          </div>
        </div>
        <div className="midias">
          <label>E-mail</label>
          <span>melissaduarte@primepsiquiatria.com</span>
          <label>Instagram</label>
          <span>@dramelissaduarte</span>
          <label>Facebook</label>
          <span>@psiquiatramelissaduarte</span>
        </div>
        <div className="canal">
          <div className="logoCanal">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC9AiOKqFcPbqJPB_YfMVilQ">
              <img className="diva" src={DivaImage} alt="aluguei meu divã" />
              <img className="youtube" src={YouTubeImage} alt="canal do youtube" />
            </a>          
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Contato;
