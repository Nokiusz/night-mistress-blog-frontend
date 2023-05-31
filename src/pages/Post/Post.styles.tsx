import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  max-width: 864px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  margin-top: 16px;
  border-radius: 4px;
  animation: opacity 0.5s;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const AuthorAvatar = styled.img`
  border-radius: 50%;
  width: 24px;
  aspect-ratio: 1;
`;

export const CreatedSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-weight: 300;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  padding: 8px 0;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.red};
  width: fit-content;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 15px;
  font-weight: 400;
  max-height: 22px;
  cursor: pointer;
`;

export const ClearTag = styled(Tag)`
  background-color: ${({ theme }: ThemeProps) => theme.colors.white};
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.red};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;

export const TitleText = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  padding: 8px 0;
`;

export const NotFoundPost = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.red};
  margin-top: 16px;
`;
