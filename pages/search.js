import Header from "../components/Header"
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import { useRouter } from 'next/router';
import {format} from 'date-fns'

export default function Search({searchResults}) {
	const router = useRouter();
	const {location,startDate,endDate,guests} = router.query;
	const formatedStartDate = format(new Date(startDate), "dd MMMM yyyy");
	const formatedEndDate = format(new Date(endDate), "dd MMMM yyyy");
	const range = `${formatedStartDate} - ${formatedEndDate}`
	return(
          <div>
          	<Header placeholder={`${location} | ${range} | ${guests}`} />
          	<main className='flex'>
          		<section className='flex-grow pt-14 px-6'>
          			<p className='tex-xs text-blue-400 font-semibold'> 500+ Stays - {range} - for {guests} guests </p>
          			<h1 className='font-semibold text-3xl mt-2 mb-6 text-blue-400'> Stays in {location}</h1>
          		</section>
             </main>
             <div className='flex flex-col'>
             {searchResults.map(({img,location,description,star,price,title,total}) => (
             	<InfoCard key={img} img={img} location={location} total={total} description={description} star={star} price={price} title={title} /> ))}
             </div>
             <Footer />
          	</div>
		)
}

export async function getServerSideProps(context) {
    const searchResults = await fetch('https://jsonkeeper.com/b/XI97').then(resp => resp.json())
    return {
    	props: {
    		searchResults,
    	}
    }
}