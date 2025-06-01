'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

type Props = { children: React.ReactNode };

export const AntdProvider = ({ children }: Props) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2f5fff',
            fontFamily: 'var(--font-poppins)',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
