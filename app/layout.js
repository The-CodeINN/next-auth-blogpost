import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mastering Modern Authentication',
  description: 'This is app tutorial on Mastering Modern Authentication: Building Secure User Flows with NextAuth, Prisma, MongoDB, and React Hook Form in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
