'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Logo } from '@/components/Shared/Logo';

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <header
        className={cn('relative left-0 right-0', styles.authHeader, 'z-10')}
      >
        <div className="container mx-auto flex justify-center items-center p-[50px]">
          <Logo />
        </div>
      </header>
      {children}
    </>
  );
};
export default AuthLayout;
