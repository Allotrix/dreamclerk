import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = ({openNav, setOpenNav}) => {
    return (
        <nav className={`flex flex-col items-center justify-center gap-16 fixed md:absolute ${openNav ? 'top-0': 'top-[-150%]'} left-0 h-[100vh] w-full border-b-[1px] border-b-[white] font-bold tracking-wide transition-all duration-500 ease-in-out bg-[black] md:flex-row md:justify-between md:p-4 md:h-[unset] md:top-0 md:gap-0 z-50 md:px-10`}>
            <div className='md:hidden'>
                <button className='text-4xl text-[white] absolute top-6 right-4' onClick={() => setOpenNav(!openNav)}>
                    <IoCloseSharp />
                </button>
            </div>
            <div className='w-[150px] gradient-heading text-3xl'>
                <Link to={'/'} onClick={() => setOpenNav(!openNav)}>
                    MaMUN
                </Link>
            </div>
            <ul className='flex flex-col items-center gap-4 px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px] text-[white] font-light'>
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/" onClick={() => setOpenNav(!openNav)}>Home</Link>
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/secretariat" onClick={() => setOpenNav(!openNav)}>Secretariat</Link>
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/committees" onClick={() => setOpenNav(!openNav)}>Committees</Link>
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/sponsors" onClick={() => setOpenNav(!openNav)}>Sponsors</Link> 
                </li> 
               
                {/* <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/gallery" onClick={() => setOpenNav(!openNav)}>Gallery</Link> 
                </li>  */}
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/itinerary" onClick={() => setOpenNav(!openNav)}>Itinerary</Link> 
                </li> 
                <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
                    <Link to="/contact" onClick={() => setOpenNav(!openNav)}>Contact</Link>
                </li>
            </ul>
            <div className='flex flex-col md:flex-row gap-7 items-center'>
                <div className='font-light py-2 px-8 rounded-lg text-[white] transition-all duration-300 ease-out hover:bg-[#161616] border-[1px] font-mamun-font-secondary'>
                    <Link to='/Register' onClick={() => setOpenNav(!openNav)}>
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;