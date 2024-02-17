import React, { useEffect, useRef } from "react";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { TiDownload } from "react-icons/ti";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { TbPackages } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";
import { IoIosPrint } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { FaTruckLoading } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
// import Tools from "./Tools";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BiRefresh } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import ASN from "./ASN";
import { getAuth } from "../../api/asn";
// import { useRef } from "react";
function Inbound() {
  // const tools = useSelector((state)=>{console.log(state)});
  const [refresh,setRefresh] = useState(false);
  return (
    <div className="mt-16">
      <div className="w-full bg-white p-2 rounded-lg flex justify-between items-center ">
        <div className="w-full">
          <ul className="flex items-center gap-5 w-full">
            <NavLink onClick={async ()=>{
             const data = await getAuth();
             console.log(data);
            }} to={'/inbound/asn'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600   rounded-md text-white px-2 p-1 ">
              <IoDocumentText size={23} />
              <h1>ASN</h1>
            </NavLink>

            <NavLink to={'/inbound/predeliverystock'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <AiOutlineDeliveredProcedure size={23} />
              <h1>Pre Delivery</h1>
            </NavLink>

            <NavLink to={'/inbound/preloadstock'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <TiDownload size={23} />
              <h1>Pre load</h1>
            </NavLink>

            <NavLink to={'/inbound/presortstock'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <FaSortAmountUpAlt size={23} />
              <h1>Sorting</h1>
            </NavLink>

            <NavLink to={'/inbound/sortstock'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <FaSortAmountDown size={23} />
              <h1>Sorted</h1>
            </NavLink>

            <NavLink to={'/inbound/shortage'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <HiMiniArchiveBoxXMark size={23} />
              <h1>Shortage</h1>
            </NavLink>

            <NavLink to={'/inbound/more'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <TbPackages size={23} />
              <h1>More Qty</h1>
            </NavLink>

            <NavLink to={'/inbound/asnfinish'} className="flex justify-center flex-col items-center  cursor-pointer hover:text-white bg-pr_color-0 duration-200 w-full hover:bg-blue-600 rounded-md text-white px-2 p-1 ">
              <LiaClipboardListSolid size={23} />
              <h1>receiving list</h1>
            </NavLink>
          </ul>
        </div>
      
      </div>

      <Outlet/>
{/* <ASN/> */}
      
    </div>
  );
}

export default Inbound;
