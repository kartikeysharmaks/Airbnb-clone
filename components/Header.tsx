import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'
import {useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}: {placeholder:any}) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberofGuests, setNumberOfGuests] = useState<string | 1>(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate ,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges:any) => {
  setStartDate(ranges.selection.startDate)
  setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toDateString(),
        endDate : endDate.toDateString(),
        numberofGuests,
      }
    })
  }

  const home = () => {
    router.push("/")
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div onClick={home} className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center rounded-full border-2 py-2 md:shadow-sm text-sm text-gray-600">
        <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 outline-none "
          type="text"
          placeholder={placeholder|| "Start your Search"}
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
      {searchInput&& 
      <div className='flex flex-col col-span-3 mx-auto'>
      <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={['#F85B61']}
      onChange={handleSelect}
      
      />
      <div className='flex items-center border-b mb-4'>
        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
        <UsersIcon className='h-5'/>
        <input type="number" value={numberofGuests} placeholder='1' min={1} onChange={(e) => setNumberOfGuests(e.target.value)} className='w-12 pl-2 text-lg outline-none text-red-400' />
      </div>
      <div className='flex'>
        <button type='button' onClick={resetInput} className='flex-grow text-gray-500'>Cancel </button>
        <button type='button' onClick={search} className='flex-grow text-red-400'>Search</button>
      </div>
      </div> }
    </header>
  );
};

export default Header;


