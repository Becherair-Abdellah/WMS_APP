import axios from 'axios'
const token = localStorage.getItem('openid');
const config = {
    headers:{
        'token': token,
        'operator': 1
    }
}
// GET LISTS OF GOODS
export const getAuth = async ()=>{
  if(localStorage.getItem('auth')){
    try{
        let response =  await axios.get('http://localhost:8008/asn/list/',config);
    const {data:{results}} = response;
    return results;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// CREATE NEW LISTS OF GOODS 
const newForm = {
  asn_code: '',
  supplier: '',
  goods_code: [],
  goods_qty: [],
  creater: ''
}
// create new ASN
export const create_goods = async (goods,qty,supplier)=>{
  if(localStorage.getItem('auth')){
    try{
      let req = await axios.post('http://localhost:8008/asn/list/',{creater: 'bachir'},config)
      newForm.asn_code = req.data.asn_code;
      newForm.creater = req.data.creater
      newForm.goods_code = goods;
      newForm.goods_qty = qty;
      newForm.supplier = supplier
        let response =  await axios.post('http://localhost:8008/asn/detail/',newForm,config);
    const {data:{results}} = response;
    return results;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// search of Goods Code 
const prams = {

}
export const searched_codes = async (word)=>{
  console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/goods/?goods_code__icontains=${word}`,config);
    const {data:{results}} = req;
    return results;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// search of Suppliers 
export const searched_Suppliers = async ()=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/asn/list/`,config);
    const {data:{supplier_list}} = req;
    return supplier_list;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// pre delivery
export const delivery = async (page)=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/asn/detail/?asn_status=2&page=${1}`,config);
    const {data:{results}} = req;
    return results;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// get pagination  
export const pagination = async (page)=>{
    // console.log(word);
    if(localStorage.getItem('auth')){
      try{
      let req = await axios.get(`http://127.0.0.1:8008/asn/list/?page=${page}`,config);
      const {data} = req;
      return data;
      }catch(e){
          console.log(e)
      }
    }
    else{
      console.log('error');
    }
}
// print ASN 
export const printASN = async (id)=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/asn/viewprint/${id}`,config);
    const {data} = req;
    console.log(data)
    return data;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// preload confirm 
export const pre_load = async (id)=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.post(`http://127.0.0.1:8008/asn/preload/${id}/`,{},config);
    const {data} = req;
    console.log(data)
    // return data;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// pre loaded ASN
export const pre_loaded_data = async (nbr)=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/asn/detail/?asn_status=2&page=${1}`,config);
    const {data:{results}} = req;
    console.log(results);
    return results;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// pre sort confirm 
export const pre_sort = async (id)=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.post(`	http://127.0.0.1:8008/asn/presort/${id}/`,{},config);
    const {data} = req;
    console.log(data);
    // return data;
    }catch(e){
        console.log(e)
    }
  }
  else{
    console.log('error');
  }
}
// create new ASN
const sorted_list =  {
  asn_code: '',
  supplier: '',
  goodsData: [],
  creater: ''
}
export const sorted = async (data,goods)=>{
  sorted_list.asn_code = data.asn_code;
  sorted_list.creater = data.creater;
  sorted_list.goodsData = goods;
  sorted_list.supplier = supplier
  if(localStorage.getItem('auth')){
    try{
      let req = await axios.post(`http://127.0.0.1:8008/asn/sorted/${324}/`,sorted_list,config)
    // const {data:{results}} = response;
    // return results;
    console.log(req);
    }
    catch(e){
        console.log(e);
    }
  }
  else{
    console.log('error');
  }
}