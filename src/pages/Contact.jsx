import React from 'react';
import { IoMdCall, IoMdMail } from "react-icons/io";
import India from '../assets/india.png';
import Canada from '../assets/canada.png';
import Whatsapp from '../assets/whatsapp.png';
import X from '../assets/x.png';
import Linkedin from '../assets/linkedin.png';
import Youtube from '../assets/youtube.png';
import Insta from '../assets/insta.png';


const Contact = () => {

    return (
        <main className=' text-[white] relative overflow-hidden'>
            <section className='flex flex-col items-center py-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
                <h1 className='md:text-5xl text-4xl text-center w-full font-allotrix-font-secondary'>
                    Got Queries? <span className='gradient-subheading text-4xl md:text-5xl py-1 border-b-2 border-allotrix-text'>Reach out</span> to us
                </h1>
            </section>
            <section className='w-[90%] mx-auto mt-10 mb-24 flex flex-wrap justify-center'>
                <article className='md:pr-12 md:border-r-2 md:border-[#252526]'>
                    <h3 className='text-2xl font-bold font-allotrix-font-secondary text-allotrix-std mb-4'>
                        Primary Contact
                    </h3>
                    <aside className='flex flex-col md:gap-10 gap-8 text-xl font-allotrix-font-secondary px-6 md:px-10 py-12 rounded-md bg-[#252526] w-[370px] md:w-[370px]'>
                        <p className='flex gap-2 items-center'>
                            <IoMdMail />
                            info@oneworldfoundation.in
                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdCall />
                            +91 73389 85304
                            <img src={India} alt="Canada" />

                        </p>
                        <p className='flex gap-4 items-center'>
                            <IoMdCall />
                            +91 75500 75715
                            <img src={India} alt="India" />
                        </p>
                    </aside>
                </article>
                <article className='md:pl-12 mt-4 md:mt-[unset]'>
                    <h3 className='text-2xl font-bold font-allotrix-font-secondary text-allotrix-std mb-4'>
                        Chat with us
                    </h3>
                    <aside className='flex justify-between items-center text-2xl font-allotrix-font-secondary px-10 py-6 rounded-md bg-[#252526] w-[370px] md:w-[400px]'>
                        <a href='https://wa.me/+917338985304' target='blank' className='h-[50px] w-[50px]'>
                            <img src={Whatsapp} className='max-h-[100%] max-w-[100%]'  alt="Whatsapp" />
                            <p className='text-sm'>
                                Aaryan
                            </p>
                        </a>
                        <a href='https://wa.me/+917200000042' target='blank' className='h-[50px] w-[50px]'>
                            <img src={Whatsapp} className='max-h-[100%] max-w-[100%]'  alt="Whatsapp" />
                            <p className='text-sm'>
                                Tanishq
                            </p>
                        </a>
                        <a href='https://wa.me/+917550075715' target='blank' className='h-[50px] w-[50px]'>
                            <img src={Whatsapp} className='max-h-[100%] max-w-[100%]'  alt="Whatsapp" />
                            <p className='text-sm'>
                                Nithin
                            </p>
                        </a>
                    </aside>
                    <h3 className='text-2xl mt-8 font-bold font-allotrix-font-secondary text-allotrix-std mb-4'>
                        Social Links
                    </h3>
                    <aside className='flex justify-between items-center text-2xl font-allotrix-font-secondary px-10 py-6 rounded-md bg-[#252526] w-[370px] md:w-[400px]'>
                        <a href="https://www.instagram.com/madrasmodelunitednations" target='blank'>
                            <img src={Insta} className='max-h-[50px] max-w-[50px]' alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/oneworldfoundation" target='blank'>
                            <img src={X} className='max-h-[50px] max-w-[50px]' alt="X" />
                        </a>
                        <a>
                            <img src={Youtube} className='max-h-[50px] max-w-[50px]' alt="Youtube" />
                        </a>
                        <a href="https://www.linkedin.com/company/allotrix-automation/mycompany/" target='blank'>
                            <img src={Linkedin} className='max-h-[50px] max-w-[50px]' alt="Linkedin" />
                        </a>
                    </aside>
                </article>
            </section>
        </main>
    )
}

export default Contact;