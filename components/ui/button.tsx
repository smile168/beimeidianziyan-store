import { forwardRef } from 'react';
import { cn } from '@/lib/util';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={cn(
          `w-auto h-fit bg-white rounded-md border-solid border border-slate-300 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-30 text-black font-normal shadow-md hover:bg-gray-50 transition `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
