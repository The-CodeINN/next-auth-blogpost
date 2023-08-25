import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
        className={cn(
          `w-full 
                rounded-full
                bg-blue-600
                border-transparent
                px-3
                py-3
                disabled:cursor-not-allowed 
                disabled:opacity-50
                text-black
                transition`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
