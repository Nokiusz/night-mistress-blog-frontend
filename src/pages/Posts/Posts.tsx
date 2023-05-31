import React from 'react';
import { Spinner } from '../../components';
import usePosts from '../../hooks/usePosts';
import PostItem from './components/PostItem';
import { ActiveTag, AmmoutOfPosts, Container, Tag } from './Posts.styles';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ClearTag } from '../Post/Post.styles';

const Posts = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tagParam = searchParams.get('Tag');

  const { posts, loading } = usePosts(tagParam ? decodeURIComponent(tagParam) : null);

  const list = posts.map((post) => (
    <PostItem
      key={post.postId}
      post={post}
    />
  ));

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <AmmoutOfPosts>Total amount of posts: {posts.length}</AmmoutOfPosts>
            {tagParam && (
              <ActiveTag>
                ActiveTag: &nbsp;
                <Tag>{tagParam}</Tag>
                <ClearTag onClick={() => navigate('/')}>clear</ClearTag>
              </ActiveTag>
            )}
            {list}
          </>
        )}
      </Container>
    </>
  );
};

export default Posts;
