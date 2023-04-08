import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 8;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  max-width: 870px;
  border-radius: 4px;
  padding: 16px;
  gap: 4px;
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

export const TitleLink = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  text-decoration: none;
  transition: 0.2s ease;

  :hover {
    text-decoration: underline;
  }
`;

export const AmmoutOfPosts = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.red};
`;
