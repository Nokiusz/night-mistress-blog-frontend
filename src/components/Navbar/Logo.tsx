import NightMistressLogo from '@assets/logo.png';
import React from 'react';
import { LogoContainer, PageHeading  } from './Navbar.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <a href="/">
        <img
          src={NightMistressLogo}
          alt="nightmistress logo"
          width={49}
          height={49}
        />
        <PageHeading>Blog</PageHeading>
      </a>
    </LogoContainer>
  );
};

export default Logo;