import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { HashLink as LinkH } from 'react-router-hash-link';
import bgImg from '../../Assets/images/mirage.jpeg';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 700px;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 700px) {
    align-items: flex-start;
    text-align: left;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bgImg});
    background-position: center;
    background-size: cover;
  } ;
`;

export const HeroWrapper = styled.div`
  h1 {
    font-size: clamp(1rem, 4rem, 3.5rem);
    z-index: 1;
    letter-spacing: 1px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 3rem;
    font-weight: 100;
    font-size: clamp(0.8rem, 1.2rem, 1.5rem);
  }

  @media screen and (min-width: 700px) {
    margin-left: 5rem;

    h1 {
      font-size: clamp(1rem, 4rem, 5rem);
    }
    p {
      font-weight: 100;
      font-size: clamp(0.8rem, 1.5rem, 2rem);
    }
  }
`;

export const HeroButton = styled(LinkH)`
  cursor: pointer;
  color: #fff;
  background: #0a0a0a;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0a0a0a;
  }

  @media screen and (min-width: 700px) {
    padding: 1rem 5rem;
    font-size: 1.2rem;
  }
`;
