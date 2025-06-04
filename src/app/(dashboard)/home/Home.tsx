'use client';
import React from 'react';
import { Button } from 'antd';
import { RecordItem } from './RecordItem';
import { Logo } from '@/components/Shared/Logo';
import cn from 'classnames';

export const Home = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="container mx-auto pt-[100px]">
      <div className="flex items-center justify-center">
        <Logo width="150px" />
      </div>
      <div className="mt-[50px] flex items-center justify-center">
        <Button type="primary" size="large" onClick={() => setOpen(true)}>
          Add in Stock
        </Button>
      </div>
      {open && <RecordItem open={open} onClose={() => setOpen(false)} />}
      <div
        className={cn(
          'grid grid-cols-[450px_2px_450px] justify-center',
          'mt-[50px]',
        )}
      >
        <div></div>
        <div className="bg-[#ddd] w-[1px] h-[200px] mt-[50px]"></div>
        <div></div>
      </div>
    </div>
  );
};
export default Home;
