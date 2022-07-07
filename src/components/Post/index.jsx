import React from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { Card, Skeleton } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserInfo } from '../UserInfo';
import { fetchRemovePost } from '../../redux/slices/posts';

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
  isFullPost,
  isLoading,
  isEditable,
  children,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickRemove = () => {
    dispatch(fetchRemovePost(_id));
  };

  const onClickEdit = () => {
    navigate(`/posts/${_id}/edit`);
  };

  return (
    <Skeleton loading={isLoading} avatar active>
      <Card
        style={{ marginBottom: '25px' }}
        hoverable
        bordered
        cover={
          imageUrl && (
            <img
              className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
              src={imageUrl}
              alt={title}
            />
          )
        }
        actions={
          isEditable && [
            <EditOutlined key="edit" onClick={onClickEdit} />,
            <DeleteOutlined key="delete" onClick={onClickRemove} />,
          ]
        }
      >
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {tags?.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
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
      </Card>
    </Skeleton>
  );
};

export default Post;
