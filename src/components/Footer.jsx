import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='flex flex-col px-4 py-6 text-[black] font-mamun-font-secondary'>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10'>
                <article className='flex flex-col items-center gap-4'>
                    <h3 className='text-allotrix-std text-sm'>
                        Socials
                    </h3>
                    <div className='flex items-center gap-3 text-2xl'>
                        <a href="https://twitter.com/allotrixapp" target='blank'>
                            <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com/allotrix" target='blank'>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/allotrix-automation/mycompany/" target='blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                </article>
                <aside className='flex flex-wrap gap-6 px-10 justify-center my-10 md:my-[unset] md:gap-14'>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            <Link to="/">
                                Product
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/privacypolicy">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/termsofservice">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/refundpolicy">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            <Link to="/">
                                Other Links
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/gallery">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/secretariat">
                                Secretariat
                                </a>
                            </li>
                            <li>
                                <a href="/committees">
                                    committees
                                </a>
                            </li>
                            <li>
                                <a href="/about">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className=' text-sm'>
                            Resources
                        </h3>
                        <ul className='text-sm'>
                            <li>Coming Soon!</li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a className='flex gap-1 items-center' href="mailto:allotrixapp@gmail.com?subject=Meeting%20Request">
                                    <IoMdMail />
                                    info@oneworldfoundation.in
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+1(778)874-4788">
                                    <IoMdCall />
                                    +1 (778) 874-4788
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+919840572975">
                                    <IoMdCall />
                                    +91 9840572975
                                </a>
                            </li>
                        </ul>
                    </article>
                </aside>
            </div>
            <aside className='flex justify-between items-center border-t-2 border-solid border-t-mamun-blue pt-6 md:mx-32'>
                <div className='w-[140px] text-primary font-bold text-xl'>
                    dreamclerk
                </div>
                <div className='bg-[#161617] text-[13px] font-light py-1 px-4 rounded-2xl text-[white] transition-all duration-300 ease-out border-[1px] border-solid hover:border-mamun-blue'>
                    <a href='/'>
                        Register
                    </a>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;