'use client';
import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { LoginForm } from './Form';

export const Login = () => {
  return (
    <div className={cn('relative')}>
      <div
        className={cn(
          'container mx-auto xl:px-[0] lg:px-[50px] px-[10px]',
          'grid grid-cols-[1fr_500px] gap-[100px]',
          'min-h-[70vh] justify-center items-center',
        )}
      >
        <div className="relative">
          <div className="relative">
            <h1 className="font-bold text-[50px] poppins-bold">Sign in</h1>
          </div>
          <div className="my-[20px]">
            <h5 className="text-[35px] poppins-regular">Mpost Back Office</h5>
          </div>
          <div className="flex">
            <div>
              <span className="text-[16px]">
                If you {`don't`} have an account, contact support
              </span>
            </div>
            <div className="absolute top-0 left-[300px]">
              <div className="relative">
                <Image
                  unoptimized
                  width={400}
                  height={400}
                  alt="saly"
                  src={'/assets/saly.svg'}
                  className="h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cn('relative bg-white p-[30px]', 'rounded-[10px]')}>
          <div className="relative">
            <h1 className="font-bold text-2xl">Login</h1>
          </div>
          <div className="mt-[10px]">
            <span className="text-[#637083] text-[14px]">
              Welcome to the Mpost back office portal. Kindly enter your
              credentials below to Sign In
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
