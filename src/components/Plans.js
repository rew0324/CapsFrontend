import React from 'react'
import person from '../assets/person.PNG';


export default function Plans() {
  return (
    <div className='bg-white w-full py-32 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>

            {/*First Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Tax Consulting</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Corporate & Commercial</p>
                    <p className='py-2 border-b mx-8'>Individual & Family Business</p>
                    <p className='py-2 border-b mx-8'>Tax Due Diligence</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
            </div>


            {/*Second Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Business Advisory</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Business & Ownership Structures</p>
                    <p className='py-2 border-b mx-8'>Budgeting & Cashflow Forecasting</p>
                    <p className='py-2 border-b mx-8'>Credit & Debt Management</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
            </div>


            {/*Third Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Audit & Assurance</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Internal Audits</p>
                    <p className='py-2 border-b mx-8'>Auditing Financial Statement</p>
                    <p className='py-2 border-b mx-8'>Expert advice</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
            </div>                       
        </div>
    </div>
  )
}

//[#d8f9ff]
