'use client';
import React from 'react';
import cn from 'classnames';
import { Logo } from '@/components/Shared/Logo';
import { Profile } from './Profile';
import { SidebarMenu } from './SidebarMenu';
import { TopRightMenu } from './TopRightMenu';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header
        className={cn('fixed top-0 left-0 right-0 w-full z-50', 'px-[80px]')}
      >
        <div className={cn('relative flex items-center w-full')}>
          <Logo />
          <div className={cn('ml-[205px] grid grid-cols-[1fr_1fr] w-[95%]')}>
            <div className="relative bg-white">
              <h1 className="text-[#2B3674] text-[30px] font-bold">
                Main Dashboard
              </h1>
            </div>
            <TopRightMenu />
          </div>
        </div>
        <div
          className={cn(
            'relative bg-white-blue',
            'border border-[#E7EDFF]',
            '2xl:mt-[20px] xl:mt-[20px] lg:mt-[20px] mt-0',
            'w-[300px] h-[80vh]',
            'rounded-[10px]',
          )}
        >
          <Profile />
          <div className={cn('relative p-[20px]')}>
            <div className={cn('relative pl-[10px]')}>
              <span
                style={{ color: 'rgba(36, 34, 32, 0.4)' }}
                className="uppercase text-[12px]"
              >
                Main
              </span>
            </div>
            <SidebarMenu />
          </div>
        </div>
      </header>
      <main className="relative 2xl:my-[160px] my-[150px] ml-[380px] pl-[30px] pr-[80px] bg-transparent z-50">
        {children}
      </main>
    </>
  );
};
export default Layout;
