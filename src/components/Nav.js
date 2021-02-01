import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. A Capture</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/trabalhos">2. Trabalhos</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/trabalhos' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contato">3. Contato</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contato' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -70%;
  left: 35%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
