import React, { useMemo, useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import SimpleMDE from 'react-simplemde-editor';
import { useNavigate } from 'react-router-dom';

import Uploader from '../../components/Uploader';
import axios from '../../axios';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';

export const AddPost = () => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const onPublishHandler = async () => {
    const { data } = await axios.post('/posts', {
      title,
      tags: tags.split(','),
      text,
      imageUrl: imageUrl ? `http://localhost:3003${imageUrl}` : '',
    });

    navigate(`/posts/${data._id}`);
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Please enter text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Uploader value={imageUrl} onChange={setImageUrl} />
      <Input
        classes={{ root: styles.title }}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article title..."
      />
      <Input
        classes={{ root: styles.tags }}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags"
      />
      <SimpleMDE
        className={styles.editor}
        value={text}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button onClick={onPublishHandler}>Publish</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
};
