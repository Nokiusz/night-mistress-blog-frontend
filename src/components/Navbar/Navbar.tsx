import React from 'react';
import { Logo } from './index';
import { ButtonLink, ButtonLinkContainer, Container, Header } from './Navbar.styles';

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Logo />
        <div>
          <h1>searchBox</h1>
        </div>
        <ButtonLinkContainer>
          <ButtonLink to="/register">
            Sign Up
          </ButtonLink>
          <ButtonLink to="/login">
            Log In
          </ButtonLink>
        </ButtonLinkContainer>
      </Container>
    </Header>
  );
};

export default Navbar;