import React from 'react';
import { Button, Typography } from 'antd';

import Container from '../Layout/Container';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = true;

  console.log(isAuth);
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <Typography.Title level={2}>Blog</Typography.Title>
          {isAuth ? (
            <div className={styles.buttons}>
              <Button>Create post</Button>
              <Button>Logout</Button>
            </div>
          ) : (
            <div className={styles.buttons}>
              <Button>Login</Button>
              <Button>Registration</Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
