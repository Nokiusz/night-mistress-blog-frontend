
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/Post`);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  return { posts };
}

export default usePosts;
