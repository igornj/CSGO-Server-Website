import React from 'react';

<<<<<<< HEAD
// Components
import Hero from '../../Components/Hero';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';

function Homepage() {
  return (
    <>
      <Hero />
      <Main />
      <Footer />
=======
import logo from '../../Assets/images/logo-upc.jpg';

import Button from '../../Components/Button';
import { Nav, Main } from './styled';

export default function Homepage() {
  return (
    <>
      <Nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        <ul>
          <Link to="/">
            <li>VIP</li>
          </Link>

          <Link to="/">
            <li>SERVIDORES</li>
          </Link>

          <Link to="/">
            <li>SOBRE</li>
          </Link>

          <Link to="/">
            <li>CONTATO</li>
          </Link>
        </ul>
      </Nav>

      <Main>
        <h1>UpperCluch</h1>
        <p>Servers duvidosos mas com muita qualidade</p>
        <Button>Servidores</Button>
      </Main>

      <div>
        <h1>Conheça nossos servidos</h1>
        <p>Vantagens 1 </p>
        <p>Vantagens 2 </p>
        <p>Vantagens 3 </p>
      </div>

      <div>
        <footer>
          <p>rodamão</p>
        </footer>
      </div>
>>>>>>> desktop-first
    </>
  );
}

export default Homepage;
