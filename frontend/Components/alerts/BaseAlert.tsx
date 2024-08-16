import React from 'react'
import { IoIosAlert, IoIosInformation, IoIosInformationCircle, IoIosWarning } from "react-icons/io";

interface Props{
    message: string;
    title?: string;
    warning?: boolean
    info?: boolean
    success?: boolean
    secondary?: boolean
}
const BaseAlert = ({message, title, warning, info, success, secondary
}:Props) => {
  return (
    <div role="alert" className={
        `rounded border-s-4 p-4 w-10/12 mx-auto my-12 ${
            warning? 'border-yellow-500 bg-yellow-50': 
            info? 'border-primary-500 bg-primary-50':
            success?'border-green-500 bg-green-50':
            secondary?'border-gray-500 bg-gray-50':''}`}>
        <strong className="block font-medium"> 
        {
            warning? <div className='flex gap-3 items-center text-yellow-600'><IoIosWarning /> {title? title : 'Warning' }</div>: 
            info? <div className='flex gap-3 items-center text-blue-600'><IoIosInformationCircle /> {title? title : 'Info' }</div>:
            success?<div className='flex gap-3 items-center text-green-600'>{title? title : 'Success' }</div>:
            secondary?<div className='flex gap-3 items-center text-gray-600'>{title? title : 'Info' }</div>:''
        }
        </strong>

        <p className="mt-2 text-sm text-gray-700">
            {message}
        </p>
    </div>
  )
}

export default BaseAlert
