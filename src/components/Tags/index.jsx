import React from 'react';
import { Divider, List, Skeleton, Typography } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';

import styles from './Tags.module.scss';

const Tags = ({ items, isLoading = true }) => (
  <div className={styles.wrapper}>
    <Skeleton loading={isLoading} active>
      <div>
        <Typography.Title level={4}>Tags</Typography.Title>
        <Divider />
      </div>
      <List
        dataSource={items.length ? items : ['react', 'typescript', 'node']}
        renderItem={(item) => (
          <Typography.Link href={`/tags/${item}`}>
            <List.Item>
              <BorderlessTableOutlined /> {item}
            </List.Item>
          </Typography.Link>
        )}
      />
    </Skeleton>
  </div>
);

export default Tags;
