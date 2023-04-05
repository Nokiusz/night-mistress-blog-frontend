import { useEffect, useState } from 'react';
import { Author } from '../types';
import { BASE_URL } from '../constants';

const useUser = (): Author | null => {
  const [user, setUser] = useState<Author | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('nmblog_token');
      if (token) {
        try {
          const response = await fetch(`${BASE_URL}/Author/${token}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setUser( data );
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, []);

  return user;
};

export default useUser;
