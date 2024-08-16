import React, { useEffect, useState } from 'react'
import SmallCard from '../Cards/SmallCard'
import { ImageSkeleton } from '../Common';

interface itemType{
    id: string;
    name:string;
    image:string;
    description:string | undefined
  }
interface props{
    items: itemType[]
    preLink: string
    SkeletonNum: number;
    skeletonWidth?:string
    skeletonHeight?:string
}
const SmallCardsList = ({items, preLink, SkeletonNum, skeletonHeight, skeletonWidth}:props) => {
    const [waitingDelay, setWaitingDelay] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setWaitingDelay(false)
      },3000)
    },[])
    const handleImageSkeleton = ({SkeletonNum, height='124px', width='150px'}:{SkeletonNum:number, height?:string, width?:string})=>{
        let total = [];
        for(let i=0; i < SkeletonNum; i ++)
            total.push(<ImageSkeleton key={i} height={height} width={width} rounded='10px' />)

        return total
      }
     
  return (
    <div className={items?.length?"grid grid-cols-2 gap-4 sm:grid-cols-3":""}>
      {
        items?.length || waitingDelay? 
          items?.length?
          items.map((cat:itemType)=>(
                <SmallCard preLink={preLink} item={cat} key={cat.id} />
            ))
        
        :
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {handleImageSkeleton({SkeletonNum:SkeletonNum, width:skeletonWidth, height:skeletonHeight})}
        </div>
        :null
      }
    </div>
  )
}

export default SmallCardsList
