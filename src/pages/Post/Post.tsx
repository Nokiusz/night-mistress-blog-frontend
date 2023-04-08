import calendarIcon from '@assets/calendarIcon.svg';
import DOMPurify from 'dompurify';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../components';
import usePost from '../../hooks/usePost';
import formatDate from '../../utils/formatDate';
import { AuthorAvatar, Container, CreatedSection, Markdown, NotFoundPost, Tag, Tags } from './Post.styles';

const Post = () => {
  const { slug } = useParams();

  if (!slug) {
    return <></>;
  }

  const { post, loading, status } = usePost(slug);

  if (!post || status === 404) {
    return <NotFoundPost>There was no post found with given friendly name </NotFoundPost>;
  }

  const sanitizedContent = DOMPurify.sanitize(decodeURIComponent(post?.content));

  return !loading ? (
    <Container>
      <Tags>
        {post.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <h1>{post.title}</h1>
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
      <Markdown dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </Container>
  ) : (
    <Spinner />
  );
};

export default Post;
