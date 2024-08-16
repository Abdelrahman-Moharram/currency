import Link from 'next/link'
import React from 'react'
import ImageSkeleton from './ImageSkeleton';

interface item{
    href: string;
    title: string;
    icon?: string | undefined
}
const Breadcrumb = ({items}:{items:item[]|undefined}) => {
  return (
    
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    {
        items?.length?
            items.map((item, i)=>(
                <li className="rtl:rotate-180 flex items-center" key={i}>
                    {
                        i !== 0?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                            />
                        </svg>
                        :null
                    }
                    <Link href={item.href} className="font-semibold text-secondry hover:text-black flex gap-2 items-center transition "> {item.icon} {item.title} </Link>
                </li>
            ))
        : 
        <ImageSkeleton width='100px' height='40px' />
    }
  </ol>
</nav>
  )
}

export default Breadcrumb
