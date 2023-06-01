import { Fragment } from 'react'
import logo from '../../assets/logo-text.svg'
import { Popover } from '@headlessui/react'

export default function Navbar() {
  return (
    <Popover className="relative bg-black h-0 ">
      <div className="mx-auto max-w-7xl -4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start ml-20 lg:w-0 lg:flex-1">
            <a href="#">
              {/* <h1 className='text-white text-[24px] font-bold body-font'>Ecodots &copy;</h1> */}
              <img
                className="w-[160px] sm:h-10"
                src={logo}

                alt="Ecodots"
              />
            </a>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className='space-x-4'>
              <a target='_blank'
                href="http://ecodots.com.br/auth/login"
                className=" inline-flex shadow-xl text-sm items-center justify-center whitespace-nowrap rounded-md border border-transparent border-1 border-gray-200 px-10 py-2 font-medium text-white hover:text-grey-400 shadow-sm hover:bg-[#0E9384] hover:border-none"
              >
                Login
              </a>
             
            </div>

          </div>
        </div>
      </div>


    </Popover>
  )
}
