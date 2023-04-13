import React from 'react';
import { Logo, Search } from '.';
import { AuthorAvatar, ButtonLink, ButtonsGroup, Container, Header } from './Navbar.styles';
import useAuth from '../../hooks/useAuth';
import defaultAvatar from '@assets/defaultAvatar.svg';

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Header>
      <Container>
        <Logo />
        <Search />
        {user ? (
          <ButtonsGroup>
            <AuthorAvatar src={user.avatarLink || defaultAvatar} />
          </ButtonsGroup>
        ) : (
          <ButtonsGroup>
            <ButtonLink
              variant="primary"
              to="/register"
            >
              Sign Up
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              to="/login"
            >
              Log In
            </ButtonLink>
          </ButtonsGroup>
        )}
      </Container>
    </Header>
  );
};

export default Navbar;
