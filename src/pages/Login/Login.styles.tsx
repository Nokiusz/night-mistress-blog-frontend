import styled from 'styled-components';

import { ThemeProps } from '../../components/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  border-radius: 2px;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 380px;

  input,
  .ant-input-affix-wrapper {
    width: 280px;
  }
`;

export const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    display: flex;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: ${({ theme }: ThemeProps) => theme.colors.white};
  }
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 22px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
`;

interface ButtonLinkProps {
  theme: ThemeProps;
  variant: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.red : 'transparent')};
  border-radius: 2px;
  box-shadow: ${({ theme, variant }) =>
    variant === 'secondary' ? 'inset 0px 0px 0px 2px' + theme.colors.red : 'transparent'};
  font-weight: 600;
  font-size: 15px;
  height: 30px;
  width: 100%;
  max-width: 280px;
  transition: 0.2s ease-out;
  color: ${({ theme }: ThemeProps) => theme.colors.white};

  :hover {
    background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.white : 'transparent')};
    color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.red : theme.colors.white)};
    box-shadow: ${({ theme, variant }) =>
      variant === 'secondary' ? 'inset 0px 0px 0px 2px' + theme.colors.white : 'transparent'};
  }
`;

export const Warning = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.red};
`;
