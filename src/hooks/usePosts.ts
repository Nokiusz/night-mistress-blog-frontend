
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { Posts } from '../types';
import { useLocation } from 'react-router-dom';

function usePosts(tag: string | null) {
  const [posts, setPosts] = useState<Posts>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/Post${tag ? `?Tag=${tag}` : ''}`);
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, [location.search, tag]);

  return { posts, loading };
}

export default usePosts;
