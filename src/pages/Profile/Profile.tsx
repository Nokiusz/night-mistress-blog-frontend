import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import defaultAvatar from '@assets/defaultAvatar.svg';
import { Button, Container, Heading, InputWithImage, InputWithLabel, Wrapper } from './Profile.styles';
import { useNavigate } from 'react-router-dom';
import { Author, AuthorToUpdate } from '../../types';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import { Input, InputRef } from 'antd';
import { BASE_URL } from '../../constants';
import { Spinner } from '../../components';

const Profile = () => {
  const { getUser } = useAuth();
  const [user, setUser] = useState<Author | null>(null);
  const [loading, setLoading] = useState(false);

  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const avatarLinkRef = useRef<InputRef>(null);

  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem('nmblog_token');
    if (token && !user) {
      const data = await getUser(token);
      if (data) {
        setUser(data);
      }
    }
  };
  fetchUser();

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
        navigate('/');
        window.location.reload();
        
      } else {
        throw new Error('Error updating profile');
      }
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div>   
        {user && (
          <Wrapper>
            <Container>
              <Heading>Edit Profile</Heading>
              <InputWithImage>
                <img src={user.avatarLink || defaultAvatar} alt="Avatar" /> 
                <InputWithLabel>
                  <label htmlFor="avatarLink">Profile Image</label>
                  <Input
                    id="avatarLink"
                    name="avatarLink"
                    defaultValue={user.avatarLink}
                    ref={avatarLinkRef}
                    placeholder="Avatar URL"
                    prefix={<LinkOutlined />}
                  />
                </InputWithLabel>
              </InputWithImage>
              <InputWithLabel>
                <label htmlFor="firstName">First Name*</label>
                <Input
                  id="firstName"
                  name="firstName"
                  defaultValue={user.firstName}
                  ref={firstNameRef}
                  placeholder="First Name"
                />
              </InputWithLabel>
              <InputWithLabel>
                <label htmlFor="lastName">Last Name*</label>
                <Input
                  id="lastName"
                  name="lastName"
                  defaultValue={user.lastName}
                  ref={lastNameRef}
                  placeholder="Last Name"
                />
              </InputWithLabel>
              <InputWithLabel>
                <label htmlFor="email">Email*</label>
                <Input
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  ref={emailRef}
                  placeholder="Email"
                  prefix={<MailOutlined />}
                />
              </InputWithLabel>
              <Button 
                onClick={() =>
                  updateProfile({
                    firstName: firstNameRef.current?.input?.value ?? '',
                    lastName: lastNameRef.current?.input?.value ?? '',
                    email: emailRef.current?.input?.value ?? '',
                    avatarLink: avatarLinkRef.current?.input?.value ?? '',
                    authorId: user.id ?? 0
                  })
                }
                variant="primary"
              >
                Update Profile
              </Button>
            </Container>
          </Wrapper>
        )}
      </div>
    </>
  );
};

export default Profile;