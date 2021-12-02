import React, { useState } from 'react';
import { ServerComponent, ServerHero, Servers } from './ServidoresElements';

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
    <>
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ServerComponent>
        <ServerHero>
          <h1>Servidores</h1>
          <p>Conheça nossos servidores</p>
        </ServerHero>
        <Servers>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Servers>
      </ServerComponent>
      <Footer />
    </>
  );
}

export default Servidores;
