'use client';
import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
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
  );
};
export default Logo;
