import React, { useContext } from 'react';
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PaymentContext } from '../contexts/PaymentContext';

const Checkout = () => {

  const { checkoutForm, setCheckoutForm } = useContext(PaymentContext);

  return (
    <main className='text-[white] font-astrapi-billing cursor-default'>
      <section className='relative md:max-w-[75%] flex flex-col mx-auto md:flex-row justify-between items-start gap-14 md:gap-[unset]'>
        <div className='flex md:justify-end justify-center pt-20 flex-col gap-5 px-8 z-20'>
          <h2 className='text-2xl font-semibold'>
            Billing Information
          </h2>
          <form className='flex flex-col gap-7 md:w-[400px]'>
            <label htmlFor='email' className='flex flex-col gap-1'>
                <p className='text-sm text-[#ffffff] font-extralight'>
                    Email ID
                </p>
                <input type="email" name='email' value={checkoutForm.email} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[transparent] border border-[#ffffff] text-md' required />
            </label>
            <label htmlFor='phoneNo' className='flex flex-col gap-1'>
                <p className='text-sm text-[#ffffff] font-extralight'>
                    Phone Number
                </p>
                <input type="tel" name='phoneNo' value={checkoutForm.phoneNo} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[transparent] border border-[#ffffff] text-md' required />
            </label>
            <aside className='flex flex-col gap-1'>
                <p className='text-sm text-[#ffffff] font-extralight'>
                    Billing Address
                </p>
                <div className='flex flex-col'>
                    <input type="text" placeholder='Full Name' name='fullName' value={checkoutForm.fullName} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-t-md w-full bg-[transparent] border border-[#ffffff]' required />
                    <input type="text" placeholder='Country' name='country' value={checkoutForm.country} disabled className='px-2 cursor-not-allowed py-[7px] uppercase outline-none w-full bg-[transparent] border border-[#ffffff]' />
                    <input type="text" placeholder='Address Line 1' value={checkoutForm.addressLine1} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} name='addressLine1' className='px-2 py-[7px] w-full outline-none bg-[transparent] border border-[#ffffff]' required />
                    <input type="text" placeholder='Address Line 2' name='addressLine2' value={checkoutForm.addressLine2} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-full outline-none bg-[transparent] border border-[#ffffff]' required />
                    <div>
                        <input type="text" placeholder='City' name='city' value={checkoutForm.city} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[transparent] outline-none border border-[#ffffff]' required />
                        <input type='text' placeholder='PIN' name='pinCode' value={checkoutForm.pinCode} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[transparent] outline-none border border-[#ffffff]' required />
                    </div> 
                    <input type="text" placeholder='State' name='state' value={checkoutForm.state} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] rounded-b-md w-full outline-none bg-[transparent] border border-[#ffffff]' required />
                </div>
            </aside>
          </form>
        </div>
        <div className='flex flex-col gap-1 relative items-center md:pt-20 px-8'>
          <div className='h-32 w-32 bg-mamun-green absolute rounded-full md:left-[2rem] z-10 blur-[50px] md:block left-0 top-5 md:top-20'></div>
          <h5 className='text-sm font-bold self-end'>
            Powered By <span className='text-[#FF4F00]'>Astrapi Money</span>
          </h5>
          <div className='bg-[#33363F] px-10 py-14 rounded-lg w-full md:w-[400px] flex flex-col z-20'>
            <p className='text-[1rem]'>
              Pay Allotrix
            </p>
            <h5 className='text-[1.7rem] font-bold'>
              ₹2,090.00
            </h5>
            <aside className='flex flex-col gap-2 font-allotrix-font mt-7 mb-10'>
              <div className='flex justify-between text-[#D9D9D9] text-[12px] px-2'>
                <h3>
                  Delegate Fee
                </h3>
                <p>
                  ₹2,050.00
                </p>
              </div>
              <hr className='border-[#ffffff]' />
              <div className='flex text-[#ffffff] justify-between text-sm px-2 font-semibold'>
                <h3>
                  Subtotal
                </h3>
                <p>
                  ₹2050.00
                </p>
              </div>
              <div className='flex justify-between text-[#D9D9D9] text-[12px] px-2'>
                <h3>
                  Platform Fee
                </h3>
                <p>
                  ₹40
                </p>
              </div>
              <div className='flex justify-between text-[#D9D9D9] text-[12px] px-2'>
                <h3>
                  CGST
                </h3>
                <p>
                  ₹0
                </p>
              </div>
              <div className='flex justify-between text-[#D9D9D9] text-[12px] px-2'>
                <h3>
                  Convenience Fee
                </h3>
                <p>
                  ₹0
                </p>
              </div>
              <hr className='border-[#ffffff]' />
              <div className='flex text-[#ffffff] justify-between text-sm px-2 font-semibold'>
                <h3>
                  Total
                </h3>
                <p>
                  ₹2,090.00
                </p>
              </div>
            </aside>
            <button className='text-[black] px-16 py-2 bg-mamun-green rounded-xl self-center'>
              Check out
            </button>
          </div>
          <aside className='w-full flex justify-center text-[12px] mt-7'>
            <a href="/" className='md:pr-7 pr-4 hover:underline'>
              Privacy Policy
            </a>
            <a href="https://www.allotrix.com/getallotrix/download" target='blank' className='md:px-7 px-4 border-x border-[white] hover:underline'>
              Get Allotrix
            </a>
            <a href="https://astrapimoney.com/" target='blank' className='md:pl-7 pl-4 hover:underline'>
              Get Astrapi Money
            </a>
          </aside>
          <article className='text-[#414141] text-[12px] md:w-[360px] my-2 text-justify'>
            Note: Astrapi Money belongs to the same domain as Allotrix. Allotrix uses Astrapi Money's plugin to verify payments. Review Astrapi Money's Privacy Policy | Terms and conditions to know more.
          </article>
        </div>
      </section>
      <section className='mt-14 w-full bg-[#232323] py-10 flex flex-col gap-5 justify-center items-center'>
        <div className='flex items-center gap-7 md:gap-14'>
          <a href='/' className='rounded-full border border-mamun-green p-2 text-2xl md:text-3xl'>
            <FaLinkedin />
          </a>
          <a href='/' className='rounded-full border border-mamun-green p-2 text-2xl md:text-3xl'>
            <RiInstagramFill />
          </a>
          <a href='/' className='rounded-full border border-mamun-green p-2 text-2xl md:text-3xl'>
            <FaYoutube />
          </a>
          <a href='/' className='rounded-full border border-mamun-green p-2 text-2xl md:text-3xl'>
            <FaSquareXTwitter />
          </a>
        </div>
        <aside className='flex items-center gap-10'>
          <img className='w-[100px] md:w-[unset]' src="/allotrix.png" alt="logo" />
          <h2 className='text-4xl'>
            X
          </h2>
          <img className='w-[100px] md:w-[unset]' src="/MAMUN.png" alt="logo" />
        </aside>
        <article className='text-[#969696] text-sm md:text-md text-center'>
          © 2024 One World Foundation, in partnership with Allotrix
        </article>
      </section>
    </main>
  )
}

export default Checkout;
