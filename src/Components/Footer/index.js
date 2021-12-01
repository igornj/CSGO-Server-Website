import React from 'react';
import logo from '../../Assets/images/logo-upc.jpg';

import { Foo, FooLink, IconLink, FooContent } from './FooterElements';

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
    </Foo>
  );
}
