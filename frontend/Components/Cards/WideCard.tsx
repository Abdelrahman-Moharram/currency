import Link from 'next/link'
import React from 'react'
import CardBadge from './CardBadge'
import Image from 'next/image';


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
    course: courseType,
    prefix: string
}
const WideCard = ({course, prefix}:props) => {
    const created_date = () => {
        const date = new Date(course.created_at)
        return date.toDateString()
    }
  return (
    <Link href={prefix+course.id} className="rounded-xl bg-white p-4 shadow-default-sm sm:p-6 lg:p-8">
        <div className="flex items-start gap-4 lg:gap-7">
            <div
                className="w-[20%] min-w-[100px]"
            >
                <Image
                    src={process.env.NEXT_PUBLIC_HOST+course.image} 
                    width={500}
                    height={500}
                    alt={course.name} 
                    unoptimized
                />
            </div>

            <div>
            <CardBadge title={course?.subcategory?.category.name} href={'/categories/'+course?.subcategory?.category.id} />

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                {course.name}
            </h3>

            <p className="mt-1 text-sm text-gray-700">
                {course.description}
            </p>

            <div className="mt-2">
                <div className="flex items-center gap-1 text-gray-500">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>

                    <p className="text-xs font-medium">{created_date()}</p>

                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p className="text-xs font-medium text-gray-500 sm:mt-0">
                        <Link href={'/instructors/'+course.instructor.id} className='underline hover:text-black'>
                            {course.instructor.first_name + " " + course.instructor.last_name}
                        </Link>
                    </p>
                </div>

            </div>
            <div className='block text-end font-bold mt-3'>
            {
                course.price > 0?
                    course.price + " L.E"
                : 
                    "Free"
            }
            </div>
            </div>
        </div>
    </Link>
  )
}

export default WideCard
