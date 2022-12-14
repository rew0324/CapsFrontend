import React from 'react'
import {default as api} from '../hamper/apiSlice';
import { getLabels } from '../totaliser/totaliser';

export default function Labels() {
  //"useQuery" hook to get all the properties

  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
  let Transactions;
  
  //console.log(data)

  if(isFetching) {
    Transactions = <div>I am Fetching</div>;
   
  }else if(isSuccess) {
    //console.log(getLabels(data, 'type'))

    //Transactions = data.map((v,i)=> <LabelComponent key={i} data={v}></LabelComponent>)
    //instead of 'data' in above line, now passing 'getLabels' function from Totaliser to get percent 
    
    Transactions = getLabels(data, 'type').map((v,i)=> <LabelComponent key={i} data={v}></LabelComponent>)



  }else if(isError) {
    Transactions = <div>Connect to the Server</div>
  }
  
  return (
    <>
      {Transactions}
    </>
  )
}


function LabelComponent({data}) {
  if (!data) return <></>;
  return (
    <div className='labels flex justify-between'>
      <div className='flex gap-2'>
        <div className='w-2 h-2 rounded py-3' style={{background: data.color ??'#444444'}} ></div>
        <h3 className='text-md'>{data.type ?? ''}</h3>
      </div>
      <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
    </div>
  )
}