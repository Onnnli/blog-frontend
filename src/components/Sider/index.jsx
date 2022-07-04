import React from 'react';
import { Layout } from 'antd';

import styles from './Sider.module.scss';

const Sider = ({ children }) => (
  <Layout.Sider theme="light" width={400} className={styles.sideBlock}>
    {children}
  </Layout.Sider>
);

export default Sider;
