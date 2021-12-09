import styled from 'styled-components';
import { HashLink as LinkH } from 'react-router-hash-link';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
// import bgImgTeste from '../../Assets/images/teste.png';
import bgImg from '../../Assets/images/mirage.jpeg';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 700px) {
    align-items: flex-start;
    text-align: left;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
      url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
  }
`;

export const HeroWrapper = styled.div`
  h1 {
    font-size: clamp(1rem, 4rem, 3.5rem);
    z-index: 1;
    letter-spacing: 1px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 2.5rem;
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
      margin-bottom: 0;
    }
  }
`;

export const HeroButton = styled(LinkH)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  background: #0a0a0a;
  padding: 1rem 4rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  z-index: 1;

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

export const CopyTipContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  left: 70%;
  bottom: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0a0a;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #fff;
    color: #0a0a0a;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  span {
    visibility: hidden;
    width: 150px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 999;
    bottom: -65%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
  }

  @media screen and (max-width: 700px) {
    position: absolute;
    left: 50%;
    bottom: 31%;
    transform: translate(-50%);
  }
`;

export const CopyButton = styled(HiOutlineClipboardCopy)`
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0a0a0a;
  }
`;
