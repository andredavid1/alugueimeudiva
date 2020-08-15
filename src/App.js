import React from 'react';

import Home from './pages/Home';
import Diva from './pages/Diva';
import Conteudo from './pages/Conteudo';

import './styles.css';
import Contato from './pages/Contato';

function App() {
  return (
    <div id="container">
      <Home />
      <Diva />
      <Conteudo />
      <Contato />
    </div>
  );
}

export default App;
