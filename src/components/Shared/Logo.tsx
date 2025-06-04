'use client';
import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="w-[200px]">
      <Image
        src={'/assets/logo.png'}
        width={200}
        height={200}
        alt="logo"
        unoptimized
        className="max-w-full w-full h-auto"
      />
    </div>
  );
};
export default Logo;
