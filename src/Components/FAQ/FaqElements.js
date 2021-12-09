import styled from 'styled-components';

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0 3rem 0rem;
`;

export const FaqTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    font-weight: bold;
    font-size: 3rem;
    color: #0a0a0a;
  }

  p {
    font-weight: 200;
    color: #0a0a0a;
  }
`;

export const Faq = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  color: #0a0a0a;
  margin-left: 5rem;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  } ;
`;
