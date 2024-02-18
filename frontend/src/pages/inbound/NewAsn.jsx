import React, { useState } from 'react';
import newASNImage from '../../assets/billing.png'; // Adjust the path to your image file
// product code 

function Produc_Code(){
    const [load_data,set_load_data] = useState(false)
    return(
        <div className="flex flex-wrap -mx-3 mb-19">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
            {load_data && <div className='w-[90%]  h-[150px] bg-red-900 absolute left-[5%] rounded-md top-[80px] z-[2]' ></div>}

                    <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Product code 
                    </label>
                    <input
                        id="grid-first-name"
                        type="text"
                        placeholder="AS0023 ..."
                        className="appearance-none block w-full bg-gray-100 text-gray-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                        onChange={()=>{set_load_data(true)}}
                    />

                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Qty
                    </label>
                    <input
                        id="grid-last-name"
                        type="text"
                        placeholder="how much ?"
                        className="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                    />
                </div>
                
            </div>
    )
}

function MyForm({fn,state}) {
    return (
        <div className='w-full p-3 py-10 bg-white mt-3 rounded-md'>
            <form className=" w-[70%] mx-auto">
            <div className="flex justify-center">
                <img src={newASNImage} alt="New ASN" className="w-[90px]" />
            </div>
            <div className="text-center mt-3 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800">NEW ASN</h2>
            </div>
            <Produc_Code/>
            <Produc_Code/>
            <Produc_Code/>
            <Produc_Code/>
            
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Supplier
                    </label>
                    <input
                        id="grid-password"
                        type="password"
                        placeholder="Your Supplier ..."
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    
                    <input
                        id="grid-city"
                        type="submit"
                        value='SEND'
                        className="appearance-none block w-full bg-green-700 text-white font-bold border  rounded py-3 px-4 leading-tight focus:outline-none cursor-pointer"
                    />
                </div>
               
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button
                     onClick={(e)=>{
                         e.preventDefault();
                        fn(true);
                        console.log(state);
                    }
                        }
                        id="grid-zip"
                        className="appearance-none block w-full bg-red-600 text-white font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   cursor-pointer"
                    >Cancel</button>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <input
                        id="grid-zip"
                        type="submit"
                        value='add product'
                        className="appearance-none block w-full bg-blue-700 text-white font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                    />
                </div>
            </div>
        </form>
        </div>
    );
}

export default MyForm;
