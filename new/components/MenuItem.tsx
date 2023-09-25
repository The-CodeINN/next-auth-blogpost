"use client";

type MenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const MenuItem = ({ children, onClick }: MenuItemProps) => {
  return (
    <div
      className='px-3 py-2 text-sm font-medium text-neutral-700 cursor-pointer hover:bg-neutral-100 transition'
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MenuItem;
