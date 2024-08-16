'use client';

import { useAppSelector} from '@/redux/hooks';
import Link from 'next/link';
import UserNavDropDown from './UserNavDropDown';
import CoursesDropdown from '../Dropdowns/CoursesDropdown';
import { useState } from 'react';
import { SiCoursera } from "react-icons/si";
import Image from 'next/image';

export default function Navbar() {
    const [coursesToggler, setCoursesToggler] = useState(false)


	const { isAuthenticated, user, isLoading } = useAppSelector(state => state.auth);
    const handleCourseDropdown = () =>{
        setCoursesToggler(!coursesToggler)
    }
	const authLinks = () => (
		<>
            <div 
                onClick={()=>setCoursesToggler(!coursesToggler)} 
                className="relative rounded-full p-4 transition-all cursor-pointer bg-gray-100 hover:bg-gray-200"
            >
                <SiCoursera />
            </div>
            {
                coursesToggler?
                    <CoursesDropdown handleCourseDropdown={handleCourseDropdown} />
                :null
            }
			<UserNavDropDown user={user} />

		</>
	);

	const guestLinks = () => (
		<>
			<div className="sm:flex sm:gap-4">
                <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href='/auth/login'
                >
                    Login
                </Link>

                <div className="hidden sm:flex">
                    <Link
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                        href='/auth/register'
                    >
                        Register
                    </Link>
                </div>
            </div>
		</>
	);

	return (
		<header className="bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <Link className="block text-teal-600" href="/">
                        <span className="sr-only">Home</span>
                        <Image
                            width={'180'}
                            height={50}
                            src='/coursatty_high_resolution_logo_black_transparent.png' 
                            alt="Logo" 
                            priority
                            style={{width:"auto"}}
                        />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/courses"> Courses </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/industries"> Industries </Link>
                        </li>
                        {
                            user?.courses > 0?
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/instructor">Dashboard</Link>
                                </li>
                            :null
                        }
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        {
                            isAuthenticated || isLoading?
                                authLinks()
                            :
                                guestLinks()
                        }
                    </div>

                    <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </header>
	);
}