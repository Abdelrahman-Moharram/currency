import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import CardBadge from './CardBadge';
import Image from 'next/image';

interface subcategory{
    id: string;
    name: string;
    category:categoryType
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
    course:courseType,
    prefix:string
}

const CourseCard = ({course, prefix}:props) => {
    
  return (
    <a href={prefix+course.id} className="shadow-xl group relative block overflow-hidden h-auto rounded-lg">
        <button
            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
            <span className="sr-only">Wishlist</span>
            {
                <FaRegHeart />                
                // <FaHeart />
            }
        </button>
            <Image
                width={500}
                height={300}
                unoptimized
                src={process.env.NEXT_PUBLIC_HOST+course.image}
                alt={course.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

        <div className="relative border border-gray-100 bg-white p-6">
            <CardBadge title={course.subcategory?.category?.name} href={'/categories/'+course.subcategory?.category.id} />

            <h3 className="mt-4 text-sm font-medium text-gray-900 truncate">{course.name}</h3>

            <p className="mt-1.5 text-xs text-gray-700 truncate-2 ">
            {
                course.description
            }
            </p>

            <div className="flex justify-between mt-4">
                <span className='text-sm text-right block my-4 font-bold'>
                {
                    course.price > 0?
                        course.price + " L.E"
                    : 
                        "Free"
                }
                </span>

                {/* <button
                    className="flex gap-2 transition-all bg-primary hover:bg-primary-hover text-sm p-3 items-center text-white rounded-md"
                >
                    <FaCartPlus />
                    <span>
                        Add to Cart
                    </span>
                </button> */}
            </div>
        </div>
    </a>
  )
}

export default CourseCard