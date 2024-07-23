import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitieCard'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
   My Programming {' '}
   <span className='text-purple'>Languages
  
   </span>
      </h1>
      <div className='flex flex-col  items-center max-lg:mt-10'>
       
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
      

        </div>
        </div>
  )
}

export default Clients
