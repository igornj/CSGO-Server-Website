import styled from 'styled-components';
// import { FaCopy } from 'react-icons/fa';
import bgImg from '../../Assets/images/mirage.jpeg';

export const ServerComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ServerHero = styled.div`
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

export const Servers = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  color: #0a0a0a;
`;

// export const CopyButton = styled(FaCopy)`
//   color: #fff;
//   font-size: 2rem;
//   margin-top: 2rem;
//   cursor: pointer;
// `;

// export const CopyTipContainer = styled.div`
//   position: relative;
//   width: 150px;
//   height: 100px;
//   text-align: center;

//   &:hover span {
//     visibility: visible;
//     opacity: 1;
//   }

//   span {
//     visibility: hidden;
//     width: 150px;
//     background-color: #555;
//     color: #fff;
//     text-align: center;
//     border-radius: 6px;
//     padding: 5px;
//     position: absolute;
//     z-index: 999;
//     bottom: -5%;
//     left: 50%;
//     margin-left: -75px;
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//     white-space: nowrap;
//   }
// `;
