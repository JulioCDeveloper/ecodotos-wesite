import { Fragment } from 'react'
import logo from '../../assets/logo.png'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

/* const resources = [
  {
    name: 'Início',
    href: '#'
  },
  {
    name: 'Sobre Nós',
    href: '#'
  },
] */

export default function Navbar() {
  return (
    <Popover className="relative bg-black h-0 ">
      <div className="mx-auto max-w-7xl -4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start ml-20 lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Ecodots</span>
              <img
                className="h-8 w-30 sm:h-10"
                src={logo}

                alt="Ecodots"
              />
            </a>
          </div>
       
          {/* <Popover.Group as="nav" className="hidden space-x-10 pl-60 mr-20 md:flex">

            <a href="#" className="text-base font-medium text-green-500 hover:text-gray-900">
              Início
            </a>
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Sobre Nós
            </a>
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Resíduos
            </a>
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Nossa Plataforma
            </a>
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Reports
            </a>
          </Popover.Group> */}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="/"
              className=" inline-flex shadow-xl text-sm items-center justify-center whitespace-nowrap rounded-md border border-transparent border-1 border-gray-200 px-10 py-2 font-medium text-white hover:text-teal-400 shadow-sm hover:bg-white"
            >
              Login
            </a>
          </div>
        </div>
      </div>

   
    </Popover>
  )
}
