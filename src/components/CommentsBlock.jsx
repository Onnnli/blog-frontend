import React from 'react';
import { Skeleton, Comment, Avatar, Typography, Divider } from 'antd';

const CommentsBlock = ({ items, isLoading = true }) => (
  <Skeleton loading={isLoading} active>
    <div>
      <div>
        <Typography.Title level={4}>Comments</Typography.Title>
        <Divider />
      </div>
      {items.map(({ user, text }, index) => (
        <Comment
          key={index}
          author={<p>{user.fullName}</p>}
          avatar={<Avatar src={user.avatarUrl} alt={index} />}
          content={<p>{text}</p>}
        />
      ))}
    </div>
  </Skeleton>
);

export default CommentsBlock;
