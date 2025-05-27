'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Icon } from '@iconify/react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

type Props = {
  children: React.ReactNode;
};

const languageItems: MenuProps['items'] = [{ key: '1', label: 'English' }];

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <header className={cn('relative left-0 right-0', styles.authHeader, 'z-10')}>
        <div className="container mx-auto xl:px-[0] lg:px-[50px] flex justify-between">
          <div className="w-[100px]">
            <Image
              src={'/logo.svg'}
              width={100}
              height={100}
              alt="logo"
              unoptimized
              className="max-w-full w-full h-auto"
            />
          </div>
          <div
            className={cn(
              'relative flex items-center text-primary',
              'cursor-pointer',
            )}
          >
            <Dropdown menu={{ items: languageItems }} trigger={['click']}>
              <Space>
                <Icon icon={'pepicons-pop:internet'} fontSize={30} />
                English
                <Icon icon={'cuida:caret-down-outline'} fontSize={20} />
              </Space>
            </Dropdown>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};
export default AuthLayout;
