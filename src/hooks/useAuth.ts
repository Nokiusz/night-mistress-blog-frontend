import { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../constants';
import { Author, AuthorToUpdate } from '../types';

type SignUpProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatarLink: string;
};

type LoginProps = {
  email: string;
  password: string;
};

export const getUser = async (token: string): Promise<Author | null> => {
  const response = await fetch(`${BASE_URL}/Author/${token}`);
  const data = await response.json();
  return data;
};

const useAuth = () => {
  const [user, setUser] = useState<Author | null>(null);
  const loginError = useRef('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('nmblog_token');
    if (token) {
      const fetchUser = async () => {
        const data = await getUser(token);
        setUser(data);
      };
      fetchUser();
    }
  }, []);

  const signUp = async ({ email, password, firstName, lastName, avatarLink }: SignUpProps) => {
    try {
      const response = await fetch(`${BASE_URL}/Author`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, firstName, lastName, avatarLink })
      });

     const data = await response.json();

    } catch (error) {
      console.error(error);
    }
  };

  const login = async ({ email, password }: LoginProps) => {
    try {
      const dto = { email, password };
      const response = await fetch(`${BASE_URL}/Author/LogIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dto)
      });

      if (!response.ok) {
        loginError.current = response.statusText;
        throw new Error(response.statusText);
      }

      const data = await response.json();

      if (data.authorId) {
        localStorage.setItem('nmblog_token', data.authorId);
        loginError.current = '';
        const authorData = await fetch(`${BASE_URL}/Author/${data.authorId}`);
        const author = await authorData.json();
        setUser(author);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('nmblog_token');
    setUser(null);
  };

  const updateProfile = async (post: AuthorToUpdate & { authorId: number; avatarLink: string }) => {
    if (!user) return;

    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    };
  
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/Author/${user.id}`, fetchOptions);
      if (response.ok) {
        window.location.reload();
        
      } else {
        throw new Error('Error updating profile');
      }
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return { user, signUp, login, loginError: loginError.current, logout, updateProfile, loading, getUser };
};

export default useAuth;
