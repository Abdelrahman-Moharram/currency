'use client';
import { Fragment, useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Link from 'next/link'
import { setLogout } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import Image from 'next/image';
import { ImageSkeleton } from '../Common';
import { useRouter } from 'next/navigation';
interface user {
    first_name:string;
    last_name: string;
    email:string;
    image:string | undefined;
    id:number,
    courses:number
}

interface Props{
    user:user
}

const UserNavDropDown = ({user}:Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [logout] = useLogoutMutation();

    const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
        router.push('/')
			});
	};
    function classNames(...classes:string[]) {
        return classes.filter(Boolean).join(' ')
        }
    const [isClient, setIsClient] = useState(false)
        useEffect(() => {
          setIsClient(true)
        }, [])
    return (
        <Menu as="div" className="relative inline-block text-left">
          <div>
              <MenuButton className=" items-center inline-flex w-full justify-center gap-x-2 rounded-full px-3 py-2 text-sm font-semibold transition text-black bg-gray-100 hover:bg-gray-200">
              {
                user?.image && isClient?
                  <div className='flex items-center gap-2 '>
                      <span className="font-semibold">
                        {user?.first_name + " " + user?.last_name}              
                      </span>
                      <Image
                          width={100}
                          height={100}
                          className="h-8 w-8 rounded-full"
                          src={process.env.NEXT_PUBLIC_HOST+user?.image}
                          alt="user logo"
                          unoptimized
                      />
                  </div>
                :
                <ImageSkeleton width='200px' height='30px' rounded='30px' />
              }

              
              </MenuButton>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {/* <MenuItem>
                  {({ active }) => (
                    <Link
                      href={`/auth/profile/${user.id}`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </MenuItem> */}
                <MenuItem>
                  {({ active }) => (
                    <>
                      {
                        user?.courses ?
                          <Link
                              href="/instructor"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                            Management & Dashboard
                          </Link>
                        :
                        <Link
                            href="/instructor/courses/create"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                          Become an instructor
                        </Link>
                      }
                    </>
                  )}
                </MenuItem>
              </div>


              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <button
                        onClick={handleLogout}
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm cursor-pointer w-full text-left'
                      )}
                    >
                      Logout
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
    )
}

export default UserNavDropDown