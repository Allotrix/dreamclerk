import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';

const MobileNavbar = ({openNav, setOpenNav}) => {
  return (
    <nav className='flex items-center justify-between p-4 md:hidden fixed w-full backdrop-blur-2xl z-50 text-[black] bg-[white]'>
        <div className='h-[50px] w-[150px] text-primary text-3xl'>
        dreamclerk
        </div>
        <div>
            <button className='text-4xl text-[black]' onClick={() => setOpenNav(!openNav)}>
                <AiOutlineBars />
            </button>
        </div>
    </nav>
  )
}

export default MobileNavbar;