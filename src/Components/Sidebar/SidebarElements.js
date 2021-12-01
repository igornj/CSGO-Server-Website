import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  background: #0a0a0a;
  top: ${({ isOpen }) => (isOpen ? '5rem' : '-60rem')};
  left: 8rem;
  width: 100vw;
  height: 450px;
  z-index: 999;
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

export const SidebarLink = styled(Link)`
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
