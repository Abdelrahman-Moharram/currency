'use client'
import React from 'react'
import NavBar from "@/Components/Shared/NavBar";
import { Inter } from "next/font/google";

import { useAppSelector } from "@/redux/hooks";

const inter = Inter({ subsets: ["latin"] });
const CustomLayout = ({children}:{children:React.ReactNode}) => {
    const {colormode} = useAppSelector(state=>state.auth)
    return (
        <body className={inter.className + ` ${colormode === 'dark'?'dark':'light'}`}>
            <NavBar /> 
            <div className="lg:w-[80%] min-h-[calc(100vh-90px)] w-full mx-auto rounded-lg my-3 overflow-hidden bg-container">
                {children}
            </div>
        </body>
  )
}

export default CustomLayout
