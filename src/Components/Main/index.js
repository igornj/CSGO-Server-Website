import React from 'react';

import {
  MainContainer,
  MainTitle,
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
      <MainTitle name="main">
        <h1>Sobre Nós</h1>
        <p>
          O Time UpperClutch nasceu de um grupo de amigos apaixonados por FPS. O
          CSGO fez grande parte dessa amizade que dura mais de 10 anos. Paixão
          essa pelo game que nos fez buscar formas de melhorar a experiência e a
          diversão da comunidade.
        </p>
      </MainTitle>
      <MainContent>
        <div>
          <Signal />
          <h1>Ping baixo</h1>
          <p>Servidores no Brasil com baixa latência.</p>
        </div>

        <div>
          <Meter />
          <h1>128 Tickrate</h1>
          <p>Todos os servidores Uppercluch rodam a 128 Tickrate.</p>
        </div>

        <div>
          <Hat />
          <h1>Skins de graça</h1>
          <p>
            Você pode utilizar as skins de facas, luvas e armas dentro do
            servidor, utilizando o comando !ws.
          </p>
        </div>

        <div>
          <Emoji />
          <h1>VIP</h1>
          <p>Jogadores VIP tem vantagens de espaço e prioridade em salas.</p>
        </div>

        <div>
          <Headset />
          <h1>Suporte via Discord</h1>
          <p>
            Caso tenha qualquer problema com o servidor, basta entrar em
            contatos conosco em nosso servidor no discord.
          </p>
        </div>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
