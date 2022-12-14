import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import Labels from './Labels';
import {default as api} from '../hamper/apiSlice';
import { chartData, getTotal } from '../totaliser/totaliser';

Chart.register(ArcElement);
  

export default function Graph() {
  
  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
  let graphData;
  
    if(isFetching) {
      graphData = <div>I am Fetching</div>;
   
  }else if(isSuccess) {
    
    graphData = <Doughnut {...chartData(data)}></Doughnut>;   
  

  }else if(isError) {
    graphData = <div>Connect to the Server</div>
  }

  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='diagram relative'>
            {graphData}
                <h3 className='mb-4 font-bold title'>Net Cash
                  <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
                </h3>
            </div>
            <div className='flex flex-col py-10 gap-4'>
              <Labels></Labels>

            </div>
        </div>
    </div>
  )
}
