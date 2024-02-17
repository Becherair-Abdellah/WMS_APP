import React, { useEffect, useRef, useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { TiDownload } from "react-icons/ti";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { TbPackages } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosPrint } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { FaTruckLoading } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch,useSelector } from "react-redux";
import { change_operation_true,} from "../../redux/reducers";
// import { useRef } from "react";
function Item({item,fn_click}) {
  // const [tools, setTools] = useState(false);
  const dispatch = useDispatch();
  const tool = useSelector(({set_tools:{operation}})=>operation );
  const ref_do = useRef();
  return (
    <>
      <li 
        ref={ref_do}
        className="target grid grid-cols-custom cursor-pointer text-gray-700  py-5  px-1 hover:bg-gray-50 duration-150 border-b-2 relative"
        onClick={() => {
          fn_click(item);
          // document.querySelectorAll('.target').forEach(()=>{})
          document.querySelectorAll('.target').forEach((ele)=>{
            ele.classList.remove("click");
            ele.classList.add("hover:bg-gray-50");
          // dispatch(change_operation_false());
          });
          ref_do.current.classList.toggle("click");
          ref_do.current.classList.toggle("hover:bg-gray-50");
          dispatch(change_operation_true());
          // dispatch(set_id())
        }}
      >
        <span>{item.asn_code}</span>
        <span>{item.asn_status}</span>
        <span className="text-center">{Math.floor(item.total_weight)}</span>
        <span className="text-center">{Math.floor(item.total_volume)}</span>
        <span className="text-center">{item.supplier}</span>
        <span className="text-center">{item.creater}</span>
        <span className="text-center">{item.create_time}</span>
        <span className="text-center">{item.update_time}</span>
      </li>
    </>
  );
}

export default Item;
