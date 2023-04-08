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
`;

export const Markdown = styled.div`
  overflow-x: scroll;
`;

export const AuthorAvatar = styled.img`
  border-radius: 50%;
  width: 24px;
  aspect-ratio: 1;
`;

export const CreatedSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.red};
  width: fit-content;
  border-radius: 4px;

  height: 19px;
  padding: 4px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
