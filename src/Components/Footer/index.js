import React from 'react';
import logo from '../../Assets/images/logo-upc.jpg';

import { Foo, FooLink, IconLink, FooContent, By } from './FooterElements';

export default function Footer() {
  return (
    <Foo>
      <IconLink to="/">
        <img src={logo} alt="logo" />
      </IconLink>

      <FooContent>
        <FooLink to="/">Se torne um VIP</FooLink>
        <FooLink to="/">Servidores</FooLink>
        <FooLink to="/">Suporte</FooLink>
        <FooLink to="/">FAQ</FooLink>
      </FooContent>

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
