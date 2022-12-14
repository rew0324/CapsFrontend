import React from 'react'
import 'boxicons';
import {default as api} from '../hamper/apiSlice';


export default function Report() {
  const { data, isFetching , isSuccess, isError } = api.useGetTransactionQuery()
  const [deleteTransaction] = api.useDeleteTransactionMutation()
  let Transactions;
  //console.log(data)
  

  //delete transaction in the 'List' with id parameter
  const handlerClick = (e) => {
    if(!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id })
  }

  if(isFetching) {
    Transactions = <div>Fetching</div>;
  }else if(isSuccess) 
  {console.log({data})
    Transactions = data.map((v, i) => <Transaction key={i} category={v} handler={handlerClick} ></Transaction>);
  }else if(isError) {
    Transactions = <div>Connect MongoDb</div>
  }


  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-xl'>List of Transactions</h1>
        {Transactions}
    </div>
  )
}

function Transaction({ category, handler }) {
  if(!category) return null;
  console.log(category.color)
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight: `8px solid ${category.color ?? "#444444"}`}}>
          <button className='px-3'onClick={handler}><box-icon data-id={category._id ?? ''} color={category.color ?? "#444444"} size='15' name='trash'></box-icon></button> 
          <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}
