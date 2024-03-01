import React, { useEffect, useRef, useState } from "react";
import newASNImage from "../../assets/billing.png"; // Adjust the path to your image file
import { create_goods, searched_codes } from "../../api/asn";
import { FaExclamationTriangle } from "react-icons/fa";
// product code
import { searched_Suppliers } from "../../api/asn";
import { sorted } from "../../api/asn";
function Sorted_Asn({data}) {
  const ref_parent = useRef();
  const ref = useRef();
  const new_goods = [];
  const goods = [1,2];
  return (
    <div className="w-full p-3 py-10 bg-white mt-3 rounded-md">
      <form className=" w-[70%] mx-auto">
        <div className="flex justify-center">
          <img src={newASNImage} alt="New ASN" className="w-[90px]" />
        </div>
        <div className="text-center mt-3 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">SORTED ASN</h2>
        </div>
<div ref={ref_parent} className="parent">
{goods.map((ele)=>{
    return(
        <div className="flex gap-3">
        <div className="w-full">
          <label
            htmlFor="grid-password"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Supplier
          </label>
          <input
            id="grid-password"
            placeholder="Qty"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="grid-password"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            GOODS CODE
          </label>
          <div
            id="grid-password"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
          >
            System
          </div>
        </div>
        
      </div>
    )
})}
</div>


        <div className="flex flex-wrap -mx-3 mb-6 relative">
          <div className="w-full px-3">
            <label
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Supplier
            </label>
            <div
              id="grid-password"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            >
              s
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              id="grid-city"
              className="appearance-none block w-full bg-green-700 text-white font-bold border  rounded py-3 px-4 leading-tight focus:outline-none cursor-pointer"
              onClick={(e)=>{
                e.preventDefault();
                console.log(ref_parent.current.children);
                for (const item of ref_parent.current.children) {
                    console.log(item.children[1].children[1].value);
                    item.children[0].children[1].value !== ""
                      ? new_goods.push(item.children[0].children[1].value)
                      : "";
                  }
                  console.log(new_goods);
                  sorted(data,new_goods)
              }}
            >
              CONFIRM
            </button>
          </div>

          <div className="w-full md:w-1/3  mb-6 md:mb-0">
            <button
              id="grid-zip"
              className="appearance-none block w-full bg-red-600 text-white font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Sorted_Asn;
