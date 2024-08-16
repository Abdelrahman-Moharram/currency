import React, { useEffect, useState } from 'react'
import { CourseCard, WideCard } from '../Cards'
import ViewModeButtons from './ViewModeButtons';
import { ImageSkeleton, Spinner } from '../Common';
import EmptyContent from '../Common/EmptyContent';


interface subcategory{
  id: string;
  name: string;
  category: categoryType
}
interface categoryType{
  id: string;
  name: string;
}


interface userType{
  id: string;
  first_name: string;
  last_name: string;
}
interface courseType{
    id: string,
    name: string,
    image: string,
    price: number,
    description: string,
    created_at: Date,
    instructor: userType;
    subcategory: subcategory;
}
interface props{
    courses: courseType[],
    prefix: string
}
const AllCoursesList = ({courses, prefix}:props) => {
  const [viewMode, setViewMode] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [waitingDelay, setWaitingDelay] = useState(true)
  const handleViewMode = (val:number) =>{
    setLoading(true)
    setViewMode(val)
    setTimeout(()=>{
      setLoading(false)
    },500)
  }
  
  const WideCardSkeleton = () =>{
    let cards = []
    for (let index = 0; index < 6; index++) {
      cards.push(<ImageSkeleton width='100%' height='250px' rounded='20px' />);
    }
    return cards
  }
  const handleImageSkeleton = ()=>{
    let total = [];
    for(let i=0; i < 10; i ++)
        total.push(<ImageSkeleton key={i} width='100%' height='504px' rounded='10px' />)
    return total
  }
  useEffect(()=>{
    setTimeout(()=>{
      setWaitingDelay(false)
    },3000)
  },[])
  return (
    <div>
      {
        (loading || !courses?.length) && waitingDelay ?
          <div className="flex justify-center">
            <Spinner md />
          </div>
        :null
      }
      {
        courses?.length?
          <div className='flex justify-end'>
            <ViewModeButtons viewMode={viewMode} handleViewMode={handleViewMode} />
          </div>
        :null
      }
      <div className={"mt-4 grid gap-4 " + (viewMode == 1 ? "sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4" : "")}>

        {
          waitingDelay || courses?.length?
            viewMode == 0?
              !loading && courses?.length?
                courses.map(course=>(
                    <WideCard prefix={prefix} course={course} key={course.id} />
                  ))
              :
                WideCardSkeleton()
            :
            !loading && courses?.length?
                courses.map(course=>(
                    <CourseCard prefix={prefix} course={course} key={course.id} />
                  ))
              :
              handleImageSkeleton()
          :
            <EmptyContent />
          
        }
      </div>
    </div>
  )
}

export default AllCoursesList
