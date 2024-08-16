import { useGetUserCoursesQuery } from '@/redux/api/Courses';
import React from 'react'
import { ImFileEmpty } from "react-icons/im";
import CourseDropdownItem from './CourseDropdownItem';


interface courseType{
    id: string,
    name: string,
    image: string,
    description: string,
}
interface props{
    handleCourseDropdown:()=>void
}
const CoursesDropdown = ({handleCourseDropdown}:props) => {
    const {data} = useGetUserCoursesQuery(undefined, {refetchOnFocus:true})
    return (
        <div className='absolute right-10 top-[60px] max-w-[40rem] bg-gray-100 rounded-md shadow-lg px-5 py-4 z-10 my-3 max-h-[70%] overflow-y-auto'>
        {
            data && data?.courses?.length?
                data.courses.map((course:courseType)=>(
                    <CourseDropdownItem handleCourseDropdown={handleCourseDropdown} course={course} key={course.id} />
                ))
            :
            <div className='py-3 px-20'>
                <p className='text-lg font-bold flex gap-4 items-center'>
                    <ImFileEmpty /> 
                    No Courses Available
                </p>
            </div>
        }
        </div>
    )
}

export default CoursesDropdown
