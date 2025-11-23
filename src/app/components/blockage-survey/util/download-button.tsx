import Link from 'next/link'
import React from 'react'
const baseClasses = `
    bg-red-500
    inline-block 
    hover:bg-red-600 
    text-white
    text-center
    text-xs 
    p-2 
    rounded-sm 
    transition-colors 
    cursor-pointer 
    min-w-30
    m-2
    focus:outline-none
  `
function DownloadButton({
  className = '',
  text,
  href,
}: {
  className?: string
  text: string
  href: string
}) {
  return (
    <Link
      className={baseClasses + ' ' + className}
      target={'_blank'}
      href={href}
    >
      {text}
    </Link>
  )
}
export default React.memo(DownloadButton)
