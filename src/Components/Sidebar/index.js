import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, SidebarMenu, SidebarLink } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <div aria-hidden="true" onClick={toggle}>
      <SidebarContainer isOpen={isOpen} onclick={toggle}>
        <SidebarMenu>
          <SidebarLink to="/servidores#servidores">Servidores</SidebarLink>
          <SidebarLink to="/#faq" smooth duration={1000}>
            FAQ
          </SidebarLink>
          <SidebarLink to="/">Suporte</SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </div>
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
