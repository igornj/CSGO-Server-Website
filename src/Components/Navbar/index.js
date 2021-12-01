import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../Assets/images/upc-logo-branco.png';

import {
  Nav,
  NavLink,
  Bars,
  IconLink,
  NavButton,
  NavContent,
} from './NavbarElements';

export default function Navbar({ toggle }) {
  return (
    <Nav>
      <IconLink to="/">
        <img src={logo} alt="logo" />
      </IconLink>

      <NavContent>
        <Bars onClick={toggle} />
        <NavButton to="/">VIP</NavButton>
        <NavLink to="/">Se torne um VIP</NavLink>
        <NavLink to="/">Servidores</NavLink>
        <NavLink to="/">Suporte</NavLink>
        <NavLink to="/">FAQ</NavLink>
      </NavContent>
    </Nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
