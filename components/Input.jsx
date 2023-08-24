import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(
  ({ id, label, type, disabled, required, register, errors }, ref) => {
    return (
      <div className='w-full relative '>
        <input
          autoComplete='off'
          id={id}
          disabled={disabled}
          ref={ref}
          {...register(id, { required })}
          placeholder=' '
          type={type}
          className={cn(
            `
      peer
      w-full
      p-1
      px-4
      pt-6
      outline-none
      bg-white
      font-light
      border-2
      rounded-md
      transition
      disabled:opacity-70
      disabled:cursor-not-allowed
        `,
            errors[id] ? 'border-rose-500' : 'border-neutral-300',
            errors[id] ? 'focus:border-rose-500' : 'focus:border-neutral-300'
          )}
        />
        <label
          className={cn(
            `absolute 
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        left-4
        z-10
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4`,
            errors[id] ? 'text-rose-500' : 'text-neutral-500'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
