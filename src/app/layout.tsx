import type { Metadata } from 'next';
import './globals.css';
import { ReduxStoreProvider } from '@/lib/ReduxStoreProvider';

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
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
