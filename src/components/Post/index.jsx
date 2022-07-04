import React from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { Card, Skeleton } from 'antd';
import { UserInfo } from '../UserInfo';

import styles from './Post.module.scss';

const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const onClickRemove = () => {};

  const onClickEdit = () => {};

  return (
    <Card
      style={{ marginBottom: '25px' }}
      hoverable
      bordered
      cover={
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      }
      actions={
        isEditable && [
          <EditOutlined key="edit" onClick={onClickEdit} />,
          <DeleteOutlined key="delete" onClick={onClickRemove} />,
        ]
      }
    >
      <Skeleton loading={isLoading} avatar active>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>{children}</div>
        <ul className={styles.postDetails}>
          <li>
            <EyeOutlined />
            <span>{viewsCount}</span>
          </li>
          <li>
            <CommentOutlined />
            <span>{commentsCount}</span>
          </li>
        </ul>
      </Skeleton>
    </Card>
  );
};

export default Post;
