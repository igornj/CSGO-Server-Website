// eslint-disable-next-line no-unused-vars
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    font-family: 'Outfit', sans-serif;
    background: #0a0a0a;
    overflow-x: hidden;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none
  }

`;
