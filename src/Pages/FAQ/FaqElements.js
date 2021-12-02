import styled from 'styled-components';
import bgImg from '../../Assets/images/mirage.jpeg';

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FaqHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0rem 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    color: #fff;
  }

  p {
    font-weight: 100;
    color: #fff;
  }
`;

export const Faq = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  color: #0a0a0a;
`;
