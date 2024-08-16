import React from 'react'
import { FaStar, FaRegStarHalfStroke    } from "react-icons/fa6";

const Rating = ({rate}:{rate:number}) => {
  const handleRating = ()=>{
    const stars = []
    let i = 0;
    for(i; i < Math.trunc(rate); i++){
        stars.push(<FaStar />)
    }
    if(rate - i >= .5)
        stars.push(<FaRegStarHalfStroke  />)
    return stars
  }
  return (
    <div className='flex text-orange-400'>
      {handleRating()}
    </div>
  )
}

export default Rating
