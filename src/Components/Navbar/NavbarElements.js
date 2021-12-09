import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { HashLink as LinkH } from 'react-router-hash-link';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a0a0a;
  white-space: nowrap;
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 80px;
`;

export const IconLink = styled(LinkR)`
  cursor: pointer;
  img {
    width: 90px;
    margin: 1rem 1rem 1rem 0rem;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(LinkH)`
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #adadad;
  }

  padding: 1rem 2rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavScroll = styled(LinkS)`
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #adadad;
  }

  padding: 1rem 2rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavButton = styled(LinkH)`
  cursor: pointer;
  color: #0a0a0a;
  background: #fff;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c7c7c7;
    color: #0a0a0a;
  }

  @media screen and (max-width: 700px) {
    margin-right: 2.5rem;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  margin-right: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #c7c7c7;
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
