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
`;

export const MainWrapper = styled.div`
  margin: 2.5rem 1rem;
  color: white;

  h1 {
    font-weight: 100;
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
  margin-top: 5rem;
  position: relative;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 4rem;
  }
`;

// export const PingContainer = styled.div`
//   margin-bottom: 7rem;
// `;
// export const TickrateContainer = styled.div``;

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
