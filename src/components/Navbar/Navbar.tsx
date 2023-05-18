import React, { useEffect, useState } from 'react';
import { Logo, Search } from '.';
import { AuthorAvatar, Button, ButtonLink, ButtonsGroup, Container, Header } from './Navbar.styles';
import useAuth from '../../hooks/useAuth';
import defaultAvatar from '@assets/defaultAvatar.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Author } from '../../types';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const Navbar = () => {
  const { getUser } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const [user, setUser] = useState<Author | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('nmblog_token');
      if (token && !user) {
        const data = await getUser(token);
        if (data) {
          setUser(data);
        }
      }
    };

    fetchUser();
  }, [user, pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/add/post">
          Add an article
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/profile">
          Edit profile
        </Link>
      ),
    },
    {
      key: '3',
      type: 'group',
      label:  (
        <Button
          onClick={handleLogout}>
            Log out
        </Button>
      ),
    },
  ];

  return (
    <Header>
      <Container>
        <Logo />
        <Search />
        {user ? (
          <ButtonsGroup>
            <Space direction="vertical">
              <Dropdown menu={{ items }} placement="bottomRight" arrow overlayStyle={{ textAlign: 'right' }}>
                  <AuthorAvatar src={user.avatarLink || defaultAvatar} />     
              </Dropdown>
            </Space>
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
