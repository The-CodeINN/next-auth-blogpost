'use client';

import { Menu } from 'lucide-react';
import { useState, useRef } from 'react';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  const [dropNav, setDropNav] = useState(false);
  const sidebarRef = useRef();

  const handleClickOutsideSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setDropNav(false);
    }
  };

  return (
    <div className='md:hidden'>
      {!dropNav && (
        <Menu
          className='h-8 w-8 text-gray-500 hover:text-gray-900'
          onClick={() => setDropNav(true)}
        />
      )}

      {dropNav && (
        <div
          className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50'
          onClick={handleClickOutsideSidebar}
        >
          <div className='w-72 h-full p' ref={sidebarRef}>
            <Sidebar
              onClickX={() => setDropNav(false)}
              onClickLink={() => setDropNav(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
