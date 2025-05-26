import type { Metadata } from 'next';
import './globals.css';
import { ReduxStoreProvider } from '@/lib/ReduxStoreProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
      <body>
        <ReduxStoreProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
