'use client'
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { useParams } from "next/navigation";

export default function SideNav({className}:{className:string}) {

    const {id} = useParams()
    
    return (
        <div className={className}>
            <div className="flex flex-col justify-between shadow-xl rounded-lg fixed  w-[15%] bg-white max-h-[80%] overflow-y-auto">
                <div className="px-3 py-6">
                    <ul className="">

                        <li>
                            <Link
                                href={`/instructor/courses/${id}`}
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <FaHome />
                                Home
                            </Link>
                        </li>  

                        <li>
                            <Link
                                href={`/instructor/courses/${id}/sections&content`}
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <RiMovieLine className="text-sm" />
                                <span className="lg:text-sm text-xs">
                                    Sections & Content
                                </span>
                            </Link>
                        </li>                    

                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="flex items-center gap-2 text-sm font-medium"> <MdManageAccounts /> Manage </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                <Link
                                    href={`/instructor/courses/${id}/settings`}
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <IoSettingsSharp />
                                    Settings
                                </Link>
                                </li>

                                <li>
                                <a
                                    href={`/instructor/courses/${id}/delete`}
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100"
                                >
                                    <FaTrash />
                                    Delete
                                </a>
                                </li>

                                
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}