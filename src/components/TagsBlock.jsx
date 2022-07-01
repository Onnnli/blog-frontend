import React from 'react';
import { List, Skeleton, Typography } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';

const TagsBlock = ({ items, isLoading = true }) => (
  <Skeleton loading={isLoading} active>
    <List
      header={<Typography.Title level={4}>Tags</Typography.Title>}
      dataSource={items}
      renderItem={(item) => (
        <Typography.Link href={`/tags/${item}`}>
          <List.Item>
            <BorderlessTableOutlined /> {item}
          </List.Item>
        </Typography.Link>
      )}
    />
  </Skeleton>
);

export default TagsBlock;
