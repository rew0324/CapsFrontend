import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-blue-500 w-full text-white'>
        <div className='max-w-[1240px] mx-auto py-12 px-2 grid lg:grid-cols-3 gap-8 text-white'>
            <div>
                <h1 className='w-full text-3xl font-bold'>We are here</h1>

                <p className='py-4'>We will work with you to reach your business goal, whether you want to expand your firm, or keep up your best work. We handle all of your accounting needs.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-5'>
                <div>
                    <h6 className='font-medium'>Services</h6>
                    <ul>
                        <li className='py-2 text-sm mt-2'>Business Advisory</li> 
                        <li className='py-2 text-sm'>Tax Consulting</li>
                        <li className='py-2 text-sm'>Audit & Assurance</li>
                        <li className='py-2 text-sm'>Restructuring</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium'>Useful Links</h6>
                    <ul>
                        <li className='py-2 text-sm mt-2'>Home</li> 
                        <li className='py-2 text-sm'>Partners</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Contact Us</li>
                    </ul>
                </div>


                <div>
                    <h6 className='font-medium'>Find Us</h6>
                    <ul>
                        <li className='py-2 text-sm mt-2'>Christchurch</li> 
                        <li className='py-2 text-sm'>Queenstown</li>
                        <li className='py-2 text-sm'>Ashburton</li>
                        <li className='py-2 text-sm'>Timaru</li>
                    </ul>
                </div>


                <div>
                    <h6 className='font-medium'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm mt-2'>Terms & Conditions</li> 
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Claim</li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
    
  )
}


