import React from 'react';
import { Post } from '../../../types';
import { AuthorAvatar, CreatedSection, PostContainer, Tag, Tags, TitleLink } from '../Posts.styles';
import formatDate from '../../../utils/formatDate';
import calendarIcon from '@assets/calendarIcon.svg';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { postId, tags, title, created, author, friendlyName } = post;
  const { firstName, lastName, avatarLink } = author;
  return (
    <PostContainer
      tabIndex={0}
      key={postId}
    >
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
    </PostContainer>
  );
};

export default PostItem;
