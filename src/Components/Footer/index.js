import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../Assets/images/upc-logo-branco-02.png';

import { Foo, FooLink, IconLink, FooElements, By } from './FooterElements';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Foo>
      <IconLink onClick={scrollToTop} spy smooth duration={500} delay={2000}>
        <img src={logo} alt="logo" />
      </IconLink>

      <FooElements>
        <FooLink to="/vip#vip">Se torne um VIP</FooLink>
        <FooLink to="/servidores#servidores">Servidores</FooLink>
        <FooLink to="/#faq">FAQ</FooLink>
        <FooLink to="/">Suporte</FooLink>
      </FooElements>

      <By>
        <p>
          Feito com carinho por
          <a className="a" href="https://github.com/igornj">
            Igor Nunes
          </a>
        </p>
      </By>
    </Foo>
  );
}

// {window.location.pathname === '/' ? (
//   <FooScroll to="faq">FAQ</FooScroll>
// ) : (
//   <FooLink to="/#faq" smooth duration={1000}>
//     FAQ
//   </FooLink>
// )}
// <FooLink to="/">Suporte</FooLink>
