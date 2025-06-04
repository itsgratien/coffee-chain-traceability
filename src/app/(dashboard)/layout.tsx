import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Portal',
  description: 'Staff Management Portal for Mpost',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
