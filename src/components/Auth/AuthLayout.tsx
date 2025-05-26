'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <header className={cn('fixed inset-0', styles.authHeader)}>
        <div>
          <Image
            src={'/logo.svg'}
            width={100}
            height={100}
            alt="logo"
            unoptimized
          />
        </div>
      </header>
      {children}
    </>
  );
};
export default AuthLayout;
