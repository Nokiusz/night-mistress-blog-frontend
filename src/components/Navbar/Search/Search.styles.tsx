import styled from 'styled-components';
import { ThemeProps } from '../../theme';

export const Container = styled.div`
  position: relative;

  .ant-select-selector {
    border-radius: 4px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  background-color: ${({ theme }: ThemeProps) => theme.colors.red};
  top: 0px;
  right: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 0 4px 4px 0;
`;