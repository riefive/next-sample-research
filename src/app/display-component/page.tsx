'use client';
import React from 'react';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const DisplayComponentPage = () => {
  return (
    <div className='p-4'>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </div>
  );
};

export default DisplayComponentPage;
