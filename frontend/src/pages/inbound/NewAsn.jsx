import React, { useEffect, useRef, useState } from "react";
import newASNImage from "../../assets/billing.png"; // Adjust the path to your image file
import { create_goods, searched_codes } from "../../api/asn";
import { FaExclamationTriangle } from "react-icons/fa";
// product code
import { searched_Suppliers } from "../../api/asn";
function Produc_Code() {
  const [load_data, set_load_data] = useState(false);
  const [data, set_data] = useState([]);
  const [valu_input, set_value_input] = useState("");
  const ref = useRef();
  return (
    <div className="ADD_PRODUCT flex flex-wrap -mx-3 mb-19">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
        {load_data && (
          <div className="w-[90%]  h-[150px] bg-gray-100 absolute left-[5%] rounded-md top-[80px] z-[2] p-1 cursor-pointer overflow-hidden overflow-y-visible">
            {data.map((ele) => {
              return (
                <li
                  className="list-none p-2 text-gray-700 hover:bg-gray-200 rounded-md"
                  key={ele.id}
                  onClick={(e) => {
                    set_load_data(false);
                    // set_value_input(e.target.innerText)
                    ref.current.value = e.target.innerText;
                    // console.log(e.target)
                  }}
                >
                  {ele.goods_code}
                </li>
              );
            })}
          </div>
        )}

        <label
          htmlFor="grid-first-name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Product code
        </label>
        <input
          // value={valu_input}
          ref={ref}
          id="grid-first-name"
          type="text"
          placeholder="AS0023 ..."
          className="appearance-none block w-full bg-gray-100 text-gray-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          // value={'333'}
          onChange={async (e) => {
            e.target.value !== "" ? set_load_data(true) : set_load_data(false);
            const req = await searched_codes(e.target.value);
            set_data(req);
            //   data.map((item)=>{
            //     console.log(item.id)
            //   })
            //   console.log(data);
            //   set_data(req);
            //   req.map((ele)=>{
            //     console.log(ele.id);
            //   })
          }}
        />
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label
          htmlFor="grid-last-name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
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
  );
}

function MyForm({ fn, state }) {
  const ref_parent = useRef();
  const ref = useRef();
  const goods = [];
  const qty = [];
  const [show_warn, set_show_warn] = useState(false);
  const [data, set_my_data] = useState([]);
  const [load_data, set_load_data] = useState(false);
  const [components, setComponents] = useState([]);
  const handleCreateComponent = () => {
    setComponents([...components, <Produc_Code key={components.length} />]);
  };
  useEffect(() => {
    searched_Suppliers();
  }, []);
  return (
    <div className="w-full p-3 py-10 bg-white mt-3 rounded-md">
      {show_warn && (
        <p className="text-red-700 font-bold flex items-center absolute bottom-[7.8rem] left-[50%] -translate-x-[50%] gap-2">
          <FaExclamationTriangle color="text-red-700" /> some inputs is vide
        </p>
      )}
      <form className=" w-[70%] mx-auto">
        <div className="flex justify-center">
          <img src={newASNImage} alt="New ASN" className="w-[90px]" />
        </div>
        <div className="text-center mt-3 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">NEW ASN</h2>
        </div>
        <div ref={ref_parent} className="parent">
          <Produc_Code />
          {components.map((ele) => {
            console.log(ele);
            return <>{ele}</>;
          })}
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 relative">
          <div className="w-full px-3">
            {load_data && (
              <div className="w-[100%] w h-[150px] bg-gray-100 absolute rounded-md top-[80px] z-[2] p-1 cursor-pointer overflow-hidden overflow-y-visible">
                {data.map((ele) => {
                  return (
                    <li
                      className="list-none p-2 text-gray-700 hover:bg-gray-200 rounded-md"
                      key={ele.id}
                      onClick={(e) => {
                        set_load_data(false);
                        // set_value_input(e.target.innerText)
                        ref.current.value = e.target.innerText;
                        // console.log(e.target)
                      }}
                    >
                      {ele}
                    </li>
                  );
                })}
              </div>
            )}
            <label
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Supplier
            </label>
            <input
              ref={ref}
              onClick={async () => {
                const req = await searched_Suppliers();
                console.log(req);
                set_load_data(true);
                set_my_data(req);
              }}
              onChange={(e)=>{
               e.target.value == ''?set_load_data(false):set_load_data(true);
              }}
              id="grid-password"
              placeholder="Your Supplier ..."
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              id="grid-city"
              className="appearance-none block w-full bg-green-700 text-white font-bold border  rounded py-3 px-4 leading-tight focus:outline-none cursor-pointer"
              onClick={(e) => {
                fn(true);
                e.preventDefault();
                for (const item of ref_parent.current.children) {
                  // console.log(item.children[1].children[1].value);
                  item.children[0].children[1].value !== ""
                    ? goods.push(item.children[0].children[1].value)
                    : "";
                  item.children[1].children[1].value !== ""
                    ? qty.push(Number(item.children[1].children[1].value))
                    : "";
                  console.log(qty);
                }
                console.log(ref.current.value);
                goods.length > 0 && qty.length > 0
                  ? create_goods(goods, qty, ref.current.value)
                  : set_show_warn(true);
              }}
            >
              SEND
            </button>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                fn(true);
                console.log(state);
              }}
              id="grid-zip"
              className="appearance-none block w-full bg-red-600 text-white font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   cursor-pointer"
            >
              Cancel
            </button>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              onClick={(e) => {
                handleCreateComponent();
                e.preventDefault();
              }}
              id="grid-zip"
              className="appearance-none block w-full bg-blue-700 text-white font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none cursor-pointer"
            >
              Add product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
