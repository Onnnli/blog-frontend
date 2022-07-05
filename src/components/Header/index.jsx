import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

import Container from '../Layout/Container';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = false;

  console.log(isAuth);
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <Link to="/">
            <Typography.Title level={2}>Blog</Typography.Title>
          </Link>

          {isAuth ? (
            <div className={styles.buttons}>
              <Link to="/post/create">
                <Button>Create post</Button>
              </Link>
              <Button>Logout</Button>
            </div>
          ) : (
            <div className={styles.buttons}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/registration">
                <Button>Registration</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
