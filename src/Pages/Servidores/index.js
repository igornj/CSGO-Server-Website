/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  ServerComponent,
  ServerHero,
  Servers,
  Server,
  CopyTipContainer,
  CopyButton,
  SteamButton,
  IconLink,
} from './ServidoresElements';

// Components
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

// Assets
import mirageImg from '../../Assets/images/mirage_02.jpg';

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
        </ServerHero>
        <Servers>
          <Server>
            <h1>Upper DeathMatch Mirage</h1>
            <img width="400px" src={mirageImg} alt="map_mirage" />
            <a
              href="https://www.gametracker.com/server_info/200.155.174.73:27015/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cache.gametracker.com/server_info/200.155.174.73:27015/b_350_20_050505_202743_ffffff_111111.png"
                border="0"
                width="400"
                height="20"
                alt="server-info"
              />
            </a>

            <CopyTipContainer>
              <span id="tip">Copiar IP</span>
              <CopyButton type="button" onClick={copyServerId} />
            </CopyTipContainer>

            <IconLink to="steam://connect/200.155.174.73:27015">
              <SteamButton />
            </IconLink>
          </Server>
        </Servers>
      </ServerComponent>
      <Footer />
    </div>
  );
}

export default Servidores;
