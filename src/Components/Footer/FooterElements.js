import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { HashLink as LinkH } from 'react-router-hash-link';

export const Foo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #0a0a0a;
  white-space: nowrap;
  z-index: 999;
  width: 100%;
  height: 100px;

  @media screen and (max-width: 700px) {
    justify-content: space-evenly;
  }
`;

export const IconLink = styled(LinkS)`
  cursor: pointer;
  margin-left: 1rem;
  img {
    width: 6rem;
    margin: 1rem;
  }
`;

export const FooElements = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0rem 4rem 0rem 1rem;
`;

export const FooLink = styled(LinkH)`
  font-size: 0.6rem;
  color: #fff;
  margin-bottom: 0.3rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #adadad;
  }
`;

export const By = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 600%);
  p {
    color: #fff;
    font-size: 0.5rem;
  }

  a.a {
    text-decoration: none;
    color: blue;
    margin-left: 3px;
  }
`;
