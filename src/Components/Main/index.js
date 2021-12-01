import React from 'react';

import {
  MainContainer,
  MainWrapper,
  MainContent,
  Signal,
  Meter,
  Hat,
  Headset,
  Emoji,
} from './MainElements';

function Main() {
  return (
    <MainContainer>
      <MainWrapper>
        <h1>Sobre Nós</h1>
        <p>
          O UpperClutch nasceu de um grupo de amigos apaixonados por FPS. O CSGO
          fez grande parte dessa amizade que dura mais de 10 anos, Essa paixão
          pelo game nos fez criar servidores dedicados para comunidade.
        </p>
        <MainContent>
          <Signal />
          <h1>Ping baixo</h1>
          <p>Servidores no Brasil com baixa latência.</p>

          <Meter />
          <h1>128 Tickrate</h1>
          <p>Todos os servidores Uppercluch rodam a 128 Tickrate.</p>

          <Hat />
          <h1>Skins de graça</h1>
          <p>
            Você pode utilizar as skins de facas, luvas e armas dentro do
            servidor. Utilizando o comando !ws.
          </p>

          <Emoji />
          <h1>VIP</h1>
          <p>Jogadores VIP tem vantagens de espaço e prioridade em salas.</p>

          <Headset />
          <h1>Suporte via Discord</h1>
          <p>
            Caso tenha qualquer problema com o servidor, basta entrar em
            contatos conosco em nosso servidor no discord.
          </p>
        </MainContent>
      </MainWrapper>
    </MainContainer>
  );
}

export default Main;
