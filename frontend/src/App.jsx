
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Aside from './pages/Aside'
import './index.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import img from '../public/avatar.png'
function App() {
  // const [name,setName] = useState('brahim')
  const name  = localStorage.getItem("login_name")?localStorage.getItem("login_name"):'';
  return (
   <>
   <div className='w-screen ml-[250px] c '>
    <header className='py-2 px-6 z-[1] bg-white fixed left-0 wf shadow-sm flex justify-end items-center'>
      {/* <FaBars color='gray' size={22} className='cursor-pointer'/> */}
      <div className='flex items-center cursor-pointer hover:bg-gray-50 px-2 rounded-md'>
      <div className='flex items-center '>
          <img className='w-[45px] h-[45px]' src={img} alt=""/>
          </div>
          
        <h2 className='mr-4 font-semibold text-gray-500'>Hello,<span className='font-bold text-gray-700'>{name}</span> 
        </h2>
        <FaAngleDown color='gray' />
       

      </div>
      {/* <div>
      <button type="button" className="text-white bg-gradient-to-r from-[#1c3fc5ff] to-[#2a51e7ff]    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Signin</button>
      <button type="button" className="text-white bg-gradient-to-r from-[#1c3fc5ff] to-[#2a51e7ff]   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Register</button>
      </div> */}

    </header>
    <div className='p-6 bg-gray-100 relative'>
    <Outlet/>
    </div>
   </div>
   <Aside/>
   </>
  )
}

export default App
