import calendarIcon from '@assets/calendarIcon.svg';
import React from 'react';

import { Post } from '../../../types';
import formatDate from '../../../utils/formatDate';
import {
  AuthorAvatar,
  CreatedSection,
  LeftSection,
  PostContainer,
  RightSection,
  Tag,
  Tags,
  TitleLink
} from '../Posts.styles';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { postId, tags, title, created, author, friendlyName, thumbnail } = post;
  const { firstName, lastName, avatarLink } = author;

  const defaultThumbnail =
    'https://static.wikia.nocookie.net/versus-compendium/images/3/39/Link_ALTTP.png/revision/latest?cb=20180926100609';
  return (
    <PostContainer
      tabIndex={0}
      key={postId}
    >
      <LeftSection>
        <Tags>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
        <TitleLink to={`/post/${friendlyName}`}>{title}</TitleLink>
        <CreatedSection>
          <img
            src={calendarIcon}
            alt="calendar icon"
            width={16}
            height={16}
          />
          {formatDate(created)}
          <AuthorAvatar
            src={avatarLink}
            alt="avatar"
          />
          {firstName}&nbsp;
          {lastName}
        </CreatedSection>
      </LeftSection>
      <RightSection>
        <img src={thumbnail || defaultThumbnail} />
      </RightSection>
    </PostContainer>
  );
};

export default PostItem;
