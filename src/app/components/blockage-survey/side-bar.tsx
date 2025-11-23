import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import { navItems } from '@/library/blockage-data'
import Link from 'next/link'
import Image from 'next/image'
import DownloadButton from '@/app/components/blockage-survey/util/download-button'
import React from 'react'

function SideBar({ activeSection }: { activeSection: string }) {
  return (
    <aside className={'hidden lg:basis-1/5 lg:block mr-3'}>
      <div className={'sticky top-5'}>
        <div className={'bg-gray-100 p-3'}>
          <h2 className={'font-medium flex items-center'}>
            <RedSquareIcon /> Contents
          </h2>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`block text-sm py-2 ${activeSection == item.id ? 'text-pink-600' : 'hover:text-pink-600 text-gray-700'} font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={'my-3 flex flex-col items-center bg-gray-100'}>
          <Image
            className={'w-full h-[260]'}
            src={
              'https://ispmyanmar.com/wp-content/uploads/2025/11/BSurvey_ENG_Cover.jpg'
            }
            alt={'Blockage Survey'}
            width={200}
            height={300}
          />
          <DownloadButton
            text={'Download PDF'}
            href={
              'https://ispmyanmar.com/wp-content/uploads/2025/11/Raising-the-Lanterns-Wick-High.pdf'
            }
          />
        </div>
      </div>
    </aside>
  )
}
export default React.memo(SideBar)
