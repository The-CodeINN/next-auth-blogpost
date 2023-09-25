"use client";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import toast from "react-hot-toast";
import MenuItem from "./MenuItem";

type UserMenuProps = {
  currentUser: any;
};

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className='relative z-30'>
        <div
          className='
        p-3
        border-[1px] 
        border-neutral-200 
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        transition
      '
          onClick={toggleOpen}
        >
          <Image
            alt='Logo'
            width={30}
            height={30}
            className='rounded-full'
            src='/placeholder.jpg'
          />
          <ChevronsUpDown className='text-neutral-700' />
        </div>

        {isOpen && (
          <div
            className='
      absolute
      rounded-md
      bg-white
      overflow-hidden
      w-40
      shadow-md
       top-13
       right-0
       flex
       flex-col

      '
          >
            {currentUser ? (
              <div>
                <Link href='/profile'>
                  <MenuItem onClick={toggleOpen}>Profile</MenuItem>
                </Link>
                <hr className='bg-neutral-400 w-full h-px' />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                    setTimeout(() => {
                      toast.success("Logged Out Successfully");
                    }, 1000);
                  }}
                >
                  LogOut
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href='/signup'>
                  <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                </Link>
                <Link href='/signin'>
                  <MenuItem onClick={toggleOpen}>Sign In</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
