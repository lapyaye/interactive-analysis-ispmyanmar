import Link from 'next/link'
const baseClasses = `
    bg-red-500
    inline-block 
    hover:bg-red-600 
    text-white
    text-center
    text-xs 
    py-2 px-2 
    rounded-sm 
    transition-colors 
    shadow-md 
    cursor-pointer 
    min-w-30
    m-2
    focus:outline-none
  `
export default function DownloadButton({
  text,
  href,
}: {
  text: string
  href: string
}) {
  return (
    <Link className={baseClasses} target={'_blank'} href={href}>
      {text}
    </Link>
  )
}
