import React from 'react'

export default function mail() {
  return (
    <div className='bg-blue-500 w-full text-white px-5 py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>
                    We are here to help 
                </h1>
                <p>Receive email by us containing news and updates from the topic that you signed up for.</p>
            </div>

            <div className='my-4'>
                <div className=' w-full flex flex-col sm:flex-row justify-between items-center'>
                    <input className='w-full p-3 rounded-md text-black' type='email' placeholder='Enter your email'/>
                    <button className='bg-[#fd6a00] text-white w-[200px] ml-4 my-6 px-6 py-3 rounded-md '>Email me</button>                

                </div>

            </div>
        </div>
    </div>    
  );
}
