import React from 'react';
import { Logo } from './index';
import { Search } from './Search';
import { ButtonLink, ButtonsGroup, Container, Header } from './Navbar.styles';

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Logo />
        <Search />
        <ButtonsGroup>
          <ButtonLink variant='primary' to="/register">
            Sign Up
          </ButtonLink>
          <ButtonLink variant='secondary' to="/login">
            Log In
          </ButtonLink>
        </ButtonsGroup>
      </Container>
    </Header>
  );
};

export default Navbar;
