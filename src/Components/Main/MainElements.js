import styled from 'styled-components';
import {
  FaSignal,
  FaTachometerAlt,
  FaHatCowboy,
  FaHeadset,
  FaGrinStars,
} from 'react-icons/fa';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin-top: -3rem;
`;

export const MainTitle = styled.div`
  color: #0a0a0a;
  height: 200px;
  width: 70vw;
  margin-top: 4rem;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    margin-top: 0rem;
    width: 80vw;
  } ;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 2rem 1rem 2rem;
  color: #0a0a0a;
  width: 60%;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 4rem;
    place-items: center;
    width: 800px;
    text-align: center;

    div:last-child {
      grid-column-start: span 2;
    }
  }
`;

export const Signal = styled(FaSignal)`
  color: #0a0a0a;
  font-size: 4rem;
  opacity: 20%;
`;

export const Meter = styled(FaTachometerAlt)`
  color: #0a0a0a;
  font-size: 4rem;
  opacity: 20%;
`;

export const Hat = styled(FaHatCowboy)`
  color: #0a0a0a;
  font-size: 4rem;
  opacity: 20%;
`;

export const Headset = styled(FaHeadset)`
  color: #0a0a0a;
  font-size: 3.5rem;
  opacity: 20%;
  margin-bottom: 10px;
`;

export const Emoji = styled(FaGrinStars)`
  color: #0a0a0a;
  font-size: 3.5rem;
  opacity: 20%;
  margin-bottom: 10px;
`;
