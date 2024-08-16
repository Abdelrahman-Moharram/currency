import Image from 'next/image'
import React from 'react'

const Item = () => {
  return (
    <div className='p-2 space-y-7 py-5'>
      
      <div className='text-center font-semibold'> 
        <div className='text-4xl text-primary font-extrabold'>
          EGP
        </div>
        <p className='mt-3'>1 EGP</p>
      </div>
      <div className='flex justify-center'>
        <input 
            className='h-10 w-24 rounded-md text-center outline-none default-shadow bg-inherit'
            type='number'
        />
      </div>
    </div>
  )
}

export default Item
