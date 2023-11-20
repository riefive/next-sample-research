'use client';
import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const ErrorComponent: React.FC = () => (
  <Result
    icon={<CloseCircleOutlined />}
    title='Something went wrong!'
    extra={<Button type='primary'>Back To Home</Button>}
  />
);

export default ErrorComponent;
