import React from 'react';

import Home from './pages/Home';
import Diva from './pages/Diva';
import Conteudo from './pages/Conteudo';

import './styles.css';

function App() {
  return (
    <div id="container">
      <Home />
      <Diva />
      <Conteudo />
    </div>
  );
}

export default App;
