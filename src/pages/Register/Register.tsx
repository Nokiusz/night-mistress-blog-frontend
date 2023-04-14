import React, { useRef, useState } from 'react';
import { Navbar, Spinner } from '../../components';
import { Button, Heading, InputWithLabel, Warning, Wrapper } from '../Login/Login.styles';
import { Input, InputRef, notification } from 'antd';
import useAuth from '../../hooks/useAuth';
import { Container, NameInputs } from './Register.styles';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Register = () => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginError, signUp } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Signup Successful, redirecting to home page...'
    });
  };

  const onSignUp = async () => {
    const email = emailRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;
    const firstName = firstNameRef.current?.input?.value;
    const lastName = lastNameRef.current?.input?.value;
    if (!email || !password || !firstName || !lastName) {
      return setWarning('Please fill in all required fields');
    }
    setLoading(true);

    await signUp({ email, password, firstName, lastName, avatarLink: '' });
    openNotificationWithIcon('success');
    setTimeout(() => {
      navigate('/');
    }, 3000);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          {contextHolder}
          <Heading>Sign Up</Heading>
          {loading && <Spinner />}
          <NameInputs>
            <InputWithLabel>
              <label htmlFor="firstname">Firstname*</label>
              <Input
                id="firstname"
                name="firstname"
                ref={firstNameRef}
                placeholder="Firstname"
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="name">Lastname*</label>
              <Input
                id="lastname"
                name="lastname"
                ref={lastNameRef}
                placeholder="Lastname"
              />
            </InputWithLabel>
          </NameInputs>
          <InputWithLabel>
            <label htmlFor="name">Email*</label>
            <Input
              id="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="w-full"
              prefix={<MailOutlined />}
            />
          </InputWithLabel>
          <InputWithLabel>
            <label htmlFor="password">Password*</label>
            <Input.Password
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full"
              ref={passwordRef}
              visibilityToggle
              prefix={<LockOutlined />}
            />
          </InputWithLabel>
          <Warning>{loginError || warning}</Warning>
          {/* TODO: make a react component out of this styled */}
          <Button
            onClick={onSignUp}
            variant="primary"
          >
            {loading ? 'Loading..' : 'Sign Up'}
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;
