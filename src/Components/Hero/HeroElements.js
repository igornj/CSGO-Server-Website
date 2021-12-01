import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 550px;
  color: white;
  background: #001324;
`;

export const HeroWrapper = styled.div`
  img {
    position: absolute;
    top: 7rem;
    left: 0;
    width: 100vw;
    height: 56vh;
    min-width: 100vw;
    min-height: 50vh;
    opacity: 20%;
    border-radius: 10px;
  }
  h1 {
    font-size: clamp(1rem, 2rem, 3.5rem);
    z-index: 1;
    letter-spacing: 1px;
  }
  p {
    font-weight: 100;
    font-size: 0.8rem;
  }
`;

export const HeroButton = styled(Link)`
  cursor: pointer;
  color: #fff;
  background: #0a0a0a;
  padding: 1rem 2rem;
  margin-top: 5rem;
  border-radius: 5px;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0a0a0a;
  }
`;
