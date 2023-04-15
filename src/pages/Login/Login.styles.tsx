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
  display: grid;
  gap: 16px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  border-radius: 2px;
  padding: 50px 85px;
`;

export const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;

  label {
    display: flex;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: ${({ theme }: ThemeProps) => theme.colors.white};
  }

  .ant-input-affix-wrapper,
  .ant-input,
  .ant-input-password{
    display: flex;
    align-items: center;
    outline: none;
    min-width: 280px;
    width: 100%;
    background-color: transparent;
    padding: 2px 15px 4px 5px;
    gap: 8px;
    height: 29px;
    border: none;
    border-bottom: 1px solid #98a0b0;
    border-radius: 2px;
    color: ${({ theme }: ThemeProps) => theme.colors.grayer};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
  }

  .anticon.anticon-eye-invisible.ant-input-password-icon,
  .anticon.anticon-eye.ant-input-password-icon {
    color: ${({ theme }: ThemeProps) => theme.colors.grayer};
  }

  .ant-input::placeholder {
    color: ${({ theme }: ThemeProps) => theme.colors.grayer};
  }
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 22px;
  margin-bottom: 30px;
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
  margin: 0 auto;

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
  height: 22px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.red};
`;
