import NightMistressLogo from '@assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer, PageHeading  } from './Navbar.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img
          src={NightMistressLogo}
          alt="nightmistress logo"
          width={49}
          height={49}
        />
        <PageHeading>Blog</PageHeading>
      </Link>
    </LogoContainer>
  );
};

export default Logo;