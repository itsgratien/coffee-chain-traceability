'use client';
import React from 'react';
import { Input } from 'antd';
import { Icon } from '@iconify/react';

export const Search = () => {
  return (
    <div className="w-[241px] bg-white-blue rounded-[50px] h-[41px]">
      <Input
        size="large"
        prefix={<Icon icon={'cuida:search-outline'} color="#2B3674" />}
        className="!bg-transparent !rounded-[50px] !border-none !pl-[20px] !h-full"
        placeholder="Search"
      />
    </div>
  );
};
export default Search;
