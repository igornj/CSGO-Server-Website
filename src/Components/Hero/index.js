/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import {
  HeroContainer,
  HeroWrapper,
  HeroButton,
  CopyButton,
  CopyTipContainer,
} from './HeroElements';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

function Hero() {
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
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <h1>UpperClutch</h1>
          <p>Servidores no Brasil de DM</p>
          <CopyTipContainer>
            <span id="tip">Copiar IP</span>
            <CopyButton type="button" onClick={copyServerId} />
          </CopyTipContainer>
          <HeroButton to="/servidores#servidores">Servidores</HeroButton>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;
