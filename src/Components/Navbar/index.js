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
        <NavButton to="/">VIP</NavButton>
        <Bars onClick={toggle} />
        <NavLink to="/servidores">Servidores</NavLink>
        <NavLink to="/">Suporte</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </NavContent>
    </Nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
