'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

type Props = {
  width?: string;
};
export const Logo = ({ width }: Props) => {
  return (
    <div style={{ width: width ?? '200px' }}>
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
