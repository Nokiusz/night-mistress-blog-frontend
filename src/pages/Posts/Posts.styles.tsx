import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProps } from '../../components/theme';

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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.colors.darkblue};
  max-width: 870px;
  border-radius: 4px;
  padding: 16px;
  gap: 4px;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TitleLink = styled(Link)`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  text-decoration: none;
  transition: 0.2s ease;
  padding: 8px 0;

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

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  & img {
    border-radius: 4px;
    max-width: 300px;
    height: 170px;
  }
`;

export const LeftTopSection = styled.div``;

export const DeleteButton = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 20px;
  height: 20px;
  background: ${({ theme }: ThemeProps) => theme.colors.red};
  border-radius: 2px;

  :hover {
    cursor: pointer;
  }
`;

export const EditLink = styled(Link)`
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 20px;
  height: 20px;
  background: ${({ theme }: ThemeProps) => theme.colors.red};
  border-radius: 2px;

  :hover {
    cursor: pointer;
  }
`;
