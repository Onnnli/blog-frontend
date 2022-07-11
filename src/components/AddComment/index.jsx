import React, { useCallback, useState } from 'react';
import { Avatar, Comment, Form, Input, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchAddComments } from '../../redux/slices/comments';

const Editor = ({ onSubmit, value, onChange }) => (
  <>
    <Form.Item>
      <Input.TextArea value={value} onChange={onChange} rows={4} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={false}
        type="primary"
        onClick={onSubmit}
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

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
        <Editor
          onChange={onChangeHandler}
          value={comment}
          onSubmit={onSubmitHandler}
        />
      }
    />
  );
};

export default AddComment;
