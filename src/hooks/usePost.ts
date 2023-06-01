import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { Post, PostToUpdate } from '../types';
import { useNavigate } from 'react-router-dom';

function usePost(friendlyName: string) {
  const [post, setPost] = useState<Post>();
  const [status, setStatus] = useState<number>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/Post/${friendlyName}`);

        if (!response.ok) {
          setStatus(response.status);
          setLoading(false);
        }
        
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [friendlyName]);

  const updatePost = async (post: PostToUpdate & { postId: number; }) => {
    if (!post || !post.friendlyName || !post.title) return;
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    };
  
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/post/${post.postId}`, fetchOptions);
      if (response.ok) {
        navigate('/');
        window.location.reload();
      } else {
        throw new Error('Error updating post');
      }
    } catch (error) {
      setLoading(false);
      alert('Error updating post');
    }
  };

  return { post, loading, status, updatePost };
}

export default usePost;