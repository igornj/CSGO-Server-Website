/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  ServerComponent,
  ServerHero,
  Servers,
  CopyButton,
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

  return (
    <div id="servidores">
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ServerComponent>
        <ServerHero>
          <h1>Servidores</h1>
          <p>Conheça nossos servidores</p>
          <CopyButton
            type="button"
            onClick={() => {
              navigator.clipboard.writeText('Servidor teste');
              alert('Server copiado');
            }}
          />
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
