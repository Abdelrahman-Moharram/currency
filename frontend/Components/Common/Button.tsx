import React from 'react'
import Spinner from './Spinner';

interface props{
    title: string
    submit?: boolean;
    isLoading: boolean;
    onClick?:()=>void;
    icon?:React.ReactNode
}
const Button = ({title, submit, isLoading, onClick, icon}:props) => {
  return (
    <button
        
        type={submit? "submit" : "button" }
        onClick={onClick}
        className="inline-block rounded border border-primary hover:bg-primary hover:text-white text-primary px-8 py-3 text-sm font-medium transition-all"
    >
      {isLoading ?  
        <div className='flex items-center gap-1'>
          {icon} {title} <Spinner sm /> 
        </div>
      :
        <div className='flex items-center gap-1'>
          {icon} {title}
        </div>
      }
    </button>
  )
}

export default Button
