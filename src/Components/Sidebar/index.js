import React from 'react';
import PropTypes from 'prop-types';

import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarScroll,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onclick={toggle}>
      <SidebarMenu>
        <SidebarLink to="/servidores#servidores">Servidores</SidebarLink>
        {window.location.pathname === '/' ? (
          <SidebarScroll to="faq">FAQ</SidebarScroll>
        ) : (
          <SidebarLink to="/#faq" smooth duration={1000}>
            FAQ
          </SidebarLink>
        )}
        <SidebarLink to="/">Suporte</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;

Sidebar.defaultProps = {
  isOpen: false,
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};
