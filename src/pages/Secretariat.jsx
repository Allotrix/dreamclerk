import React from 'react'
import { SECRETARIAT } from '../utils/Constants'
import SecretariatCard from '../components/SecretariatCard'
import StickyScroll from '../components/StickyScroll';

const Secretariat = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className='pt-[200px] w-full flex flex-col items-center'>
        <h2 className='md:text-5xl text-4xl px-4 text-white text-center'>
          Meet the <span className='text-mamun-green font-bold'>Board</span>
        </h2>
        <StickyScroll OBJECT={SECRETARIAT}/>

        <br>
        </br>
      <div className='w-[80%] flex flex-col p-8 border-2 border-mamun-green rounded-md '>
        <p>
        <strong className='gradient-subheading text-2xl'>Letter from the Secretariat </strong></p>
        <br/>

        <p><strong >Dear Esteemed Delegates,</strong></p>
          <br/>
          <p> We are thrilled to invite you to the inaugural edition of Madras MUN, the first-ever hotel-style Model United Nations conference in the heart of Chennai. With a commitment to excellence and a passion for diplomacy, we are crafting an MUN experience that combines the rich heritage of Chennai with unparalleled professionalism.
          </p>

          <p>Madras MUN is not just another conference; it is a unique opportunity to immerse yourself in an environment where tradition meets modernity. Set against the backdrop of Chennai's vibrant culture, our venue offers luxurious accommodations, state-of-the-art facilities, and an atmosphere that fosters both intellectual growth and cultural appreciation.
          </p>
          <br/>

          <p className='font-bold'>What Sets Us Apart? </p>
          <br/>
          <ul className='flex flex-col gap-2'>
            <li> <strong>1. Luxury and Comfort:</strong> Enjoy the convenience of staying at our exquisite hotel venue, where all your needs are catered to under one roof. Our hotel-style format ensures that delegates have ample opportunities to network and collaborate in a comfortable and sophisticated setting.</li>
          

          <li><strong>2. Professionalism at its Peak:</strong> From meticulously organized committees to expertly curated social events, every aspect of Madras MUN is designed to provide a seamless and enriching experience. Our secretariat is dedicated to maintaining the highest standards of professionalism, ensuring that every delegate leaves with a deeper understanding of global issues and diplomacy.</li>

          <li><strong>3. Cultural Enrichment:</strong> Chennai, with its rich history and cultural heritage, offers a unique backdrop for our conference. We have integrated local cultural experiences into our program, allowing delegates to explore and appreciate the vibrant traditions of our host city. </li> 
          </ul><br/>

          <p className='font-bold'>Join Us for an Unforgettable Experience
          </p>
          <br/>

          <p>Madras MUN is more than a conference; it's a journey into the world of international relations, set in a city renowned for its hospitality and heritage. Whether you're a seasoned MUN participant or a newcomer eager to delve into global issues, our conference promises to be an enlightening and transformative experience.
          </p>
          <br/>

          <p>We invite you to be a part of this groundbreaking event. Come, contribute, and be inspired by the spirit of diplomacy and the charm of Chennai. Together, let's create memories and forge connections that will last a lifetime.
          </p>
          <br></br>
          <p className='font-bold'>Warm regards,
          <br/>
          The Secretariat
          Madras Model United Nations 2024
          </p>

      </div>
      </section>
    </main>
  )
}

export default Secretariat