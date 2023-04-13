import React, { useRef, useState } from 'react';
import { Input, InputRef, notification } from 'antd';
import { Button, Container, Heading, InputWithLabel, Warning, Wrapper } from './Login.styles';
import useAuth from '../../hooks/useAuth';
import { Spinner } from '../../components';
import { useNavigate } from 'react-router-dom';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Login = () => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginError } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Login Successful, redirecting to home page...'
    });
  };

  const onLogin = async () => {
    const email = emailRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;
    if (!email || !password) {
      return setWarning('Please fill in all required fields');
    }
    setLoading(true);

    const response = await login({ email, password });

    if (loginError === '') {
      openNotificationWithIcon('success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }

    setLoading(false);
    // console.log({ email, password });
  };

  return (
    <Wrapper>
      <Container>
        {contextHolder}
        <Heading>Log in</Heading>
        {loading && <Spinner />}
        <InputWithLabel>
          <label htmlFor="name">Email*</label>
          <Input
            id="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
          />
        </InputWithLabel>
        <InputWithLabel>
          <label htmlFor="password">Password*</label>
          <Input.Password
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            visibilityToggle
          />
        </InputWithLabel>
        <Warning>{loginError}</Warning>
        {/* TODO: make a react component out of this styled */}
        <Button
          onClick={onLogin}
          variant="primary"
        >
          {loading ? 'Loading..' : 'Log in'}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Login;
