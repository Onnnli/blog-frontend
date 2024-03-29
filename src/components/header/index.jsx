import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout, selectIsAuth } from '../../redux/slices/authSlice/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onLogoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <header>
      <div>
        <Link to="/">
          <Typography.Title level={2}>Blog</Typography.Title>
        </Link>
        {isAuth ? (
          <div>
            <Link to="/post/create">
              <Button>Create post</Button>
            </Link>
            <Button onClick={onLogoutHandler}>Logout</Button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/registration">
              <Button>Registration</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
