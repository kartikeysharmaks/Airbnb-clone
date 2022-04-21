import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center rounded-full border-2 py-2 md:shadow-sm text-sm text-gray-600">
        <input
          className="flex-grow bg-transparent pl-5 outline-none "
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden h-8 rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex  cursor-pointer" />
      </div>
      <div className='flex items-center justify-end space-x-4'>
        <p className='hidden md:inline-flex'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer text-gray-600'/>
        <div className='flex items-center space-x-2 border-2 rounded-full p-2 '>
          <MenuIcon className='h-6 cursor-pointer text-gray-600'/>
          <UserCircleIcon className='h-6 cursor-pointer text-gray-600'/>
        </div>
      </div>
    </header>
  );
};

export default Header
