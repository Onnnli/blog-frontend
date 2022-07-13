import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../redux/slices/authSlice/auth';
import Uploader from '../../components/uploader';
import { authActions } from '../../redux/slices/authSlice/authActions';

const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onFinish = async (values) => {
    const { payload } = await dispatch(authActions.fetchRegistration(values));

    if (payload?.token) {
      localStorage.setItem('token', payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="avatarUrl">
          <Uploader />
        </Form.Item>
        <Form.Item
          label="full name"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
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

export default Registration;
