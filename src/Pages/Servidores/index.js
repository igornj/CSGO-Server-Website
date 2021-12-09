import React, { useState } from 'react';
import {
  ServerComponent,
  ServerHero,
  Servers,
  CopyButton,
  CopyTip,
} from './ServidoresElements';

// Components
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

function Servidores() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const copyServerId = () => {
    navigator.clipboard.writeText('Servidor teste');

    const tooltip = document.getElementById('tip');
    tooltip.innerHTML = 'Copiado!';
  };

  return (
    <div id="servidores">
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ServerComponent>
        <ServerHero>
          <h1>Servidores</h1>
          <p>Conheça nossos servidores</p>
          <CopyTip>
            <span id="tip">Copiar IP</span>
            <CopyButton type="button" onClick={copyServerId} />
          </CopyTip>
        </ServerHero>
        <Servers>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Servers>
      </ServerComponent>
      <Footer />
    </div>
  );
}

export default Servidores;
