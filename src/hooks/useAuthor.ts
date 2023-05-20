import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { Author } from '../types';

function useAuthor(authorId: string): Author | null {
  const [author, setAuthor] = useState<Author| null>(null);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const response = await fetch(`${BASE_URL}/Author/${authorId}`);
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAuthor();
  }, [authorId]);

  return author;
}

export default useAuthor;