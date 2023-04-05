import { useState } from 'react';
import { BASE_URL } from '../constants';
import { Author } from '../types';

type SignUpProps = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatarLink: string;
}

type LoginProps = {
    email: string;
    password: string;
}

const useAuth = () => {
  const [user, setUser] = useState<Author | null>(null);

  const signUp = async ({email, password, firstName, lastName, avatarLink}: SignUpProps) => {
    try {
      const response = await fetch(`${BASE_URL}/Author`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName, avatarLink }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const login = async ({email, password}: LoginProps) => {
    try {
      const response = await fetch(`${BASE_URL}/Author/LogIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if(data.authorId){
        localStorage.setItem('nmblog_token', data.authorId);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('nmblog_token');
    setUser(null);
  };

  return { user, signUp, login, logout };
};

export default useAuth;
