'use client'
import React, { useState } from 'react'
import Cookies from "js-cookie"
import { RiMoonClearFill } from "react-icons/ri";
import { PiSunFill } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeColorMode } from '@/redux/features/authSlice';

const SwitchMode = () => {
    const {colormode} = useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch()

    const handleDarkMood = ()=>{
        dispatch(changeColorMode())
    }
  return (
    <label
        htmlFor="AcceptConditions"
        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
    >
        <input
            type="checkbox"
            id="AcceptConditions"
            checked={colormode === 'light'}
            defaultChecked={colormode === 'light'}
            onChange={handleDarkMood}
            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        />

        <span
            className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
        >
            <PiSunFill className='hidden' data-checked-icon />
            <RiMoonClearFill data-unchecked-icon />
        </span>
    </label>
  )
}

export default SwitchMode
