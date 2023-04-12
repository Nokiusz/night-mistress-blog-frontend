import calendarIcon from '@assets/calendarIcon.svg';
import defaultPostThumbnail from '@assets/defaultPostThumbnail.jpg';
import defaultAvatar from '@assets/defaultAvatar.svg';
import React from 'react';

import { Post } from '../../../types';
import formatDate from '../../../utils/formatDate';
import {
  AuthorAvatar,
  CreatedSection,
  LeftSection,
  LeftTopSection,
  PostContainer,
  RightSection,
  Tag,
  Tags,
  TitleLink
} from '../Posts.styles';
import { Link } from 'react-router-dom';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { postId, tags, title, created, author, friendlyName, thumbnail } = post;
  const { firstName, lastName, avatarLink } = author;

  return (
    <PostContainer
      tabIndex={0}
      key={postId}
    >
      <LeftSection>
        <LeftTopSection>
          <Tags>
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <TitleLink to={`/post/${friendlyName}`}>{title}</TitleLink>
        </LeftTopSection>
        <CreatedSection>
          <div>
            <img
              src={calendarIcon}
              alt="calendar icon"
              width={16}
              height={16}
            />
            {formatDate(created)}
          </div>
          <div>
            <AuthorAvatar
              src={avatarLink || defaultAvatar}
              alt="avatar"
            />
            {firstName}&nbsp;
            {lastName}
          </div>
        </CreatedSection>
      </LeftSection>
      <RightSection>
      <Link to={`/post/${friendlyName}`}>
        <img src={thumbnail || defaultPostThumbnail} />
      </Link>
      </RightSection>
    </PostContainer>
  );
};

export default PostItem;
