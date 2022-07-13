import React from 'react';
import { Divider, List, Skeleton, Typography } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Tags = ({ items }) => {
  const { tags } = useSelector((state) => state.posts);

  return (
    <Skeleton loading={tags.isLoading} active>
      <div>
        <Typography.Title level={4}>Tags</Typography.Title>
        <Divider />
      </div>
      <List
        dataSource={items}
        renderItem={(item) => (
          <Link to={`/tags/${item}`}>
            <List.Item>
              <BorderlessTableOutlined /> {item}
            </List.Item>
          </Link>
        )}
      />
    </Skeleton>
  );
};

export default Tags;
