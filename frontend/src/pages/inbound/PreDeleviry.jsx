import React from 'react'
import { BiRefresh } from "react-icons/bi";
import { useRef } from 'react';
import { getAuth } from '../../api/asn';
import {delivery} from '../../api/asn'
import { useState,useEffect } from 'react';
function PreDeleviry() {
    const ref = useRef();
    const [data, setData] = useState([]);
    const [g_data, getData] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        delivery(1);
        const getData = async () => {
          let response = await delivery();
          // console.log(data);
          setData(response);
          setLoad(true);
        };
        getData();
      }, []);
  return (
    <>
    <div className="w-full bg-white p-2 rounded-lg  flex justify-between items-center mt-3">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 ps-10 text-sm text-gray-900 rounded-lg w-[450px] bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search products, Codes..."
              required
            />
          </div>
        </form>

        <div className="flex gap-2">
          <button
            ref={ref}
            className="text-white bg-blue-700 hover:bg-blue-600 rounded-lg text-sm px-2 font-bold"
            onClick={() => {
              ref.current.children[0].classList.add("animate-spin", "spin");
              setLoad(false);
              const getData = async () => {
                try {
                  let response = await delivery();
                  // console.log(data);
                  console.log(response);
                  setData(response);
                  ref.current.children[0].classList.remove(
                    "animate-spin",
                    "spin"
                  );
                  setLoad(true);
                } catch (e) {
                  console.log(e);
                }
              };
              getData();
            }}
          >
            <BiRefresh size={25} />
          </button>
      
        </div>
    </div>
    <div className="overflow-x-auto bg-white mt-3 p-3 rounded-md h-[750px] ">
        {!load ? (
          <BiRefresh
            size={40}
            className="text-blue-700 font-bold animate-spin ml-[45%]"
          />
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="border-b-2">
                <th className="px-1 py-5  text-start  text-white">
                  <span className="bg-blue-600 p-2 text-white">ASN Code</span>
                </th>
                <th className="px-1 py-5 text-start">Goods Code</th>
                <th className="px-1 py-5 text-start">Goods Desc</th>
                <th className="px-1 py-5 text-start">ASN QTY</th>
                <th className="px-1 py-5 text-start">Total Weight(Unit:KG)</th>
                <th className="px-1 py-5 text-start">Total Volume(Unit:cubic Meters)</th>
                <th className="px-1 py-5 text-start">Supllier Name</th>
                <th className="px-1 py-5 text-start">Creater</th>
                <th className="px-1 py-5 text-start">Create Time</th>
                <th className="px-1 py-5 text-start">Update Time</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-2 text-gray-600 border-gray-200 cursor-pointer"
                >
                  <td className="px-1 py-5 text-start">{item.asn_code}</td>
                  <td className="px-1 py-5 text-start">{item.goods_code}</td>
                  <td className="px-1 py-5 text-start">
                    {item.goods_desc}
                  </td>
                  <td className="px-1 py-5 text-start">
                    {item.goods_qty}
                  </td>
                  <td className="px-1 py-5 text-start">
                    {item.goods_weight}
                  </td>
                  <td className="px-1 py-5 text-start">
                    {item.goods_volume}
                  </td>
                  <td className="px-1 py-5 text-start">{item.supplier}</td>
                  <td className="px-1 py-5 text-start">{item.creater}</td>
                  <td className="px-1 py-5 text-start">{item.create_time}</td>
                  <td className="px-1 py-5 text-start">{item.update_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
    </>
  )
}

export default PreDeleviry
