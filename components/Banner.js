import Image from 'next/image'
import KutaisiBanner from '../assets/kutaisi.webp'

export default function Banner() {
  return (
     <div className='relatve h-[300px] sm:h-[400px] lg:h[500px] xl:5[600px] 2xl:h-[700px]'>
      <Image src='https://links.papareact.com/0fm' objectFit='cover' layout='fill' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-blue-600 hover:shadow-2xl active:scale-90 transition duration-150 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3'>I'm flexible</button>
      </div>
     </div>
  )
}
