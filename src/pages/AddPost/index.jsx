import React from 'react';
import { Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

import styles from './AddPost.module.scss';

export const AddPost = () => {
  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const onChange = React.useCallback((val) => {
    setValue(val);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const onUploadHandler = ({ file, fileList }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Upload onChange={onUploadHandler} listType="picture">
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {imageUrl && (
        <img
          className={styles.image}
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <Input classes={{ root: styles.title }} placeholder="Article title..." />
      <Input classes={{ root: styles.tags }} placeholder="Tags" />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button>Опубликовать</Button>
        <Button>Отмена</Button>
      </div>
    </div>
  );
};
