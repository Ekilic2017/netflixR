import React from 'react'
import { baseImgURL } from '../contants';

const DetailDisplay = ({title,data}) => {
  return (
    <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2 ' >{title}</h2>
    <div className='flex gap-5'>
        {data?.map((item)=>
        item.logo_path?(
        <div key={item.id} className='bg-slate-200 py-1 px-2 rounded-md' >
            <img className='w-[100px] object-contain h-[40px]'
            src={baseImgURL+item.logo_path} alt="" />
        </div>
        ):(
            <span className='border py-1 px-2 rounded-md' key={item.id}>
{item.name}
            </span>
        )
     )} </div>
        </div>
  );
};

export default DetailDisplay