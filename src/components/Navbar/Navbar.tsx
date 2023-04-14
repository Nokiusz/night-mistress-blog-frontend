import React, { useEffect, useState } from 'react';
import { Logo, Search } from '.';
import { AuthorAvatar, ButtonLink, ButtonsGroup, Container, Header } from './Navbar.styles';
import useAuth from '../../hooks/useAuth';
import defaultAvatar from '@assets/defaultAvatar.svg';
import { useLocation } from 'react-router-dom';
import { Author } from '../../types';

const Navbar = () => {
  const { getUser } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const [user, setUser] = useState<Author | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('nmblog_token');
      if (token) {
        const data = await getUser(token);
        if (data) {
          setUser(data);
        }
      }
    };
    console.log('user', user);
    console.log('pathname', pathname);
    fetchUser();
  }, [user, pathname]);

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
