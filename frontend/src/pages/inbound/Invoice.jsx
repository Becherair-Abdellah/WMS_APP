import React, { Component, useEffect, useRef, useState } from 'react'
import { FaPrint } from 'react-icons/fa'
import { printASN } from '../../api/asn'
import  QRCode  from 'qrcode';
import {useReactToPrint} from 'react-to-print'
function Invoice({data_item,set_state}) {
    // console.log()
    const [data,set_Data] = useState([]);
    const [data_supplier,set_Data_supplier] = useState({});
    const [data_wearhouses,set_data_wearhouses] = useState({});
    const item_printed = useRef();
    const [base64QRCode, setBase64QRCode] = useState('');
    useEffect(() => {
        const getData = async () => {
          let response = await printASN(data_item.id);
          // setData(response);
          const {asn_detail,supplier_detail,warehouse_detail} = response;
          console.log(asn_detail);
          set_Data(asn_detail);
          set_Data_supplier(supplier_detail);
          set_data_wearhouses(warehouse_detail);
          console.log(data);
        };
        getData();

        if (!data_item.bar_code) return;

      // Generate QR code
      const fn_qr = async()=>{
        try{
            let res_qr = await QRCode.toDataURL(data_item.bar_code);
            console.log(res_qr);
            setBase64QRCode(res_qr);
        }catch(e){
            console.log('error QR');
        }
      }


      fn_qr();
      }, []);
      const handlePrint = useReactToPrint({
        content: ()=> item_printed.current,
        documentTitle: 'ASN',
      });
  return (
    <div  class="bg-white  w-full h-full shadow-sh_custom   px-8 py-4 fixed z-[11] left-0 top-0 ">
<div ref={item_printed} className='px-8'>
<div class="flex items-center justify-between mb-1">
        <div class="flex items-center">
            <img class="h-8 w-8 mr-2" src="https://tailwindflex.com/public/images/logos/favicon-32x32.png"
                alt="Logo" />
            <div class="text-gray-700 font-semibold text-lg">WMSIT</div>
        </div>
        <div class="text-gray-700">
            <div class="font-bold text-xl mb-2">ASN</div>
            <div class="text-sm">Date: 01/05/2023</div>
            <div class="text-sm">Invoice #: INV12345</div>
        </div>
    </div>
    <div className='flex justify-between items-center h-[230px]'>
    <div class="border-b-2 border-gray-300 pb-8 mb-8 flex-1">
        <h2 class="text-2xl font-bold mb-4">Sender : </h2>

        <div class="text-gray-700 mb-2">{data_supplier.supplier_name}</div>
        <div class="text-gray-700 mb-2">{data_supplier.supplier_address}</div>
        <div class="text-gray-700 mb-2">{data_supplier.supplier_city}</div>
        <div class="text-gray-700">{data_supplier.supplier_contact}</div>
    </div>
    <div class="border-b-2 border-gray-300 pb-8 mb-8 flex-1">
        <h2 class="text-2xl font-bold mb-4">Reciver : </h2>
        <div class="text-gray-700 mb-2">{data_wearhouses.warehouse_name}</div>
        <div class="text-gray-700 mb-2">{data_wearhouses.warehouse_address}</div>
        <div class="text-gray-700 mb-2">{data_wearhouses.warehouse_city}</div>
        <div class="text-gray-700">{data_wearhouses.warehouse_contact}</div>
    </div>
    </div>
   <div className='h-[200px]  overflow-hidden overflow-y-visible w  mb-8'>
   <table  class="w-full text-left h-full">
        <thead>
            <tr>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Goods Code</th>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Total Qty</th>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Total Weight(unit:KG)</th>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Total Volume(Unit:Cubic Metres)</th>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Actual Arrive Qty</th>
                <th class="text-gray-700 text-sm font-bold uppercase py-2">Comments</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>{
                return(
                    <tr className='border-b'>
                <td class="py-4 text-gray-700">{item.asn_code}</td>
                <td class="py-4 text-gray-700">{item.goods_qty}</td>
                <td class="py-4 text-gray-700">{item.goods_weight}</td>
                <td class="py-4 text-gray-700">{item.goods_volume}</td>
                <td class="py-4 text-gray-700">{item.goods_actual_qty}</td>
            </tr>
                )
            })}
            

        </tbody>
    </table>
   </div>
    <div className='qr-code w-[80px] h-[80px] bg-red-900'>
            <img src={base64QRCode} alt="" />
        </div>
</div>  
    <div className='flex justify-end gap-2'>
       <button className='flex items-center h-fit w-fit gap-2 bg-blue-600 py-1 px-2 text-white cursor-pointer rounded-md' onClick={()=>{
       handlePrint();
        }}>print <FaPrint/></button>
         <button className='flex items-center h-fit w-fit gap-2 bg-red-600 py-1 px-2 text-white cursor-pointer rounded-md' onClick={()=>{
            set_state(false);
        }}>Cancel</button>
    </div>
        
    
</div>
  )
}

export default Invoice
