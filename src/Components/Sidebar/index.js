import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, SidebarMenu, SidebarLink } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onclick={toggle}>
      <SidebarMenu>
        <SidebarLink to="/">Se torne um VIP</SidebarLink>
        <SidebarLink to="/">Servidores</SidebarLink>
        <SidebarLink to="/">FAQ</SidebarLink>
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
