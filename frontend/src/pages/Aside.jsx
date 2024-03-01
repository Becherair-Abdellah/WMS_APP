import React from 'react'
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbPackageExport } from "react-icons/tb";
import { TbPackageImport } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Aside() {
  return (
    // <aside className='w-[250px] fixed left-0 top-0 h-screen '>

    // </aside>
    <div className="w-64 z-[0] w fixed top-0 left-0 h-screen overflow-y-auto bg-gradient-to-r from-[#1c3fc5ff] to-[#2a51e7ff] p-3">

      <div className='flex items-center  justify-between'>
        <h1 className='text-white font-bold text-xl py-1'>WMSystem</h1>
        <FaBars size={23} color='white' className='cursor-pointer' />
      </div>

    <div className="mt-8">
      <ul className="flex flex-col space-y-2">
      <li className="cursor-pointer py-2 px-2 rounded-sm flex items-center gap-3 text-white hover:bg-[#ffffff17]">
            <MdDashboard size={20}/>
            <p>dashboard</p>
          </li>
          <Link to={'/inbound/asn'} className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <TbPackageExport size={20}/>
            <p>Inbound</p>
          </Link>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <TbPackageImport size={20}/>
            <p> Outbound</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <MdInventory  size={20}/>
            <p> Inventory</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <FaMoneyBillTrendUp  size={20}/>
            <p> Finance</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <TbPackages  size={20}/>
            <p>Goodslist</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <IoMdInformationCircle  size={20}/>
            <p>Info</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <IoMdSettings  size={20}/>
            <p>Warehouse</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <HiUsers   size={20}/>
            <p>Staff</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <FaTruck size={20}/>
            <p>Driver</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <FaUpload size={20}/>
            <p>Upload Center</p>
          </li>
          <li className="cursor-pointer py-2 px-2 flex items-center gap-3 text-white rounded-sm  hover:bg-[#ffffff17]">
            <FaDownload size={20}/>
            <p>Download Center</p>
          </li>
        
      </ul>
    </div>
  </div>
  )
}

export default Aside
