import React, { useState } from 'react';
import { USERS, skills, serviceDetails} from '../utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GradientBox from '../components/GradientBox';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from '../components/TestimonialCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StickyScroll from '../components/StickyScroll';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon,UserGroupIcon,CircleStackIcon,CodeBracketIcon,PencilSquareIcon,SpeakerWaveIcon,GlobeAltIcon } from '@heroicons/react/24/solid'

const Home = () => {


 

  const groupUsers = (users) => {
    const groupedUsers = [];
    for (let i = 0; i < users.length; i += 2) {
      groupedUsers.push(users.slice(i, i + 2));
    }
    return groupedUsers;
  };

  const groupedUsers = groupUsers(USERS);

  return (
    <main className='font-mamun-font-secondary text-[white] '>

    <section className=' text-[#1E1E1E] md:h-screen lg:mx-10 sm:mx-5 flex flex-col items-center justify-center gap-y-5 md:mt-2 md:mb-2 mt-16 mb-6 rounded-xl bg-animated'>
        
        <div className='flex flex-row items-center justify-center border border-[black] py-1 px-2 gap-2 rounded-[12px] text-[12px] md:text-[16px] animate-fadeindown '>
          <span>✨</span>
          <span className='font-semibold'>|</span>
          <span>Turning your requests into reality</span>
        </div>

        <div className='flex flex-col gap-5 items-center w-[70%]'>
            <h2 className='  md:text-6xl text-4xl text-center px-2 font-bold animate-zoomin'>Unlock New Opportunities with <span className='text-[#38A626]'>DreamClerk</span></h2>
            <p className='lg:text-[20px] md:text-[15px] animate-fadeindown text-center'>
            FREELANCING X STUDENT WORK FORCE = QUALITY WORK

            </p>
        </div>
        <div className='flex flex-wrap gap-5 px-4  justify-center w-full'>
          {
            skills.slice(0, 6).map((obj) => (
              <Link to={`/`} key={obj.id} className='rounded-lg h-[200px] w-[160px] bg-[white] border-2 border-[black] flex flex-col gap-1 gap-y-5 items-center justify-center hover:scale-110 transition-all duration-300 ease-out animate-fadein'>
                <FontAwesomeIcon icon={obj.icon}  style={{ fontSize: '40px', alignSelf: "center"}}/>
                  {/* <img className='w-full h-full object-contain' src={obj.img} alt="AV" /> */}
                  <h3>
                    {obj.title}
                  </h3>
              </Link>
            ))
          }
           <p className='text-[20px] animate-fadeindown text-center md:text-left'>
           Want to earn? Do it while you learn.  <a className='text-[#38A626]'>register now!!!</a>
            </p>
        </div>
    

</section>
     
      <section id='secretariat' className=' w-full bg-[#0b0c10] py-10 md:py-40'>
        <h2 className='md:text-5xl text-4xl sm:text-2xl px-4  text-white text-center text-primary font-bold'>
          Freelancing, <span className='text-[white] font-bold decoration-double decoration-[#ff0000]'>Simplified for Students</span>
        </h2>
        <div className='md:block hidden'>
          <StickyScroll OBJECT={serviceDetails}/>
        </div>
        <div className='md:hidden'>
          {
            serviceDetails.map((service,index) => (
              <div key={index} className='flex flex-col gap-8 items-center px-4'>
                <img className='w-[200px]' src={service.video} />
                <h3 className='text-primary font-bold text-lg self-start'>
                  {service.heading}
                </h3>
                <h2 className='text-2xl self-start font-bold'>
                  {service.title}
                </h2>
                <p className='text-[gray] text-md self-start'>
                  {service.description}
                </p>
              </div>
            ))
          }
        </div>
      </section>
      <section className='mt-5 md:max-w-[70%] mx-auto flex flex-col gap-2'>
        <GradientBox tag={"DreamClerk"} href={"/register"} buttonName={"Get Started"} title={"Quality service, sensible price"} title2={"Discover Jobs that fit your skills"} photo={"/v1.gif"} link={"/"} />
      </section>
     

      
      <section className='w-full px-4 md:px-32 my-14 py-10 bg-[black] flex flex-col gap-y-10 justidy-center'>
        <p className='text-center text-2xl  w-[70%] self-center'>
        Check out our Customer Experiences and Feedback to understand why we’re trusted by so many        </p>
      <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
        {groupedUsers.map((group, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 justify-center h-auto">
            {group.map((user, idx) => (
              <TestimonialCard
                key={idx}
                name={user.name}
                designation={user.designation}
                img={user.profile}
                message={user.message}
              />
            ))}
          </div>
        ))}
        </Carousel>
      </section>
      <section className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-3 gap-5 text-[black] w-full md:w-[75%] mx-auto items-center'>
        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-10 border rounded-xl py-2 px-8 h-[240px] md:items-center mx-auto'>
          <div className='flex flex-col md:gap-10 gap-3'>
            <h3 className='font-bold lg:text-3xl md:text-4xl text-3xl'>
              Find exciting gigs that pay
            </h3>
            <button className='rounded-lg font-bold hover:text-[white] hover:bg-primary  border-2 outline-none p-2 w-52'>
              Get Started
            </button>
           
          </div>
          <div className=''>
            <ChatBubbleLeftRightIcon className='h-16 w-30 stroke-[black]' fontSize={25}/>
          </div>

        </div>
        <div className='flex flex-col md:flex-row w-full md:gap-10 gap-3 border rounded-xl py-2 px-8 h-[240px]  md:items-center '>
          <div className='flex flex-col md:gap-10 gap-3'>
            <h3 className='font-bold lg:text-3xl md:text-4xl text-3xl'>
            Find the right one for you task
            </h3>
            <button className='rounded-lg font-bold hover:text-[white] hover:bg-primary  border-2 outline-none p-2 w-52'>
              Hire
            </button>
           
          </div>
          <div className=''>
            <UserGroupIcon className='h-16 w-30 stroke-[black]' fontSize={25}/>
          </div>

        </div>
        

      </section>
      {/* <section className='flex flex-col  items-center py-20 gap-10'>
        <div>
          <ul className='text-primary flex flex-row gap-16 text-xl'>
            <li className='p-5 border rounded-full border-[gray]'>
          <FaInstagram/>
            </li>
            <li className='p-5 border rounded-full border-[gray]'>
          <FaLinkedin/>
            </li>
            <li className='p-5 border rounded-full border-[gray]'>
          <FaXTwitter/>
            </li>
          </ul>
          
        </div>
        <div className='text-[black] w-1/2 '>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam, iste optio tenetur illum facilis odio eum aperiam dolore ut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam, quis qui a praesentium incidunt voluptate aliquid quam quibusdam quia.</p>
          </div>
      </section> */}
    </main>
    
  )
}

export default Home;
