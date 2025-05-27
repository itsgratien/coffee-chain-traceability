import '@ant-design/v5-patch-for-react-19';
import './globals.css';
import type { Metadata } from 'next';
import { ReduxStoreProvider } from '@/lib/ReduxStoreProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { LayoutManager } from './LayoutManager';

export const metadata: Metadata = {
  title: 'Mpost Back Office Portal',
  description: 'Staff Management Portal for Mpost',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <AntdRegistry>
          <LayoutManager>{children}</LayoutManager>
        </AntdRegistry>
      </ReduxStoreProvider>
    </html>
  );
}
