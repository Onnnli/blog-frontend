import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import React, { useState } from 'react';
import axios from '../../axios';

const Uploader = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = async (info) => {
    try {
      const formData = new FormData();
      formData.append('image', info.file);

      const { data } = await axios.post('/upload', formData);
      setLoading(false);
      onChange(data.url);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={() => false}
      onChange={handleChange}
    >
      {value ? (
        <img
          src={`http://localhost:3003${value}`}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default Uploader;
