import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AiOutlineBars,AiOutlineClose } from 'react-icons/ai';
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";

const Navbar = ({openNav, setOpenNav}) => {
    const [open, setopen] = useState();
    const toggleDrawer = (event) => () => {
      setopen(event);
    };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width:770px)");
    
        const handleMediaQueryChange = (event)=>{
            setShowDrawer(event.matches)
        }
    
        handleMediaQueryChange(mediaQuery)
    
        console.log(mediaQuery);
    
        mediaQuery.addEventListener('change',handleMediaQueryChange)
    
        return()=>mediaQuery.removeEventListener('change',handleMediaQueryChange)
      },[])
   

    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        // <header className={`flex flex-col items-center justify-center gap-16 ${isScrolled ? 'z-50 fixed w-full top-0 animate-slideindown':''}  ${openNav ? 'top-0': 'top-[-150%]'} left-0 w-full border-b-[1px] border-b-[white] bg-[white] font-bold tracking-wide transition-all duration-500 ease-in-out md:flex-row md:justify-between md:p-4  md:top-0 md:gap-0 z-50 md:px-10 h-[74px]`}>
        //     <div className='md:hidden'>
        //         <button className='text-4xl text-[white] absolute top-6 right-4' onClick={() => setOpenNav(!openNav)}>
        //             <IoCloseSharp />
        //         </button>
        //     </div>
        //     <div className='w-[200px] text-primary  text-3xl'>
        //         <Link to={'/'} onClick={() => setOpenNav(!openNav)}>
        //         dreamclerk
        //         </Link>
        //     </div>
        //     <ul className='flex flex-col items-center gap-4 px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px] text-[black] font-light'>
    
        //         {/* <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
        //             <Link to="/gallery" onClick={() => setOpenNav(!openNav)}>Gallery</Link> 
        //         </li>  */}
        //         <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
        //             <Link to="/itinerary" onClick={() => setOpenNav(!openNav)}>Documentation</Link> 
        //         </li> 
        //         <li className='hover:pb-2 transition-all duration-300 ease-out font-mamun-font-secondary'>
        //             <Link to="/contact" onClick={() => setOpenNav(!openNav)}>Contact</Link>
        //         </li>
        //     </ul>
        //     <div className='flex flex-col md:flex-row gap-7 items-center'>
        //         <div className='font-light py-2 px-8 rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
        //             <Link to='/Register' onClick={() => setOpenNav(!openNav)}>
        //                 Login
        //             </Link>
        //         </div>
        //         <div className='font-light py-2 px-8 rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
        //             <Link to='/Register' onClick={() => setOpenNav(!openNav)}>
        //                 Sign Up
        //             </Link>
        //         </div>
        //     </div>
        // </header>
        <header className={`shadow-lg text-[black] shadow-slate-100 h-20 px-10  ${isScrolled ? 'z-50 fixed w-full top-0 animate-slideindown  shadow-none bg-[white] border-b border-[gray]':''} flex flex-col justify-center`}>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 justify-between items-center ">
      <div className="h-15 w-32 items-center object-contain ">
          <Link to={'/'} className='font-bold text-primary text-xl'>
                dreamclerk
          </Link>
            
          </div>
          <ul className=" flex-row justify-center gap-x-10  xl:flex  hidden ">
        
            <li>
              <a
                href="#"
                className="font-regular text-gray-400 hover:text-blue-700 nav-font group"
              >
                Documentation
                <div className="h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold text-gray-400 hover:text-blue-700 nav-font group"
              >
                Contact us
                <div className="h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              </a>
            </li>
          </ul>
          <div className=' flex-row  gap-7 items-center justify-end  xl:flex  hidden '>
               <div className='font-light py-2 px-8 rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
                   <Link to='/Register' onClick={() => setOpenNav(!openNav)}>
                         Login
                     </Link>
                 </div>
                 <div className='font-light py-2 px-8 rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
                     <Link to='/Register' onClick={() => setOpenNav(!openNav)}>
                         Sign Up
                     </Link>
                 </div>
             </div>
              <div className=" flex  justify-end items-center gap-5 ">

            {
              showDrawer ? (
                  <>
                  <button onClick={toggleDrawer(true)}>
                  <AiOutlineBars className="text-[black] "  /></button>
                  <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                    <Box sx={{ width: screenWidth, height: "100%", position: "relative" }} className="py-5 bg-[white] ">
                      <button
                        className="absolute right-10 cursor-pointer"
                        onClick={toggleDrawer(false)}
                      >
                        <div style={{ color: "red" }} className='flex items-center gap-2'>
                          Close <AiOutlineClose />
                        </div>
                      </button>
                      <div className="w-full h-full flex flex-col justify-center items-center gap-y-20">
                      <div className="h-15 w-32 items-center object-contain ">
          <Link to={'/'} className='font-bold text-primary text-xl'>
                dreamclerk
          </Link>
            
          </div>
                      <ul className="flex flex-col gap-y-10  ">
                <li>
                  <a
                    href="#"
                    className="font-semibold text-gray-400 hover:text-blue-700"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-gray-400 hover:text-blue-700"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
              <div className=' flex-col flex w-full  gap-7 items-center justify-end  '>
               <div className='font-light py-2 px-10  rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
                   <Link to='/Register'>
                         Login
                     </Link>
                 </div>
                 <div className='font-light py-2 px-8 rounded-lg text-[black] transition-all duration-300 ease-out hover:bg-primary hover:text-[white] border-[1px] font-mamun-font-secondary'>
                     <Link to='/Register'>
                         Sign Up
                     </Link>
                 </div>
             </div>
                </div>
                    </Box>
                  </Drawer>
                
  
                </>
              ):(<></>)
            }
         
                
  
            
           
          </div>
  
        </div>
  
  
      </header>
        
    )
}

export default Navbar;