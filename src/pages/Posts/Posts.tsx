import React from 'react';

import { Spinner } from '../../components';
import usePosts from '../../hooks/usePosts';
import formatDate from '../../utils/formatDate';
import {
  AmmoutOfPosts,
  AuthorAvatar,
  Container,
  CreatedSection,
  PostContainer,
  Tag,
  Tags,
  TitleLink
} from './Posts.styles';
import calendarIcon from '@assets/calendarIcon.svg';

const Posts = () => {
  const { posts, loading } = usePosts();

  const list = posts.map((post) => (
    <PostContainer key={post.postId}>
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
  ));

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AmmoutOfPosts>Total amount of posts: {posts.length}</AmmoutOfPosts>
          {list}
        </>
      )}
    </Container>
  );
};

export default Posts;
