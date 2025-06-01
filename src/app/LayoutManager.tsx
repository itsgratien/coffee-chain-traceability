'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AuthLayout } from '@/components/Auth/AuthLayout';

type Props = { children: React.ReactNode };

export const LayoutManager = ({ children }: Props) => {
  const pathname = usePathname();

  if (pathname !== '/') {
    return <body className="bg-[#FCFDFF]">{children}</body>;
  }

  return (
    <body className="bg-white-blue">
      <AuthLayout>{children}</AuthLayout>
    </body>
  );
};
export default LayoutManager;
