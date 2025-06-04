import '@ant-design/v5-patch-for-react-19';
import './globals.css';
import type { Metadata } from 'next';
import { ReduxStoreProvider } from '@/lib/ReduxStoreProvider';
import { LayoutManager } from './LayoutManager';
import { AntdProvider } from '@/lib/AntdProvider';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Coffee Chain Supply',
  description: 'Coffee Chain Supply Management',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <ReduxStoreProvider>
        <AntdProvider>
          <LayoutManager>{children}</LayoutManager>
        </AntdProvider>
      </ReduxStoreProvider>
    </html>
  );
}
