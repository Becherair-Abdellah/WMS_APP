import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { TiDownload } from "react-icons/ti";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { TbPackages } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";
function Inbound() {
  return (
    <div className="mt-7">
      <div className="w-full bg-white p-2 rounded-lg flex justify-between items-center ">
        <div className="w-full">
          <ul className="flex items-center gap-5 w-full">
            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600   rounded-md text-white px-2 p-1 ">
              <IoDocumentText size={23} />
              <h1>ASN</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <AiOutlineDeliveredProcedure size={23} />
              <h1>Pre Delivery</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <TiDownload size={23} />
              <h1>Pre load</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <FaSortAmountUpAlt size={23} />
              <h1>Sorting</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <FaSortAmountDown size={23} />
              <h1>Sorted</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <HiMiniArchiveBoxXMark size={23} />
              <h1>Shortage</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <TbPackages size={23} />
              <h1>More Qty</h1>
            </li>

            <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <LiaClipboardListSolid size={23} />
              <h1>receiving list</h1>
            </li>
          </ul>
        </div>
      
      </div>
      <div className="w-full bg-white p-2 rounded-lg  flex justify-between items-center mt-3">

      <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block p-4 ps-10 text-sm text-gray-900 rounded-lg w-[450px] bg-gray-100 focus:ring-blue-500 focus:border-blue-500" placeholder="Search products, Codes..." required />
            </div>
      </form>

      <div>
      <button className="text-white bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-4 py-2">Add New</button>
      </div>
      </div>
      <div className="w-full bg-white p-2 rounded-lg mt-3 shadow-md">
        <ul>
            <li className="grid grid-cols-custom py-3 border-b-2">
                <span className="w-fit bg-blue-600 text-white">ASN Code</span>
                <span>ASN Status</span>
                <span className="text-center">Total Weight(kg)</span>
                <span className="text-center">Total Volume</span>
                <span className="text-center">Supplier Name</span>
                <span className="text-center">Creater</span>
                <span className="text-center">Create Time</span>
                <span className="text-center">Update Time</span>
            </li>

           <div className="w h-[400px] overflow-hidden overflow-y-visible" >
           <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>


            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

            <li className="grid grid-cols-custom bg-gray-100 py-3 mt-2 px-1 rounded-lg">
                <span>ASN2024021211</span>
                <span>Pre Delivery</span>
                <span className="text-center">2202.2280</span>
                <span className="text-center">60.9768</span>
                <span className="text-center">Karim</span>
                <span className="text-center">bachir</span>
                <span className="text-center">2024-02-12 16:36:31</span>
                <span className="text-center">2024-02-12 16:36:31</span>
            </li>

           </div>

        </ul>
      </div>
    </div>
  );
}

export default Inbound;
