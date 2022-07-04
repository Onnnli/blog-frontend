import React from 'react';
import { Avatar, Comment, Form, Input, Button } from 'antd';

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <Input.TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const AddComment = () => {
  const onChangeHandler = () => {};
  const onSubmitHandler = () => {};

  return (
    <Comment
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={<Editor onChange={onChangeHandler} onSubmit={onSubmitHandler} />}
    />
  );
};

export default AddComment;
