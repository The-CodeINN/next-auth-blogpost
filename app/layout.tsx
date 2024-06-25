import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth',
  description: 'Next Auth with Prisma, Next.js, and NextAuth.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body className={inter.className}>
          <main className=' mx-auto max-w-screen-lg h-screen flex flex-col'>
            <Navbar />
            <div className=' flex-grow'>{children}</div>
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
