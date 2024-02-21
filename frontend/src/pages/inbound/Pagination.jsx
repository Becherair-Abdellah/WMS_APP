import React from 'react';

function Pagination() {
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





          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-e-0 border-gray-300  hover:bg-gray-100">
              <span>1</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-gray-300  hover:bg-gray-100">
              <span>2</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-gray-300  hover:bg-gray-100">
              <span>3</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-blue-600 bg-gray-100 border border-gray-300  hover:bg-gray-100">
              <span>4</span>
            </a>
          </li>





          
          <li className='rotate-[180deg]'>
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