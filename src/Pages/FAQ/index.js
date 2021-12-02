import React, { useState } from 'react';
import { FaqContainer, FaqHero, Faq } from './FaqElements';

// Components
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';

function Servidores() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FaqContainer>
        <FaqHero>
          <h1>FAQ</h1>
          <p>Perguntas e Respostas</p>
        </FaqHero>
        <Faq>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Faq>
      </FaqContainer>
      <Footer />
    </>
  );
}

export default Servidores;
