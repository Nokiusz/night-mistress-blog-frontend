import styled from 'styled-components';
import { ThemeProps } from '../theme';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: static;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  width: 100%;
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
  div:nth-child(2) {
  text-align: center;
    }
  div:nth-child(3) {
    text-align: right;
    }
`;

export const PageHeading = styled.h1`
  font-size: 21px;
  font-weight: 800;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }: ThemeProps) => theme.colors.white};

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }: ThemeProps) => theme.colors.white};
  }
`;

export const ButtonLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;

export const ButtonLink = styled(Link)`
  padding: 8px 14px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.red};
  border-radius: 2px;
  font-weight: 600;
  font-size: 15px;
  transition: .2s ease-out;

  :hover{
    background-color: ${({ theme }: ThemeProps) => theme.colors.white};
    color: ${({ theme }: ThemeProps) => theme.colors.red};
  }
`;
