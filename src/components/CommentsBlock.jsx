import React from 'react';
import { Skeleton, Comment, Avatar } from 'antd';
import { SideBlock } from './SideBlock';

const CommentsBlock = ({ items, isLoading = true }) => (
  <SideBlock title="Comments">
    <Skeleton loading={isLoading} active>
      <div style={{ padding: '20px' }}>
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
  </SideBlock>
);

export default CommentsBlock;
