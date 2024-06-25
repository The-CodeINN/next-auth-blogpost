'use client';

import { FaGithub } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Button } from './ui/button';
import { login, logout } from '@/actions/auth';

export const LoginGithub = () => {
  return (
    <Button
      onClick={() => login('github')}
      variant='outline'
      className='w-full'
    >
      <FaGithub className='mr-2 h-4 w-4' /> Login with Github
    </Button>
  );
};

export const LogoutButton = () => {
  return (
    <Button onClick={() => logout()} variant='outline' className='w-full'>
      Logout <RiLogoutCircleRLine className='ml-2 h-4 w-4' />
    </Button>
  );
};
