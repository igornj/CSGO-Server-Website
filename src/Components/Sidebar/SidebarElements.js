import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { HashLink as LinkH } from 'react-router-hash-link';

export const SidebarContainer = styled.aside`
  position: fixed;
  background: #0a0a0a;
  top: ${({ isOpen }) => (isOpen ? '5rem' : '-60rem')};
  left: 0rem;
  right: 0;
  width: 100vw;
  height: 620px;
  z-index: 2;
  transition: 0.3s ease-in-out;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SidebarLink = styled(LinkH)`
  text-align: center;
  padding: 2rem;
  color: white;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0a0a0a;
  }
`;

export const SidebarScroll = styled(LinkS)`
  text-align: center;
  padding: 2rem;
  color: white;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0a0a0a;
  }
`;
