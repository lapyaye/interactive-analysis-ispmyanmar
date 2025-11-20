import SocialIcons from '@/app/components/blockage-survey/util/social-icons'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={'bg-gray-100 mt-10'}>
      <div className={'container max-w-[1120] mx-auto p-5 md:px-6'}>
        <div className="flex container mx-auto flex-col md:flex-row mb-5 justify-between">
          <div>
            <div className="menu-footer-menu-container font-medium">
              <ul id="menu-footer-menu">
                <li id="menu-item-6204" className="mb-3">
                  <a href="https://ispmyanmar.com/about/">ISP Programs</a>
                </li>
                <li id="menu-item-12710" className="mb-3">
                  <a href="https://ispmyanmar.com/isp-column/">ISP Column</a>
                </li>
                <li id="menu-item-6200" className="mb-3">
                  <a href="https://ispmyanmar.com/media/">Media</a>
                </li>
                <li id="menu-item-6201" className="mb-3">
                  <a target="_blank" href="https://ispmyanmar.com/community">
                    Gabyin Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mb-3">
              <a href="/contact-us" className="--plain-link">
                Contact us
              </a>
            </h2>
            <div className="flex items-center mb-3">
              <div className={'mr-2'}>
                <BiSolidPhoneCall />
              </div>
              <div className="text-xs">+66 80 747 9712</div>
            </div>
            <div className="flex items-center mb-3">
              <div className={'mr-2'}>
                <MdOutlineMailOutline />
              </div>
              <div className="text-xs text-pink-700 hover:text-gray-700">
                <a href="mailto: info@ispmyanmar.com">info@ispmyanmar.com</a>
              </div>
            </div>
            <div className={'flex items-center'}>
              <div className={'mr-2'}>
                <GrLocation />
              </div>
              <div className="text-xs">
                <span className="whitespace-nowrap">PO Box 149,</span>{' '}
                <span className="whitespace-nowrap">
                  Chiang Mai University PO,
                </span>
                <br />
                Chiang Mai 50202
              </div>
            </div>
          </div>
          <div>
            <h2 className="my-3 md:mt-0">Follow us</h2>
            <div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center text-xs text-gray-600 border-t border-gray-300 pt-5">
          <div>Copyright ISP-Myanmar © {year}. All Rights Reserved</div>
          <div className={'mt-3 md:mt-0'}>
            <div className="flex">
              <div>
                <a href="https://ispmyanmar.com/privacy-policy/">
                  Privacy Policy
                </a>
              </div>
              <div className="mx-2">|</div>
              <div>
                <a href="https://ispmyanmar.com/terms-of-use">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
