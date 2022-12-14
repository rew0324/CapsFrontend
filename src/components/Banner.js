import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-blue-500 w-full py-[200px]'>
        <div className='max-w-[1240px] mx-auto text-center text-white'>
            <div className='text-xl md:text-3xl p-2'>
                Right here for you!
            </div>
            <h1 className='font-bold text-4xl md:text-6xl sm:text-5xl md:py-6'>            
            RPA Business Consultancy   
            </h1>
            <div className='text-xl md:text-5xl sm:text-4xl font-bold py-3'>
                Tax Planning, 
                {/*use of "React typed" for typing effect*/} 
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-3 pl-2'
                strings={['Budgeting', 'Auditing', 'Cost Management']}
                typeSpeed={120}
                backSpeed={140}
                loop/>
            </div>
            <p className='md:text-2xl text-xl text-black'>Do you have more important things to do than worry about accounting? We're here beside you to share the burden and make things easier for you.</p>

            <button className='bg-[#fd6a00] rounded-full py-2 font-medium w-[200px] my-6 mx-auto'>Sign up free</button>
            
            



        </div>        
    </div>
  )
}
