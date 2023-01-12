import { Fragment } from 'react'
import logo from '../../assets/logo.png'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const resources = [
  {
    name: 'Início',
    href: '#'
  },
  {
    name: 'Sobre Nós',
    href: '#'
  },
]

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">EcoDots</span>
              <img
                className="h-8 w-30 sm:h-10"
                src={logo}

                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 mr-20 md:flex">

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
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

            <a
              href="/"
              className="ml-8 inline-flex shadow-xl items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              Login
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="EcoDots"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/*  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Resíduos
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Nossos Serviços
                </a> */}
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
                >
                  Login
                </a>

              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
