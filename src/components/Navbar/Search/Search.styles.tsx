import styled from 'styled-components';
import { ThemeProps } from '../../theme';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: ThemeProps) => theme.colors.white};

  input {
    width: 100%;
    padding: 0px 14px;
    margin: 0 -1px 0 0;
    font-size: 15px;
    height: 38px;
    font-weight: 600;
    border-radius: 2px 0 0 2px;
    color: ${({ theme }: ThemeProps) => theme.colors.grayer};
    background: ${({ theme }: ThemeProps) => theme.colors.white};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }: ThemeProps) => theme.colors.gray};
  }
`;

export const Icon = styled.div`
  background: ${({ theme }: ThemeProps) => theme.colors.red};
  padding: 0px 8px;
  margin: 0 0 0 -1px;
  height: 38px;
  border-radius: 0px 2px 2px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
