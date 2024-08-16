import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


interface courseType{
    id: string,
    name: string,
    image: string,
    description: string,
}
interface props{
    course: courseType;
    handleCourseDropdown: ()=>void
}
const CourseDropdownItem = ({course, handleCourseDropdown}:props) => {
  return (
    <Link 
        onClick={handleCourseDropdown}
        href={`/courses/${course.id}/learn`}
        className='flex justify-evenly gap-5 cursor-pointer py-5 px-5 bg-white shadow-lg hover:shadow-md transition-all rounded-xl mb-2 default-shadow'
    >
        <Image 
            src={process.env.NEXT_PUBLIC_HOST+course.image} 
            alt="logo" 
            width={90} 
            height={40}
            unoptimized
        />
        <div className='truncate'>
            <div className='font-bold'>{course?.name}</div>
            <p className='flex justify-between pr-3 mt-1 text-xs'>
                {course.description}
            </p>
        </div>
    </Link>
  )
}

export default CourseDropdownItem
