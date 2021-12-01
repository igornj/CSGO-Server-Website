import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a0a0a;
  border-bottom: solid 1px white;

  ul {
    display: flex;
    flex-direction: row;
    margin: 0 1.5rem 0 0;
  }

  li {
    margin: 1rem;
    color: white;
    transition: all ease 0.5s;
  }

  img {
    width: 70px;
    margin: 1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550px;
  color: white;
  background: #001324;

  /* img {
    width: 100%;
    height: 100%;
    opacity: 20%;
    border-radius: 10px;
  } */

  p {
    font-weight: 100;
  }
`;
