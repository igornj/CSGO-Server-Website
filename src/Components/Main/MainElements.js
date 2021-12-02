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
`;

export const MainTitle = styled.div`
  margin: 2.5rem 1rem;
  color: white;

  h1 {
    font-weight: 100;
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem 2rem 5rem 2rem;
  color: white;
  width: 40%;
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
    width: 600px;
    text-align: center;

    div:last-child {
      grid-column-start: span 2;
    }
  }
`;

export const Signal = styled(FaSignal)`
  color: white;
  font-size: 4rem;
  opacity: 7%;
`;

export const Meter = styled(FaTachometerAlt)`
  color: white;
  font-size: 4rem;
  opacity: 7%;
`;

export const Hat = styled(FaHatCowboy)`
  color: white;
  font-size: 4rem;
  opacity: 7%;
`;

export const Headset = styled(FaHeadset)`
  color: white;
  font-size: 3.5rem;
  opacity: 7%;
  margin-bottom: 10px;
`;

export const Emoji = styled(FaGrinStars)`
  color: white;
  font-size: 3.5rem;
  opacity: 7%;
  margin-bottom: 10px;
`;
