import Image from 'next/image'
import {useState} from 'react'
import { useRouter } from 'next/router';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {SearchIcon,HomeIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/outline'
import { DateRangePicker } from 'react-date-range';


export default function Header({placeholder}) {
  const [searchInput,setSearchInput] = useState('');
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const [guests,setGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate)
      setEndDate(ranges.selection.endDate)
  }

   const selectionRange = {
      startDate,
      endDate,
      key: 'selection',
    };

   const search = () => {
    router.push({
      pathname: '/search', 
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      }
    })
   }
  
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
      

    <div onClick={() => router.push('/')} className='relative flex items-center h-9 cursor-pointer my-auto'>
     <HomeIcon className='md:flex h-10 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2'  />

    </div>

    <div className='flex items-center rounded-full md:border-2 py-2 md:shadow-sm'>
      <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}  className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type='text' placeholder={placeholder || 'Search your home'} />
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

{searchInput && <div className='flex flex-col col-span-3 mx-auto '>
  <DateRangePicker ranges={[selectionRange]} minDate={new Date()} onChange={handleSelect}/>
  <div className='flex items-center border-b mb-4'>
    <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
    <UsersIcon className='h-5' />
    <input value={guests} min={1} max={99} onChange={(e) => setGuests(e.target.value)} type='number' className='w-12 pl-2 text-lg outline-none text-blue-600' />
  </div>
  <div className='flex'>
    <button onClick={() => setSearchInput('')} className='flex-grow text-red-800'>Cancel</button>
    <button onClick={search} className='flex-grow text-blue-600'>Search</button>
  </div>
</div>}
    </header>
  )
}


