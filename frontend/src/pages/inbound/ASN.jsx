import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { IoIosPrint } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { FaTruckLoading } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { BiRefresh } from "react-icons/bi";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { getAuth } from "../../api/asn";
import { change_operation_true } from "../../redux/reducers";
import { create_goods } from "../../api/asn";
import { GrArticle } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { searched_codes } from "../../api/asn";
import Pagination from "./Pagination";
import NewAsn from './NewAsn'
import Invoice from "./Invoice";
import { printASN } from "../../api/asn";
function ASN() {
  const tool = useSelector(({ set_tools: { operation } }) => operation);
  const dispatch = useDispatch();
  const ref = useRef();
  const [data, setData] = useState([]);
  const [g_data, getData] = useState({});
  const [load, setLoad] = useState(false);
  const [newForm,Set_new_form] = useState(true);
  const [showInvoice,set_showInvoice] = useState(false);
  useEffect(() => {
    const getData = async () => {
      let response = await getAuth();
      // setData(response);
      setLoad(true);
    };
    getData();
  }, []);
  // click functions item
  // const click_item = (item) => {
  //   // setTest(id);
  //   getData(item);
  // };
  return (
    <div className="relative">
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
                  let response = await getAuth();
                  setData(response);
                  ref.current.children[0].classList.remove(
                    "animate-spin",
                    "spin"
                  );
                  setLoad(true);
                } catch (e) {
                }
              };
              getData();
            }}
          >
            <BiRefresh size={25} />
          </button>
          <button
            onClick={() => {
              Set_new_form(false);
            }}
            className="text-white bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-4 py-2  "
          >
            Add New
          </button>
        </div>
      </div>

      {tool && (
        <div className="w-full p-3 mt-3  bg-white shadow-lg rounded-md">
          <div className="w-full ">
            <ul className="flex  gap-5 w-full">
              <li
                className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1"
                onClick={async () => {
                  console.log(g_data);
                  set_showInvoice(true);
                }}
              >
                <IoIosPrint size={23} />
                <h1>Print</h1>
              </li>

              <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
                <GiConfirmed size={23} />
                <h1>Confirme Deleviry</h1>
              </li>

              <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
                <FaTruckLoading size={23} />
                <h1>finish loadaing</h1>
              </li>

              <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
                <FaSortAmountDown size={23} />
                <h1>Confirme Sorted</h1>
              </li>

              <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-green-600 -0 duration-200 w-full hover:bg-green-500 rounded-md text-white px-2 p-1 ">
                <FaEdit size={23} />
                <h1>Edit</h1>
              </li>

              <li className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-red-600 duration-200 w-full hover:bg-red-500 rounded-md text-white px-2 p-1 ">
                <RiDeleteBinFill size={23} />
                <h1>Delete</h1>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* table contnet  */}
      { newForm ? <div className="overflow-x-auto bg-white mt-3 p-3 rounded-md h-[750px] w">
        {!load ? (
          <BiRefresh
            size={40}
            className="text-blue-700 font-bold animate-spin ml-[45%]"
          />
        ) : (
          <>
          <table className="table-auto w-full ">
            <thead>
              <tr className="border-b-2">
                <th className="px-1 py-5  text-start  text-white">
                  <span className="bg-blue-600 p-2 text-white">ASN Code</span>
                </th>
                <th className="px-1 py-5 text-start">ASN Status</th>
                <th className="px-1 py-5 text-start">Total Weight(kg)</th>
                <th className="px-1 py-5 text-start">Total Volume</th>
                <th className="px-1 py-5 text-start">Supplier Name</th>
                <th className="px-1 py-5 text-start">Creater</th>
                <th className="px-1 py-5 text-start">Create Time</th>
                <th className="px-1 py-5 text-start">Update Time</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-2 text-gray-600 border-gray-200 cursor-pointer hover:bg-gray-50"
                  onClick={(e) => {
                    for (const item of e.target.parentNode.parentNode
                      .children) {
                      item.classList.remove("click");
                    }
                    getData(item);
                    e.target.parentNode.classList.add("click");
                    dispatch(change_operation_true());
                  }}
                >
                  <td className="px-1 py-5 text-start">{item.asn_code}</td>
                  <td className="px-1 py-5 text-start">{item.asn_status}</td>
                  <td className="px-1 py-5 text-start">
                    {Math.floor(item.total_weight)}
                  </td>
                  <td className="px-1 py-5 text-start">
                    {Math.floor(item.total_volume)}
                  </td>
                  <td className="px-1 py-5 text-start">{item.supplier}</td>
                  <td className="px-1 py-5 text-start">{item.creater}</td>
                  <td className="px-1 py-5 text-start">{item.create_time}</td>
                  <td className="px-1 py-5 text-start">{item.update_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        )}
      </div>:
      <NewAsn fn={Set_new_form} state={newForm}/>}
      {showInvoice? <Invoice data_item={g_data} set_state={set_showInvoice}/>:<></>}
      {newForm?<div className="w-full flex justify-center items-center mt-3"><Pagination setData={setData}/></div>:''}
    </div>
  );
}

export default ASN;
