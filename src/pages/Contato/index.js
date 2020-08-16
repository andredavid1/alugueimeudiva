import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import MelissaImage from '../../assets/img/melissa.png';
import DivaImage from '../../assets/img/diva.png';
import YouTubeImage from '../../assets/img/youtube.png';

import './styles.css';

function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, email)
    if(!name || name.trim() === '') {
      alert('O campo nome precisa ser preenchido.');
      document.getElementById('name').focus();
      return
    }

    if(!email || email.trim() === '') {
      alert('O campo email precisa ser preenchido.');
      document.getElementById('email').focus();
      return
    }

    api.post('create', {
      name, email
    }).then(() => {
      alert('Cadastro realizado com sucesso. Em breve entraremos em contato com você.');
    }).catch((e) => {
      alert('Erro no cadastro. ' + e);
    });
  }

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
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name">Nome:</label>
              <input className="form-control" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="email">E-mail:</label>
              <input className="form-control" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
