"use client";

import { LogIn, LogOut, X, Bird } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  onClickX?: () => void;
  onClickLink?: () => void;
};

const routes = [
  {
    label: "Sign In",
    path: "/signin",
    icon: LogIn,
    color: "text-emerald-500",
  },
  { label: "Sign Up", path: "/signup", icon: LogOut, color: "text-red-500" },
];

const Sidebar = ({ onClickX, onClickLink }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]'>
      <div className='px-3 py-2 flex-1'>
        <div className='flex items-center justify-between mb-14 md:mb-0'>
          <Link href='/' className='pl-3 flex items-center md:mb-14'>
            <div className='relative w-12 h-12 mr-4'>
              <Bird className='absolute top-0 left-0 w-full h-full' />
            </div>
            <h1 className='text-2xl font-bold'>Auth</h1>
          </Link>
          <X
            className='h-8 w-8 text-gray-500 hover:text-gray-200 md:hidden cursor-pointer'
            onClick={onClickX}
          />
        </div>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              onClick={onClickLink}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.path
                  ? "bg-white/10 text-white"
                  : "text-zinc-400"
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
