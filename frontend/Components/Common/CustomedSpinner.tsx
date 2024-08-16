import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import EmptyContent from './EmptyContent'

const CustomedSpinner = () => {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(!loading)
        }, 1000)
    },[])
  return (
    <div className='flex justify-center items-center h-full'>
        {
            loading?
                <Spinner lg />
            :
                <EmptyContent />
        }
    </div>
  )
}

export default CustomedSpinner
