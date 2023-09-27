import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Sidebar from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import ToasterProvider from '@/provider/ToastProvider';
import AuthProvider from '@/provider/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mastering Modern Authentication',
  description:
    'This is app tutorial on Mastering Modern Authentication: Building Secure User Flows with NextAuth, Prisma, MongoDB, and React Hook Form in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <ToasterProvider />
          <div className='h-full relative'>
            <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
              {/* Sidebar */}
              <Sidebar />
            </div>
            <main className='md:pl-72'>
              {/* Main content */}
              <Navbar />
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}