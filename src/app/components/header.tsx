'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdClose, MdMenu } from 'react-icons/md'
import { navItems } from '@/library/blockage-data'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header
      className={`sticky top-0 lg:static container mx-auto px-5 md:px-6 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md`}
    >
      <div className={'container mx-auto'}>
        <nav
          className={`flex justify-between items-center border-b border-gray-300 py-3`}
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
                'uppercase bg-gray-700 text-white px-3 rounded-sm md:mr-5 text-sm md:text-base hidden lg:block'
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
            <div className={'text-sm hidden lg:block'}>
              <a
                className="mega-menu-link"
                target="_blank"
                href="https://ispmyanmar.com/subscribe/"
              >
                Subscribe
              </a>
            </div>
            <div className={'lg:hidden'}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <MdClose className="h-5 w-5" />
                ) : (
                  <MdMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {/*Mobile Navigation*/}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 text-base text-gray-800 border-b border-gray-300">
            <h2 className={'font-bold'}>Contents</h2>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default React.memo(Header)
