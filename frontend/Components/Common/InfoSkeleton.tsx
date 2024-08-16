import React from 'react'

const InfoSkeleton = () => {
  return (
    <div>
      <div className='my-2 w-[220px] h-[35px] bg-slate-300 rounded-md animate-pulse'></div>
      <div className='my-2 w-[120px] h-[22px] bg-slate-300 rounded-md animate-pulse'></div>

      <div className='mt-5 w-[300px] h-[23px] bg-slate-300 rounded-md animate-pulse'></div>
      <div className='my-2 w-[300px] h-[23px] bg-slate-300 rounded-md animate-pulse'></div>
      <div className='my-2 w-[300px] h-[23px] bg-slate-300 rounded-md animate-pulse'></div>
      <div className='my-2 w-[100px] h-[23px] bg-slate-300 rounded-md animate-pulse'></div>

    </div>
  )
}

export default InfoSkeleton