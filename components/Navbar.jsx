'use client';

import Image from 'next/image';
import MobileSidebar from './MobileSidebar';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
        <div
          className='p-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
          onClick={() => router.push('/profile')}
        >
          <Image
            alt='Logo'
            width='30'
            height='30'
            className='rounded-full'
            src='/placeholder.jpg'
          />
        </div>
      </div>
    </div>
  );
};
