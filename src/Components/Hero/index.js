/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';

import { HeroContainer, HeroWrapper, HeroButton } from './HeroElements';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <h1>UpperCluch</h1>
          <p>Servidores de DM</p>
          <img src="" alt="background" />
        </HeroWrapper>
        <HeroButton to="/">Servidores</HeroButton>
      </HeroContainer>
    </>
  );
}

export default Hero;
