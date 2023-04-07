
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { Posts } from '../types';

function usePosts() {
  const [posts, setPosts] = useState<Posts>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/Post`);
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  return { posts, loading };
}

export default usePosts;
