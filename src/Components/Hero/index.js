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
          <p>Servidores no Brasil de DM</p>
          <HeroButton to="/">Servidores</HeroButton>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;
