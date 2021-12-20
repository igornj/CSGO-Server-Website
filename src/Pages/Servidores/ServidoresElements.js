import styled from 'styled-components';
// import { FaCopy } from 'react-icons/fa';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  color: #0a0a0a;
  margin: 2rem 0 0 6rem;

  h1 {
    font-weight: 200;
    white-space: nowrap;
    margin-bottom: 0.8rem;
  }

  a {
    white-space: nowrap;
  }

  @media screen and (max-width: 700px) {
    align-items: center;
    margin: 2rem 0 0 0;
  }
`;

export const Server = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CopyTipContainer = styled.div`
  margin-top: 1rem;
  width: 30%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #0a0a0a;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    /* background: red; */
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
    font-size: 1.2rem;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 999;
    bottom: 6%;
    left: 200px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
  }

  /* @media screen and (max-width: 700px) {
    position: absolute;
    left: 50%;
    bottom: 31%;
    transform: translate(-50%);
  } */
`;

export const CopyButton = styled(HiOutlineClipboardCopy)`
  color: #fff;
  width: 100%;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #777;
  }
`;
