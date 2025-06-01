'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Logo } from '@/components/Shared/Logo';
import { LanguageSelector } from '@/components/Shared/LanguageSelector';

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <header
        className={cn('relative left-0 right-0', styles.authHeader, 'z-10')}
      >
        <div className="container mx-auto xl:px-[0] lg:px-[50px] flex justify-between">
          <Logo />
          <div
            className={cn(
              'relative flex items-center text-primary',
              'cursor-pointer',
            )}
          >
            <LanguageSelector />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};
export default AuthLayout;
