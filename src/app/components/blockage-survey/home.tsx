'use client'
import { useEffect, useRef, useState } from 'react'
import { navItems } from '@/library/blockage-data'
import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import Link from 'next/link'
import ExecutiveSummary from '@/app/components/blockage-survey/executive-summary'
import SurveyRespondent from '@/app/components/blockage-survey/survey-respondent'
import Chapter1 from '@/app/components/blockage-survey/chapter-1'
import Chapter2 from '@/app/components/blockage-survey/chapter-2'
import Chapter3 from '@/app/components/blockage-survey/chapter-3'
import Chapter4 from '@/app/components/blockage-survey/chapter-4'
import Chapter5 from '@/app/components/blockage-survey/chapter-5'
import Appendix from '@/app/components/blockage-survey/appendix'
import Header from '@/app/components/header'
import Hero from '@/app/components/blockage-survey/hero'
import Image from 'next/image'
import DownloadButton from '@/app/components/blockage-survey/util/download-button'

export default function Home() {
  const [activeSection, setActiveSection] = useState('executive-summary')
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    }

    observer.current = new IntersectionObserver(
      observerCallback,
      observerOptions,
    )

    const sectionElements = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    sectionElements.forEach((el) => {
      observer.current!.observe(el)
    })

    const currentObserver = observer.current

    return () => {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [])

  return (
    <div className="font-sans max-w-[1120] mx-auto">
      <Header />
      <Hero />
      <main className="min-h-screen flex mt-8 container mx-auto px-5 md:px-15 lg:px-6">
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
                className={'w-full'}
                src={
                  'https://ispmyanmar.com/burmese/wp-content/uploads/2025/11/Blockage-Survey_GBC-717x1024.jpg'
                }
                alt={'Blockage Survey'}
                width={200}
                height={300}
              />
              <DownloadButton text={'Download PDF'} href={'/'} />
            </div>
          </div>
        </aside>
        <section className={'lg:basis-4/5 grow lg:px-4'}>
          <ExecutiveSummary />
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
          <Chapter5 />
          <SurveyRespondent />
          <Appendix />
        </section>
      </main>
    </div>
  )
}
