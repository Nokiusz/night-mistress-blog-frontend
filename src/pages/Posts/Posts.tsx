import React from 'react';
import { Spinner } from '../../components';
import usePosts from '../../hooks/usePosts';
import PostItem from './components/PostItem';
import { AmmoutOfPosts, Container } from './Posts.styles';

const Posts = () => {
  const { posts, loading } = usePosts();

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
            {list}
          </>
        )}
      </Container>
    </>
  );
};

export default Posts;
