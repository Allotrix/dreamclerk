import React, { useState } from 'react';
import { USERS, CLIENTS, SECRETARIAT, COMMITTEES, skills, serviceDetails} from '../utils/Constants';
import GradientBox from '../components/GradientBox';
import { GiSpeaker } from "react-icons/gi";
import { IoVolumeMute } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from '../components/TestimonialCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SecretariatCard from '../components/SecretariatCard';
import StickyScroll from '../components/StickyScroll';
import { CHAIRS } from "../utils/Constants";
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon,UserGroupIcon,CircleStackIcon,CodeBracketIcon,PencilSquareIcon,SpeakerWaveIcon,GlobeAltIcon } from '@heroicons/react/24/solid'
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Home = () => {

  const [mute, setMute] = useState(false);
  const [secretariatIndex, setSecretariatIndex] = useState(0);

  const handleSecretariatNext = () => {
    setSecretariatIndex((prevIndex) => (prevIndex + 1) % SECRETARIAT.length);
  }

  const handleVideoMute = () => {
    const video = document.getElementById('munVideo');
    if(video) {
      video.muted = !video.muted;
      setMute(video.muted);
    }
  }

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
   
      {/* <Landingpage/> */}
      {/* <section className='pt-36 mx-auto w-full flex flex-col items-center'>
        <div className='h-[180px] w-[180px]'>
            <img className='max-h-full max-w-full' src="/maamun.png" alt="logo" />
        </div>
        <h2 className='gradient-heading md:text-6xl text-2xl text-center font-mamun-font-secondary'>
            MOST SOPHISTICATED MUN
        </h2>
        <h2 className='md:text-6xl text-2xl text-center font-bold'>
            CHENNAI HAS EVER SEEN
        </h2>
        <h5 className='my-6 text-center text-2xl'>
            27th - 29th of June, 2024
            <p className='text-[#cbcbcb] text-[16px]'>Experience Listens. Be Heard.</p>
        </h5>
        <div className=' flex flex-wrap gap-3 px-4 md:px-32  justify-center items-center '>
        <a href="/register" className='px-14 py-2 bg-mamun-blue rounded-lg'>
            Register Now
        </a>
        <a href="https://matrix.allotrix.com" target="_blank" className='px-14 py-2 border-mamun-blue border-2 rounded-lg'>
            Matrix
        </a>

        </div>
        <br></br>
        <p className='text-[12px] text-[#cbcbcb]'><a href='/termsofservice' className='hover:text-mamun-green'>Terms and Conditions </a> applied</p>
        
      </section> */}
       <section className='bg-[#1E1E1E] min-h-screen lg:mx-10 sm:mx-5 flex flex-col items-center justify-center gap-y-5 my-5 rounded-xl py-10'>
        
        <div className='flex flex-row items-center justify-center border border-[white] p-2 gap-2 rounded-[12px] text-[12px] md:text-[16px] animate-fadeindown'>
          <span>✨</span>
          <span className='font-semibold'>|</span>
          <span>Turning your requests into reality</span>
        </div>

        <div className='flex flex-col gap-5 items-center'>
            <h2 className='lg:text-[50px] md:text-[35px]  text-[45px] text-center px-4 font-bold leading-normal animate-zoomin'>Unlock New Opportunities with DreamClerk</h2>
            <p className='lg:text-[20px] md:text-[15px] animate-fadeindown'>
            Part-Time Jobs Tailored for the Student Lifestyle
            </p>
        </div>
        <div className='flex flex-wrap gap-5 px-4  justify-center w-full'>
          {
            skills.slice(0, 6).map((obj) => (
              <Link to={`/`} key={obj.id} className='rounded-lg h-[200px] w-[160px] border border-[white] flex flex-col gap-y-5 items-center justify-center hover:scale-110 transition-all duration-300 ease-out animate-fadein'>
                <div className='w-[120px] h-[70px]'>
                <img className='w-full h-full object-contain invert brightness-200' src={obj.img} alt="AV" />
                </div>
                  {/* <img className='w-full h-full object-contain' src={obj.img} alt="AV" /> */}
                  <h3>
                    {obj.title}
                  </h3>
              </Link>
            ))
          }
           <p className='text-[20px] animate-fadeindown text-center md:text-left'>
           Looking for someone to handle your tasks? Hire them here!
            </p>
        </div>
    

</section>
      {/* <section className='mt-14 w-full'>
        <div className='flex flex-wrap gap-3 px-4 md:px-32 justify-center'>
          {
            COMMITTEES.slice(0, 6).map((committee) => (
              <Link to={`/committees/${committee.comAbb.toLowerCase()}`} key={committee.comAbb} className='rounded-lg h-[200px] w-[160px] border border-mamun-light-blue flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-out'>
                  <img className='w-[130px] h-[130px]' src={committee.comLogo} alt="AV" />
                  <h3>
                    {committee.comAbb}
                  </h3>
              </Link>
            ))
          }
        </div>
        <article className='text-center my-7 text-[#cbcbcb]'>
          and more exciting committees! 
        </article>
      </section> */}
      <section id='secretariat' className='mt-14 w-full' onClick={handleSecretariatNext}>
        <h2 className='md:text-5xl text-4xl sm:text-2xl px-4 text-white text-center text-primary font-bold'>
          Freelancing, <span className='text-[black] font-bold decoration-double decoration-[#ff0000]'>Simplified for Students</span>
        </h2>
        <StickyScroll OBJECT={serviceDetails}/>




      </section>
      <section className='mt-14 md:max-w-[70%] mx-auto flex flex-col gap-2'>
        <GradientBox tag={"DreamClerk"} href={"/register"} buttonName={"Get Started"} title={"No more mindless negotiations"} title2={"Discover Jobs that Fit Your Skills"} photo={"https://i.postimg.cc/2jLNqTZz/IMG-8571.png"} link={"/register"} />
          {/* <a href='/about' className='self-center text-[#cdcdcd] hover:text-mamun-green'><p>About OWF & Madras MUN</p></a> */}
      </section>
      {/* <section className='w-full bg-[#141415] h-[100px] flex items-center mt-24 mb-10'>
        <div className='w-full md:w-[75%] overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
          {
              
              [...Array(2)].map((arr, i) => (
                  <div key={i} className='flex flex-nowrap animate-slide'>
                      {
                          CLIENTS.map((committee) => (
                              <div key={committee.alt} className='relative w-[200px] m-10 shrink-0 flex items-center'>
                                  <img src={committee.logo} alt={committee.alt} className='object-contain max-w-none w-[150px]' />
                              </div>
                          ))
                      }
                  </div>
              ))
          }
        </div>
        <aside className='hidden md:block px-4'>
            <h3 className='text-2xl'>
                Esteemed Sponsors
            </h3>
            <p className='text-sm'>
                In partnership with <span className='text-mamun-blue font-semibold tracking-wide'>OWF</span>
            </p>
        </aside>
      </section> */}

      {/* <section className='w-full'>
        <div className='px-4 md:mx-32 rounded-lg relative flex flex-col items-center'>
          <video id='munVideo' className='rounded-lg' src={'/endgame.mp4'} autoPlay muted loop>
            Your browser does not support the video.
          </video>
          <button onClick={handleVideoMute} className='p-2 rounded-md bg-[#949393] text-[black] text-2xl absolute right-6 top-4'>
            {mute ? <IoVolumeMute /> : <GiSpeaker />}
          </button>
          <a className='text-md text-center text-[#cbcbcb]' href="/">
            View video gallery
          </a>
          <h5 className='text-center px-4 w-full md:w-[700px] my-10 text-2xl'>
          From meticulously organized committees to expertly curated social events, every aspect of Madras MUN is designed to provide a seamless and enriching experience.          </h5>
        </div>
      </section> */}
      <section className='w-full px-4 md:px-32 my-14 py-10 bg-[black] flex flex-col gap-y-10'>
        <p className='text-center text-2xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus egestas dolor, in efficitur justo tincidunt nec. Etiam fermentum justo
        </p>
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
        <div className='flex flex-row gap-10 border rounded-xl py-2 px-8 h-[240px] items-center mx-auto'>
          <div className='flex flex-col gap-10 item'>
            <h3 className='font-bold lg:text-3xl md:text-4xl sm:text-2xl'>
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
        <div className='flex flex-row gap-10 border rounded-xl py-2 px-8 h-[240px]  items-center '>
          <div className='flex flex-col gap-10 item'>
            <h3 className='font-bold lg:text-3xl md:text-4xl sm:text-2xl'>
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
