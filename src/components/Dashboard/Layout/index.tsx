'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Logo } from '@/components/Shared/Logo';
import { Profile } from './Profile';
import { SidebarMenu } from './SidebarMenu';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0', 'px-[80px]')}>
        <div className={cn('relative')}>
          <Logo />
        </div>
        <div
          className={cn(
            'relative bg-white-blue',
            'border border-[#E7EDFF]',
            '2xl:mt-[50px] xl:mt-[30px] lg:mt-[30px] mt-0',
            'w-[300px] h-[80vh]',
            'rounded-[10px]',
            styles.sidebar,
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
      <main className="relative py-[150px] ml-[380px] pl-[20px]">
        {children}
      </main>
    </>
  );
};
export default Layout;
