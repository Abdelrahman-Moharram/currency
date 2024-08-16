import Link from 'next/link';
import React from 'react'

interface props {
    href:string;
    title:string
    
}
const CardBadge = ({href, title}:props) => {
  return (
    <Link href={href}>
        <span
            className="whitespace-nowrap bg-primary hover:bg-primary-hover text-white px-2 rounded-md py-1 text-xs font-medium"
        >
            {title}
        </span>
    </Link>
  )
}

export default CardBadge
