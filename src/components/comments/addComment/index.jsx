import React, { useCallback, useState } from 'react';
import { Avatar, Comment, Form, Input, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchAddComments } from '../../../redux/slices/comments';

const AddComment = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const onChangeHandler = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const onSubmitHandler = useCallback(async () => {
    await dispatch(fetchAddComments({ id, comment })).then(() => {
      setComment('');
    });
  }, [comment]);

  return (
    <Comment
      avatar={<Avatar src={user?.avatarUrl} alt="avatar" />}
      content={
        <>
          <Form.Item>
            <Input.TextArea
              value={comment}
              onChange={onChangeHandler}
              rows={4}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={false}
              type="primary"
              onClick={onSubmitHandler}
            >
              Add Comment
            </Button>
          </Form.Item>
        </>
      }
    />
  );
};

export default AddComment;
