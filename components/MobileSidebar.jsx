'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  const [dropNav, setDropNav] = useState(false);
  return (
    <div className='md:hidden'>
      {!dropNav && (
        <Menu
          className='h-8 w-8 text-gray-500 hover:text-gray-900'
          onClick={() => setDropNav(true)}
        />
      )}

      {dropNav && (
        <div className='fixed top-0 left-0 w-72 h-full z-50'>
          <Sidebar
            onClickX={() => setDropNav(false)}
            onClickLink={() => setDropNav(false)}
          />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
