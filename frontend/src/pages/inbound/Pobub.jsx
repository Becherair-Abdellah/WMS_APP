import React from "react";
import { pre_load } from "../../api/asn";
import { pre_sort } from "../../api/asn";
import { sorted } from "../../api/asn";
function Pobub({data,set_pobub,nbr_function,data_option }) {
  return (
    <div className="fixed bg-white shadow-lg left-[70%] top-[50%] z-[111] translate-x-[-90%] translate-y-[-50%] p-6 rounded-md">
      <h1 className="text-gray-800 text-lg font-bold">
        Are you sure you want to confirm Deleviry
      </h1>
      <div className="flex justify-center gap-2 mt-5">
        <button className="flex items-center h-fit w-fit gap-2 bg-green-700 py-1 px-2 text-white cursor-pointer rounded-md" onClick={()=>{
          if(nbr_function ===1){
            pre_load(data);
          }
          if(nbr_function === 2){
            pre_sort(data);
          }
          if(nbr_function === 3){
            // sorted()
            console.log(data_option);
          }
            set_pobub(false);
        }}>
          Confirm
        </button>
        <button className="flex items-center h-fit w-fit gap-2 bg-red-600 py-1 px-2 text-white cursor-pointer rounded-md" onClick={()=>{
            set_pobub(false);
        }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Pobub;
