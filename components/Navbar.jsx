'use client';

import MobileSidebar from './MobileSidebar';
import { useRouter } from 'next/navigation';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';

export const Navbar = () => {
  const currentUser = getCurrentUser();

  const router = useRouter();
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
        <UserMenu currentUser={currentUser} />
      </div>
    </div>
  );
};
