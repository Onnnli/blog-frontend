import React from 'react';
import Header from '../Header';
import Container from './Container';

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <Container>{children}</Container>
  </div>
);

export default Layout;
