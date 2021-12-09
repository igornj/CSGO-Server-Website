import React from 'react';
import { FaqContainer, FaqTitle, Faq } from './FaqElements';

function FAQ() {
  return (
    <div id="faq">
      <FaqContainer>
        <FaqTitle>
          <h1>FAQ</h1>
          <p>Perguntas e Respostas</p>
        </FaqTitle>
        <Faq>
          <h2>Quantos servidores existem?</h2>
          <p>Para ver a lista de Servidores: </p>
          <h2>Como comprar o vip?</h2>
          <p>Basta seguir os passos em: </p>
          <h2>Como entro em contato com o suporte?</h2>
          <p>Entre em nosso servidor de suporte: </p>
        </Faq>
      </FaqContainer>
    </div>
  );
}

export default FAQ;
