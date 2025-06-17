import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import Maps from '../components/Map';


function Search({searchResults}:{searchResults:any}) {
    const router = useRouter();
    const {location,numberofGuests,} = router.query;
    const sdate = router.query.startDate?.slice(0,15);
    const edate = router.query.endDate?.slice(0,15);
    
  return (
    <div>
      <Header placeholder={`${location} | ${sdate} - ${edate} | ${numberofGuests} guests`} />
      <main className="flex">
        <section className='flex-grow pt-14 px-6'>
          <p className="text-sm font-semibold ">300+ stays from {sdate} to {edate} for {numberofGuests} guests</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold ">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className=" transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className=" transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 hover:shadow-lg active:scale-95 active:bg-gray-100">
              Type of Place
            </p>
            <p className=" transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 hover:shadow-lg active:scale-95 active:bg-gray-100">
              Price 
            </p>
            <p className=" transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 hover:shadow-lg active:scale-95 active:bg-gray-100">
              Rooms and Beds
            </p>
            <p className=" transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 hover:shadow-lg active:scale-95 active:bg-gray-100">
              More Filters
            </p>
          </div>
          <div className='flex flex-col'>
            {searchResults.map(({img,location,title,description,price,star,total}:{img:any,location:any,title:any,description:any,price:any,star:any,total:any})=>(
             <InfoCard key={img} img={img}
             location={location}
             title={title}
             description={description}
             price={price}
             total={total}
             star={star}
             />
            ))} 
          </div>
        </section>
        <section className='hidden xl:inline-flex'>
        <Maps searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res)=> res.json()
  )
  return{
    props:{
      searchResults,
    }
  }
};