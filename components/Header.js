import Image from 'next/image'
import {SearchIcon,HomeIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/outline'


export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
      

    <div className='relative flex items-center h-9 cursor-pointer my-auto'>
     <HomeIcon className='md:flex h-10 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2'  />

    </div>

    <div className='flex items-center rounded-full md:border-2 py-2 md:shadow-sm'>
      <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Search your home' />
      <SearchIcon className='hidden h-8 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2'  />
      
    </div>

    <div className='flex items-center justify-end space-x-4 text-gray-500'>
      <p className='hidden md:inline cursor-pointer'>Become a host</p>
      <GlobeAltIcon className='hidden md:inline h-6 cursor-pointer' />
      <div className='flex space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6' />
        <UserCircleIcon className='h-6' />
      </div>
    </div>


    </header>
  )
}


