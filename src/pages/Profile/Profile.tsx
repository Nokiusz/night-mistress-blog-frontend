import React, { useRef, useState } from 'react';
import defaultAvatar from '@assets/defaultAvatar.svg';
import { Button, Container, Heading, InputWithImage, InputWithLabel, Warning, Wrapper } from './Profile.styles';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import { Input, InputRef } from 'antd';
import { Spinner } from '../../components';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user, updateProfile, loading } = useAuth();
  const [warning, setWarning] = useState('');

  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const avatarLinkRef = useRef<InputRef>(null);

  const handleUpdateProfile = () => {
    if(!user) return;
    
    const firstName = firstNameRef.current?.input?.value;
    const lastName = lastNameRef.current?.input?.value ?? '';
    const email = emailRef.current?.input?.value ?? '';
    const password = null;
    const avatarLink = avatarLinkRef.current?.input?.value ?? '';
    const authorId = user.id ?? 0;

    if (!firstName || !lastName || !email) {
      return setWarning('Please fill in all required fields');
    }

    updateProfile({ firstName, lastName, email, password, avatarLink, authorId });
  };

  return (
    <>
      {loading && <Spinner />}
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
            <Warning>{warning}</Warning>
            <Button 
              onClick={handleUpdateProfile}
              variant="primary"
            >
              Update Profile
            </Button>
          </Container>
        </Wrapper>
      )}
    </>
  );
};

export default Profile;