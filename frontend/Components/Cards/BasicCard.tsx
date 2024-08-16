import React from 'react'
import { ImageSkeleton } from '../Common';

interface Props{
    title: string;
    value: string;
    textcolor: string
}

const BasicCard = ({title, value, textcolor}:Props) => {
  return (
    
    <div className="bg-white shadow-md rounded-md text-center">
        {
            title && value ?
            <>
                <span className='block'>
                    {title}
                </span>
                <span className={`${textcolor} text-4xl font-semibold flex h-[90%] justify-center items-center`}>
                    {value}
                </span>
            </>
            :
            <ImageSkeleton width='100%' height='100%' />
        }
    </div>
  )
}

export default BasicCard
