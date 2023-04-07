import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center gap-2 hover:bg-emerald-500 transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
