import type { Metadata } from 'next';
import { Layout } from '@/components/Dashboard/Layout';

export const metadata: Metadata = {
  title: 'Dashboard Portal',
  description: 'Staff Management Portal for Mpost',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
