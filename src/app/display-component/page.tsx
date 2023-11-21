'use client';
import React from 'react';
import {
  Flex,
  Col,
  Row,
  Button,
  Pagination,
  Skeleton,
  Space,
  Spin,
} from 'antd';
import type { PaginationProps } from 'antd';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const DisplayComponentPage = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <Skeleton active></Skeleton>
      <Space>
        <h1>Shimmer 1</h1>
        <Skeleton.Button size='default' shape='circle' block={true} />
        <Skeleton.Avatar size='default' shape='circle' />
        <Skeleton.Input size='default' block={true} />
      </Space>
      <Space>
        <h1>Shimmer 2</h1>
        <Skeleton.Button size='default' shape='square' block={true} />
        <Skeleton.Avatar size='default' shape='square' />
        <Skeleton.Input size='default' block={true} />
      </Space>
      <Space>
        <h1>Shimmer 3</h1>
        <Skeleton.Button size='default' shape='round' block={true} />
        <Skeleton.Avatar size='default' shape='square' />
        <Skeleton.Input size='default' block={true} />
      </Space>
      <Space>
        <Spin />
        <h1>Spinner</h1>
      </Space>
      <Pagination simple defaultCurrent={2} total={50} />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <Flex wrap='wrap' gap='medium'>
        {Array.from({ length: 24 }, (_, i) => (
          <Button key={i} type='primary'>
            Button
          </Button>
        ))}
      </Flex>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default DisplayComponentPage;
