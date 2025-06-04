'use client';
import React from 'react';
import cn from 'classnames';
import { LoginForm } from './Form';

export const Login = () => {
  return (
    <div className={cn('relative')}>
      <div
        className={cn(
          'container mx-auto xl:px-[0] lg:px-[50px] px-[10px]',
          'w-[500px]',
          'min-h-[70vh] justify-center items-center',
        )}
      >
        <div className={cn('relative bg-white p-[30px]', 'rounded-[10px]')}>
          <div className="relative">
            <h1 className="font-bold text-2xl">Login</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
