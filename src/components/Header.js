import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
//import CashFlow from '../components/CashFlow';


export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-blue-600 p-4'>
        <div className='max-w[1240px] py-3 px-6 items-center flex justify-between mx-auto'>
            <div className='text-3xl pl-7 font-bold text-white'>
                RPA Business Consultancy
            </div>
            {
                toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

            }
            
            
            <ul className='hidden md:flex text-white gap-5'>
                <li className='p-4'><a href='/'>Home</a></li>
                <li className='p-4'><a href='/'>Cash Flow Calculator</a></li>
                <li className='p-4'><a href='/'>Plans</a></li>
                <li className='p-4'><a href='/'>About Us</a></li>
                <li className='p-4'>Mail</li>
            </ul>

            {/*For responsive menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#023047] top-[92px] left-[-100%] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-4'>Home</li>
                <li className='p-4'>Cash Flow Calculator</li>
                <li className='p-4'>Calculator</li>
                <li className='p-4'>About Us</li>
                <li className='p-4'>Contact Us</li>
            </ul>
        </div>
    </div>        
  )
}

