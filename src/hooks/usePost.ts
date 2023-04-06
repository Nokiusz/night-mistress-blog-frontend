import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

function usePost(friendlyName: string) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`${BASE_URL}/Post/${friendlyName}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [friendlyName]);

  return { post };
}

export default usePost;