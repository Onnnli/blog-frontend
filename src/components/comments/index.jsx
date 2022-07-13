import React, { useMemo } from 'react';
import { Skeleton, Comment, Avatar, Typography, Divider } from 'antd';
import { useSelector } from 'react-redux';

const Comments = ({ isLoading = true, children }) => {
  const { comments } = useSelector((state) => state.comments);

  const memoComm = useMemo(() => comments, [comments]);

  return (
    <Skeleton loading={isLoading} active>
      <div>
        <div>
          <Typography.Title level={4}>Comments</Typography.Title>
          <Divider />
        </div>
        {memoComm.map(({ user, text }, index) => (
          <Comment
            key={index}
            author={<p>{user?.fullName}</p>}
            avatar={<Avatar src={user?.avatarUrl} alt={index} />}
            content={<p>{text}</p>}
          />
        ))}
        {children}
      </div>
    </Skeleton>
  );
};

export default Comments;
