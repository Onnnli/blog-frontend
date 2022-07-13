import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import SimpleMDE from 'react-simplemde-editor';
import { useNavigate, useParams } from 'react-router-dom';

import Uploader from '../../components/Uploader';
import axios from '../../axios';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';

export const AddPost = ({ isEditing = false }) => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEditing) {
      axios.get(`/posts/${id}`).then(({ data }) => {
        setTags(data.tags);
        setText(data.text);
        setTitle(data.title);
        setImageUrl(data.imageUrl);
      });
    }
  }, [isEditing]);

  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const onPublishHandler = async () => {
    const { data } = await axios.post('/posts', {
      title,
      tags: tags.split(','),
      text,
      imageUrl: imageUrl || '',
    });

    navigate(`/posts/${data._id}`);
  };

  const onSaveHandler = async () => {
    await axios.patch(`/posts/${id}`, {
      title,
      tags: tags.split(','),
      text,
      imageUrl: imageUrl || '',
    });

    navigate(`/posts/${id}`);
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article title..."
      />
      <Input
        classes={{ root: styles.tags }}
        value={tags}
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
        {isEditing ? (
          <Button onClick={onSaveHandler}>Save</Button>
        ) : (
          <Button onClick={onPublishHandler}>Publish</Button>
        )}
        <Button>Cancel</Button>
      </div>
    </div>
  );
};
