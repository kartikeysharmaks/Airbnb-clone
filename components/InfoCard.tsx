import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({
  img,
  location,
  title,
  description,
  price,
  star,
  total,
}: {
  img: any
  location: any
  title: any
  description: any
  price: any
  star: any
  total: any
}) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 md:h-52 md:w-80 transition duration-200 ease-out first:border-t">
        <Image src={img} layout="fill" objectFit="cover" className='rounded-2xl'/>
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <div className="flex items-center">
            <p>
              <StarIcon className="h-5 text-red-400" />
            </p>
            <p>{star}</p>
          </div>
          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'> {total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
