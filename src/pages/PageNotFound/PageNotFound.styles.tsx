import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';

export const Container = styled.div`
  background-color: ${({ theme }: ThemeProps) => theme.colors.lightgray};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StatusCode = styled.h1`
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  font-size: 198px;
  font-weight: 600;
  line-height: 0.7;
`;

export const Heading = styled.h2`
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  font-size: 28px;
  font-weight: 700;
  margin: 22px 0px 21px 0px;
  display: block;
`;

export const RedParagraph = styled.p`
  color: ${({ theme }: ThemeProps) => theme.colors.red};
  display: inline;
  font-weight: 700;
`;