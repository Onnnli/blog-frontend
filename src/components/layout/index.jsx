import React from 'react';
import Header from '../header';

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.container}>{children}</div>
  </div>
);

export default Layout;
