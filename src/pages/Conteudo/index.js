import React from 'react';

import AutoconhecimentoImage from '../../assets/img/autoconhecimento.png';
import EmocoesImage from '../../assets/img/emocoes.png';
import EstresseImage from '../../assets/img/estresse.png';
import TrianguloImage from '../../assets/img/triangulo-branco.png';

import './styles.css';

function Conteudo() {
  return (
    <section id="conteudo">
      <div className="title">
        <h2>NOSSO CONTEÚDO</h2>
      </div>
      <div className="topicos">
        <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={AutoconhecimentoImage} alt="autoconhecimento" />
                <div className="card-body">
                  <p className="card-text">AUTOCONHECIMENTO</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={EmocoesImage} alt="reconhecendo minhas emoções" />
                <div className="card-body">
                  <p className="card-text">RECONHECENDO MINHAS EMOÇÕES</p>                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={EstresseImage} alt="gerenciamento do estresse" />
                <div className="card-body">
                  <p className="card-text">GERENCIAMENTO DO ESTRESSE</p>
                </div>
              </div>
            </div>
          </div>
        






      </div>        
      <div className="decoracao">
        <img src={TrianguloImage} alt="decoração"/>
      </div>
    </section>
  );
}

export default Conteudo;
