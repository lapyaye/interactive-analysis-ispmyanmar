'use client'
import { useEffect, useRef, useState } from 'react'
import { navItems } from '@/library/blockage-data'
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
import SideBar from '@/app/components/blockage-survey/side-bar'

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
        <SideBar activeSection={activeSection} />
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
