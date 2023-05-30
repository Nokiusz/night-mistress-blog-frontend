import React, { useRef } from 'react';
import defaultAvatar from '@assets/defaultAvatar.svg';
import { Button, Container, Heading, InputWithImage, InputWithLabel, Wrapper } from './Profile.styles';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import { Input, InputRef } from 'antd';
import { Spinner } from '../../components';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user, updateProfile, loading } = useAuth();

  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const avatarLinkRef = useRef<InputRef>(null);

  const handleUpdateProfile = () => {
    if(!user) return;
      updateProfile({
      firstName: firstNameRef.current?.input?.value ?? '',
      lastName: lastNameRef.current?.input?.value ?? '',
      email: emailRef.current?.input?.value ?? '',
      password: null,
      avatarLink: avatarLinkRef.current?.input?.value ?? '',
      authorId: user.id ?? 0
    });
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
                onClick={handleUpdateProfile}
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