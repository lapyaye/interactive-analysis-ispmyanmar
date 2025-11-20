import Image from 'next/image'
import React from 'react'
import ContentCard from '@/app/components/content-card'
import { posts } from '@/library/post-content'

export default function Home() {
  return (
    <div className="font-sans max-w-[1120] mx-auto">
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
            <div className={'flex flex-row justify-end items-center grow'}>
              <ul className="hidden lg:flex flex-row uppercase font-medium basis-3/5">
                <li className="mr-auto hover:text-pink-700">
                  <a
                    href="https://ispmyanmar.com/topics/"
                    aria-expanded="false"
                  >
                    Topics
                  </a>
                </li>
                <li className="mr-auto hover:text-pink-700">
                  <a
                    href="https://ispmyanmar.com/isp-products/"
                    aria-expanded="false"
                  >
                    ISP Products &amp; Resources
                  </a>
                </li>
                <li className="mr-auto hover:text-pink-700">
                  <a
                    href="https://ispmyanmar.com/all-events/"
                    aria-expanded="false"
                  >
                    Events
                  </a>
                </li>
                <li className="mr-auto hover:text-pink-700">
                  <a href="https://ispmyanmar.com/media/" aria-expanded="false">
                    Media
                  </a>
                </li>
              </ul>
              <div className={'flex flex-row justify-between items-center'}>
                <div
                  className={
                    'uppercase cursor-pointer bg-gray-700 text-white px-3 rounded-sm md:mr-2 text-sm md:text-base hidden md:block'
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
                    className="hover:text-pink-700"
                    target="_blank"
                    href="https://ispmyanmar.com/subscribe/"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="container mx-auto px-5 md:px-6 mb-15">
        <main>
          <section>
            <h1 className={'uppercase text-4xl font-bold my-12 text-gray-800'}>
              <span className={'text-pink-600'}>ISP</span> Interactive Analysis
            </h1>
            <div className={'grid gap-10 grid-cols-1 lg:grid-cols-2'}>
              <ContentCard content={posts} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
