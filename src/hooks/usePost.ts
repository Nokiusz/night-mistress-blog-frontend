import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { Post } from '../types';

function usePost(friendlyName: string) {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/Post/${friendlyName}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [friendlyName]);

  return { post, loading };
}

export default usePost;