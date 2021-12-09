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
  border-bottom: solid 1px white;
  white-space: nowrap;
  z-index: 999;
  width: 100%;
  height: 150px;
  //border-top: 1px solid #0a0a0a;

  @media screen and (max-width: 700px) {
    justify-content: space-evenly;
  }
`;

export const IconLink = styled(LinkS)`
  cursor: pointer;
  margin-left: 1rem;
  img {
    width: 8rem;
    margin: 1rem;
  }
`;

// export const FooContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   margin: 0rem 4rem 0.5rem 1rem;
// `;

export const FooElements = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0rem 4rem 0.5rem 1rem;
`;

export const FooLink = styled(LinkH)`
  font-size: clamp(0.5rem, 0.8rem, 1rem);
  color: #fff;
  margin-bottom: 0.4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #adadad;
  }
`;

export const FooScroll = styled(LinkS)`
  cursor: pointer;
  font-size: clamp(0.5rem, 0.8rem, 1rem);
  color: #fff;
  margin-bottom: 0.4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #adadad;
  }
`;

export const By = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 500%);
  p {
    color: #fff;
    font-size: 0.6rem;
  }

  a.a {
    text-decoration: none;
    color: blue;
    margin-left: 3px;
  }
`;
