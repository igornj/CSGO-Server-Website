/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  ServerComponent,
  ServerHero,
  Servers,
  Server,
  Buttons,
  CopyTipContainer,
  CopyButton,
  SteamButton,
  IconLink,
} from './ServidoresElements';

// Components
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';
import Loading from '../../Components/Loading';

// Assets
import mirageImg from '../../Assets/images/mirage_02.jpg';

function Servidores() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const copyServerId = () => {
    navigator.clipboard.writeText('Servidor teste');
    const tooltip = document.getElementById('tip');
    tooltip.innerHTML = 'Copiado!';
  };

  // setIsLoading(false);

  return (
    <div id="servidores">
      <Loading isLoading={isLoading} />
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
                onLoad={() => setIsLoading(false)}
              />
            </a>

            <Buttons>
              <CopyTipContainer>
                <span id="tip">Copiar IP</span>
                <CopyButton type="button" onClick={copyServerId} />
              </CopyTipContainer>

              <IconLink to="steam://connect/200.155.174.73:27015">
                <SteamButton />
              </IconLink>
            </Buttons>
          </Server>
        </Servers>
      </ServerComponent>
      <Footer />
    </div>
  );
}

export default Servidores;
