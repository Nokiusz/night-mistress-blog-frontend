import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';
import { Z_INDEX } from '../../utils/zindex';

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.SPINNER};

  & svg {
    margin-right: 0.5rem;
    animation: spin 1s linear infinite;
    color: ${({ theme }: ThemeProps) => theme.colors.red};
    width: 2rem;
    height: 2rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;