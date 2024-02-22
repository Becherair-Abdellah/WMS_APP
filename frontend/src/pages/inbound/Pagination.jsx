import React, { useEffect, useState } from 'react';
import { pagination } from '../../api/asn';
function Pagination() {
  const [_pagination,setPagination] = useState([1,2,3,4]);
  // console.log();
  const [_counter,setCounter] = useState(0);
  useEffect(async ()=>{
    
    try{
      const req = await pagination(1);
      setCounter(req.count)
    }catch (e){
      console.log(e);
    }
  },[]);
  return (
    <div className=''>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10  text-white  mr-2 rounded-s-lg bg-blue-700">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>





        <div className='flex justify-center items-center overflow-hidden overflow-x-visible'>
          {[...Array((Math.ceil(_counter/30)/2)).keys()].map((item)=>{
            return(
              <li onClick={()=>{
                pagination(item+1);
                
              }}>
                
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-e-0 border-gray-300  hover:bg-gray-100">
              <span>{item+1}</span>
            </a>
          </li>
            )
          })}
        </div>





          
          <li className='rotate-[180deg]' onClick={(e)=>{
            e.preventDefault();
            setPagination([5,6,7,8]);
          }}>
            <a href="#" className="flex items-center justify-center px-4 h-10  text-white  mr-2 rounded-s-lg bg-blue-700">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>
          {/* Other list items */}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;