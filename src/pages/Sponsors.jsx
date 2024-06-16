import React from 'react'
import SponsorsBox from '../components/SponsorsBox'
import { SPONSORS } from '../utils/Constants'
const Sponsors = () => {
  return (
    <>
    <main className='relative overflow-hidden'>
            <section className='flex  flex-col text-center gap-8 py-24 mt-24  '>
                <h1 className='text-[60px] font-bold text-[white]'>Sponsors</h1>

                {SPONSORS.map((element, index)=>(

                    <SponsorsBox key = {index} tag = {element.TAG} companyName = {element.SPONSORNAME} desc = {element.DESC} title = {element.TITLE} photo = {element.COMPANYLOGO} buttonName={"Read more"} link={`/sponsors/${element?.SPONSORNAME.toLowerCase()}`} />

                ))}



            </section>
        </main>
    
    </>
  )
}

export default Sponsors