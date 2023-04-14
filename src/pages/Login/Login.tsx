import React, { useEffect, useRef, useState } from 'react';
import { Input, InputRef } from 'antd';
import { Button, Container, Heading, InputWithLabel, Warning, Wrapper } from './Login.styles';
import useAuth from '../../hooks/useAuth';
import { Spinner } from '../../components';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginError, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const onLogin = async () => {
    const email = emailRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;
    if (!email || !password) {
      return setWarning('Please fill in all required fields');
    }
    setLoading(true);

    await login({ email, password });

    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Heading>Log in</Heading>
          {loading && <Spinner />}
          <InputWithLabel>
            <label htmlFor="name">Email*</label>
            <Input
              id="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              prefix={<UserOutlined />}
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
              prefix={<LockOutlined />}
            />
          </InputWithLabel>
          <Warning>{loginError || warning}</Warning>
          {/* TODO: make a react component out of this styled */}
          <Button
            onClick={onLogin}
            variant="primary"
          >
            {loading ? 'Loading..' : 'Log in'}
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
