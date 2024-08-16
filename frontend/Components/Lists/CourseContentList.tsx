import React, { useEffect, useState } from 'react'
import { ImageSkeleton } from '../Common';
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';

interface content_setType{
    id:string;
    name:string
}

interface section{
    id: string;
    name: string;
    content_set:content_setType[]
}

interface props{
    sections:section[]
    section_id?: string
}
const CourseContentList = ({sections, section_id}:props) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(!loading)
        }, 1000)
    },[])
    
  return (
    <div className="space-y-4">
        {
            sections?.length || loading?
                <h2 className='font-bold text-2xl mb-5'>Sections & Content</h2>
            : null
        }
    {
        sections?.length?
            sections.map(section=>(
                <details key={section.id} className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="font-medium">{section.name}</h2>

                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <div className="ml-4 mt-5">
                        {
                            section.content_set.map(content=>(
                                content?.name && section_id?
                                    <Link 
                                        href={`?section=${section_id}&lecture=${content.id}`} 
                                        className='flex items-center hover:underline' key={content.id}
                                    >
                                        <IoMdArrowDropright /> {content.name}
                                    </Link>
                                :
                                    <p className='flex items-center' key={content.id}><IoMdArrowDropright /> {content.name}</p>

                            ))
                        }
                    </div>
                </details>
            ))
        :
            loading?
                <ImageSkeleton width='100%' height='100px' rounded='10px' />
            :null
    }

</div>
  )
}

export default CourseContentList
