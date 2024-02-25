import React, { useEffect, useState } from 'react';
import { pagination } from '../../api/asn';
function Pagination({setData}) {
//   const [_pagination,setPagination] = useState([1,2,3,4]);
// console.log();
  //  const array = [1,2,3,4,5,6,7,8,9,10,11];
  //  console.log(array.slice(array.length/2));
  //  console.log(Math.floor(array.length/2));
  const [pages,setPages] = useState([]);
  const [div_pages,set_div_pages] = useState([]);
  const [_counter,setCounter] = useState(0);
  const get_Count = async ()=>{
    try{
        const req = await pagination(1);
        console.log("------------------",req);
        setData(req.results);
        setCounter(req.count);
        setPages([...Array((Math.ceil(req.count/30))).keys()]);
        set_div_pages([...Array((Math.ceil(req.count/30))/2).keys()])
        
      }catch (e){
        console.log(e);
      }
}
  useEffect(()=>{
    get_Count();
  
  },[]);

  return (
    <div className=''>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li onClick={(e)=>{
            e.preventDefault();
          }}>
            <a href="#" className="flex items-center justify-center px-4 h-10  text-white  mr-2 rounded-s-lg bg-blue-200 pointer-events-none ">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>

        <div className='flex justify-center items-center overflow-hidden overflow-x-visible'>
          
            {pages.map((item)=>{
              return(
          <li onClick={async (e)=>{
                e.preventDefault();
                try{
                    const req = await pagination(item+1);
                    setData(req.results);
                    setCounter(req.count);
                  }catch (e){
                    console.log(e);
                  }
                
              }}>
                
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-e-0 border-gray-300 hover:bg-blue-600 hover:text-white  ">
              <span>{item+1}</span>
            </a>
          </li>
              )
            })}
              
            
        
        </div>

          <li className='rotate-[180deg]' onClick={(e)=>{
            e.preventDefault();
            pagination(1);
            set_div_pages(pages.slice(pages.length/2));
          }}>
            <a href="#" className="flex items-center justify-center px-4 h-10  text-white  mr-2 rounded-s-lg bg-blue-200 pointer-events-none">
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