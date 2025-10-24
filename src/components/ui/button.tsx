import * as React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className='', variant='default', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition border'
  const variants = variant === 'secondary' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white/10 hover:bg-white/20 border-white/10'
  const sizes = size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-5 py-2.5 text-base' : 'px-4 py-2'
  return <button className={`${base} ${variants} ${sizes} ${className}`} {...props} />
}