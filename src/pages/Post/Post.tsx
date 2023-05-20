import calendarIcon from '@assets/calendarIcon.svg';
import defaultAvatar from '@assets/defaultAvatar.svg';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Spinner } from '../../components';
import usePost from '../../hooks/usePost';
import formatDate from '../../utils/formatDate';
import {
  AuthorAvatar,
  Container,
  CreatedSection,
  Description,
  NotFoundPost,
  Tag,
  Tags,
  TitleText
} from './Post.styles';
import ReactMarkdown from 'react-markdown';

const Post = () => {
  const { slug } = useParams();

  if (!slug) {
    return <></>;
  }

  const { post, loading, status } = usePost(slug);

  if (status === 404) {
    return <NotFoundPost>There was no post found with given friendly name </NotFoundPost>;
  }

  if (!post) {
    return <Spinner />;
  }

  return !loading ? (
    <>
      <Navbar />
      <Container>
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={Date.now()}>{tag}</Tag>
          ))}
        </Tags>
        <TitleText>{post.title}</TitleText>
        <CreatedSection>
          <div>
            <img
              src={calendarIcon}
              alt="calendar icon"
              width={16}
              height={16}
            />
            {formatDate(post.created)}
          </div>
          <div>
            <AuthorAvatar
              src={post.author.avatarLink || defaultAvatar}
              alt="avatar"
            />
            {post.author.firstName}&nbsp;
            {post.author.lastName}
          </div>
        </CreatedSection>
        <Description>{post.description}</Description>
        <ReactMarkdown>{atob(post?.content)}</ReactMarkdown>
      </Container>
    </>
  ) : (
    <>
      <Spinner />
    </>
  );
};

export default Post;
