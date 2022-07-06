import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchLogin, selectIsAuth } from '../../redux/slices/auth';

import styles from './Login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onFinish = async (values) => {
    const { payload } = await dispatch(fetchLogin(values));

    if (payload.token) {
      localStorage.setItem('token', payload.token);
    } else {
      console.log('Something went wrong!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.root}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
