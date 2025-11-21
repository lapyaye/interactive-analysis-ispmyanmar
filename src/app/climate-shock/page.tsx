import {
  lineChart,
  stackAreaChart,
  stackBarChart,
} from '@/library/climate-shock-data'
import Image from 'next/image'
import LineChartApp from '@/app/components/climate-shock/line-chart'
import StackAreaBarComboApp from '@/app/components/climate-shock/stackarea-bar-combo'
import StackBarChartApp from '@/app/components/climate-shock/stackbar-chart'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Myanmar Climate Shocks and Response Capacity',
  description: 'Climate Shocks and Response Capacity in Myanmar – A Survey',
}

export default function Home() {
  return (
    <div className={'font-sans mx-auto max-w-[1120]'}>
      <header className="mb-5 container mx-auto px-5 md:px-6">
        <div>
          <nav
            className={
              'flex justify-between items-center border-b border-gray-300 py-3'
            }
          >
            <div className="site-logo w-[110] h-[50]">
              <a
                href="https://ispmyanmar.com/"
                className="custom-logo-link"
                rel="home"
                target="_blank"
                aria-current="page"
              >
                <Image
                  width="468"
                  height="222"
                  src="https://ispmyanmar.com/wp-content/uploads/2023/11/isp-myanmar-logo-1.png"
                  className="custom-logo"
                  alt="ISP-Myanmar"
                  decoding="async"
                  sizes="(max-width: 468px) 100vw, 468px"
                />
              </a>
            </div>
            <div className={'flex flex-row justify-between'}>
              <div
                className={
                  'uppercase bg-gray-700 text-white px-3 rounded-sm md:mr-5 text-sm md:text-base hidden md:block'
                }
              >
                <a
                  target="_blank"
                  className="mega-menu-link whitespace-nowrap"
                  href="https://ispmyanmar.com/community"
                >
                  ISP Gabyin Community
                </a>
              </div>
              <div className={'text-sm hidden md:block'}>
                <a
                  className="mega-menu-link"
                  target="_blank"
                  href="https://ispmyanmar.com/subscribe/"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-5">
          <h1 className="text-xl md:text-3xl font-bold mb-2 text-gray-800 text-center leading-relaxed ">
            Climate Shocks and Response Capacity in Myanmar - A Survey
          </h1>
          <h3 className={'font-medium'}>Mar 2024 - Feb 2025</h3>
          <a
            className="text-xs md:text-sm text-center block mb-10 font-bold cursor-pointer text-white mt-4 p-2 bg-red-500 md:w-1/3 rounded-md hover:bg-red-600"
            href="#main"
          >
            ISP Socioeconomic Studies
          </a>
        </div>
        <main id="main" className={'flex flex-col items-center'}>
          <section className={'border-b border-gray-300 mb-8 lg:w-5/6'}>
            <div>
              <h2 className={'text-xl font-bold mb-4'}>Summary</h2>
              <p className="text-gray-800 mb-4">
                Myanmar is <b>highly-vulnerable</b> to the impacts of climate
                events and consistently ranked among the world’s top countries
                on the global climate risk indexes. Since the military coup in
                2021, many institutions established under the previous
                quasi-civilian governments—responsible for social safety nets
                and socioeconomic development—have collapsed or ceased
                functioning effectively. According to multiple international
                reports, including UNDP estimates, half of the population has
                been living below the national poverty line since late 2023.
                Against this backdrop of worsening security and a hollowed-out
                economy, extreme weather events have added new burdens.
                Unfortunately, since 2021, Myanmar has experienced climate
                shocks—such as floods, cyclones, extreme heat, and
                landslides—more frequently than in previous decades. Public
                resilience is <b>wearing thin</b>, and social safety nets are{' '}
                <b>fraying</b>.
              </p>
              <p className="text-gray-800 mb-4">
                To assess the depth of these impacts, ISP-Myanmar conducted a
                monthly monitoring survey across 110 townships, covering all
                district-level areas. The survey asked residents about the
                climate events they experienced, the adverse effects, and which
                institutions provided relief.{' '}
                <a
                  href="#methodology"
                  className={'hover:underline italic font-medium'}
                >
                  More details on the methodology are provided at the end of
                  this page.
                </a>
              </p>
              <p className="text-gray-800 mb-4">
                The findings reveal that{' '}
                <b>nearly half of the surveyed townships</b> faced multiple
                climate-related challenges, including droughts, floods, heavy
                rainfall from cyclones and typhoons, extreme heat, and
                landslides. These events caused substantial damage to
                agricultural outputs, severely affecting rural livelihoods in an
                economy largely dependent on agriculture. Despite the
                devastating impacts, communities remain largely helpless:
                neither military government institutions, the resistance, nor
                ethnic organizations can provide sufficient recovery support.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                Read the full contextual analysis below.
              </p>
            </div>
          </section>
          <section className={'lg:w-5/6'}>
            <LineChartApp payload={lineChart[0]} />
            <StackAreaBarComboApp
              area={stackAreaChart[0]}
              bar={stackBarChart[0]}
            />
            <StackBarChartApp payload={stackBarChart[1]} />
          </section>
          <section className="lg:w-5/6 mb-5">
            <div>
              <h2 className={'text-xl font-bold my-4'} id={'methodology'}>
                Survey Methodology
              </h2>
              <p className="text-gray-800 mb-4">
                This Climate Shocks and Response Capacity in Myanmar - A Survey
                was part of the larger socioeconomic study that ISP Research
                Network program conducts monthly socioeconomic surveys across
                110 townships (one-third of total townships) in Myanmar covering
                all states and regions. The study inquired about Myanmar’s
                socioeconomic conditions impacted by armed conflict, various
                economic and other policies as well as international events. The
                survey employs an observational method over a 12-month time
                series survey conducted from March 2024 to February 2025.
              </p>
              <p className="text-gray-800 mb-4">
                The townships categorized in this study were based on the
                original 75 districts and 330 townships defined by the 2008
                Constitution which were later changed by the State
                Administration Council (SAC) in 2022. Among the 110 townships
                studied, 75 were district townships where the General
                Administration Department offices are located. This allows for a
                more comprehensive assessment on the levels of public service
                provisions which is part of the socioeconomic studies. The
                remaining 35 were selected to those townships that have high
                population density and economic significance. The selected
                townships span all states and regions, including the Naypyitaw
                Union Territory.
              </p>
              <p className="text-gray-800 mb-4">
                The socioeconomic survey aimed to examine the trends in daily
                challenges and changes in socioeconomic conditions affecting the
                population, assess the adverse effects of drug abuse and
                gambling, and evaluate SAC’s governance effectiveness at the
                local level. To achieve these three goals, 92 questions were
                formulated. The questionnaire development and technical
                implementation were conducted in collaboration with the People’s
                Alliance on Credible Elections (PACE). Focus group discussions
                were also conducted regularly online during the data collection
                period. Data validation was conducted by analyzing and
                cross-checking between the monthly local field data and the
                contents recorded in focus group discussions. Data collection
                adhered strictly to the security protocol established by
                ISP-Myanmar, with respective team leaders ensuring the data
                collectors followed these guidelines meticulously.
              </p>
              <p className="text-gray-800 mb-4">
                The collected data was securely stored in compliance with
                ISP-Myanmar’s data storage and security policies and procedures.
              </p>
            </div>
          </section>
          <section className="lg:w-5/6">
            <h2 className={'text-xl font-bold border-b border-gray-300 mb-3'}>
              Related Materials
            </h2>
            <div className={'flex flex-col md:flex-row mb-5'}>
              <Image
                className={'w-full md:w-[400] md:mr-5'}
                src={'opinion-poll.jpg'}
                width={'400'}
                height={'200'}
                alt={'opinion poll'}
              />
              <div>
                <div className={'flex items-center mt-3 lg:mt-0'}>
                  <h3
                    className={
                      'uppercase text-xs text-pink-700 font-bold basis-10/12'
                    }
                  >
                    Socioeconomic Studies
                  </h3>
                  <div className={'w-full h-[6] bg-pink-700'}></div>
                </div>
                <div>
                  <a
                    href="https://ispmyanmar.com/facing-the-tailspin-the-country-shall-fall-upside-down/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={'font-bold my-3'}>
                      Facing the Tailspin, the Country Shall Fall Upside Down
                    </h4>
                    <p>
                      The survey, which spanned 110 townships and involved 1,000
                      participants, sought to gauge public sentiment on the
                      law`&apos;s chaotic effects and broader repercussions.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={'flex flex-col md:flex-row mb-5'}>
              <Image
                className={'w-full md:w-[400] md:mr-5'}
                src={'dual-burden.jpg'}
                width={'400'}
                height={'200'}
                alt={'opinion poll'}
              />
              <div>
                <div className={'flex items-center mt-3 lg:mt-0'}>
                  <h3
                    className={
                      'uppercase text-xs text-pink-700 font-bold basis-10/12'
                    }
                  >
                    Socioeconomic Studies
                  </h3>
                  <div className={'w-full h-[6] bg-pink-700'}></div>
                </div>
                <div>
                  <a
                    href="https://ispmyanmar.com/sar-dual-burdens-on-women/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={'font-bold my-3'}>Dual Burdens on Women</h4>
                    <p>
                      This survey, &quot;Dual Burdens on Women&quot;, reports
                      findings from March 2024 to August 2024, divided into five
                      sections: Everyday Socioeconomic Hardships, Inflation and
                      Commodity Crisis, Public Service Delivery, Drugs and
                      Gambling, and Climate Crisis.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={'flex flex-col md:flex-row'}>
              <Image
                className={'w-full md:w-[400] md:mr-5'}
                src={'30min.jpg'}
                width={'400'}
                height={'200'}
                alt={'opinion poll'}
              />
              <div>
                <div className={'flex items-center mt-3 lg:mt-0'}>
                  <h3
                    className={
                      'uppercase text-xs text-pink-700 font-bold basis-10/12'
                    }
                  >
                    Socioeconomic Studies
                  </h3>
                  <div className={'w-full h-[6] bg-pink-700'}></div>
                </div>
                <div>
                  <a
                    href="https://ispmyanmar.com/event/breathless-in-adversity-the-strangling-effects-of-conscription-law-on-socioeconomic-hardship/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={'font-bold my-3'}>
                      Breathless in Adversity: The Strangling Effects of
                      Conscription Law on Socioeconomic Hardship
                    </h4>
                    <p>
                      Event No. 3 of &quot;30 Minutes with the ISP&quot;
                      reported the findings from the ISP Research Network,
                      spotlighting the worsened socioeconomic challenges faced
                      by the people of Myanmar in their everyday lives following
                      the junta&apos;s conscription law.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
