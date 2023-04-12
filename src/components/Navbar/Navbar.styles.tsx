import styled from 'styled-components';
import { ThemeProps } from '../theme';
import { Link } from 'react-router-dom';
import { Z_INDEX } from '../../utils/zindex';

export const Header = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  width: 100%;
  z-index: ${Z_INDEX.NAVBAR};
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
  width: 100%;

  > div {
    flex: 1;
  }
`;

export const PageHeading = styled.h1`
  font-size: 21px;
  font-weight: 800;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }: ThemeProps) => theme.colors.white};

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }: ThemeProps) => theme.colors.white};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;

interface ButtonLinkProps {
  theme: ThemeProps;
  variant: 'primary' | 'secondary';
}

export const ButtonLink = styled(Link)<ButtonLinkProps>`
  padding: 8px 14px;
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.red : 'transparent')};
  border-radius: 2px;
  box-shadow: ${({ theme, variant }) =>
    variant === 'secondary' ? 'inset 0px 0px 0px 2px' + theme.colors.red : 'transparent'};
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s ease-out;

  :hover {
    background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.white : 'transparent')};
    color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.red : theme.colors.white)};
    box-shadow: ${({ theme, variant }) =>
      variant === 'secondary' ? 'inset 0px 0px 0px 2px' + theme.colors.white : 'transparent'};
  }
`;
