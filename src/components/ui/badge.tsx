import * as React from 'react'

export function Badge({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs border border-white/10 ${className}`} {...props} />
}