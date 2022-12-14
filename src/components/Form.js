import React from 'react';
import { useForm } from 'react-hook-form';
import Report from '../componentCashFlow/Report';
import {default as api} from '../hamper/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount') 
    }
    
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Cash Flow Activities</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className='input-group'>
                    <input type ='text' {...register('name')} placeholder='Enter Activity here...' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value='Revenue' defaultValue>Revenue</option>
                    <option value='ROI'>Return on Investment</option>
                    <option value='Capital Gain'>Capital Gain</option>
                    <option value='Expense'>Business Expense</option>         
                </select>
                <div className='input-group'>
                    <input type ='text' {...register('amount')} placeholder='Enter Amount here...' className='form-input' />
                </div>
                <div className='.submit-btn'>
                    <button className='border py-2 text-white bg-blue-600 w-full'>Enter Transaction</button>
                </div>  
            </div>
        </form>
        <Report></Report>
        
    </div>
  )
}
