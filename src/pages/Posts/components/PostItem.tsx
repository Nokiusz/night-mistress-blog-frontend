import React from 'react';
import { Post } from '../../../types';
import { AuthorAvatar, CreatedSection, PostContainer, Tag, Tags, TitleLink } from '../Posts.styles';
import formatDate from '../../../utils/formatDate';
import calendarIcon from '@assets/calendarIcon.svg';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <PostContainer
      tabIndex={0}
      key={post.postId}
    >
      <Tags>
        {post.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <TitleLink to={`/post/${post.friendlyName}`}>{post.title}</TitleLink>
      <CreatedSection>
        <img
          src={calendarIcon}
          alt="calendar icon"
          width={16}
          height={16}
        />
        {formatDate(post.created)}
        <AuthorAvatar
          src={post.author.avatarLink}
          alt="avatar"
        />
        {post.author.firstName}&nbsp;
        {post.author.lastName}
      </CreatedSection>
    </PostContainer>
  );
};

export default PostItem;
