import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';

export const NameInputs = styled.div`
  display: flex;
  gap: 16px;

  .ant-input {
    width: 210px;
  }
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
  max-width: 580px;
  max-height: 380px;

  .w-full {
    width: 430px;
  }
`;
