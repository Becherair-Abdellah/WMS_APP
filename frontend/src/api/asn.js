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
        console.log(response);
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
      console.log(supplier);
      newForm.supplier = supplier
        let response =  await axios.post('http://localhost:8008/asn/detail/',newForm,config);
    const {data:{results}} = response;
    console.log(response);
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
// search of Suppliers 
export const searched_Suppliers = async ()=>{
  // console.log(word);
  if(localStorage.getItem('auth')){
    try{
    let req = await axios.get(`http://127.0.0.1:8008/asn/list/`,config);
    const {data:{supplier_list}} = req;
    console.log(supplier_list);
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
// get pagination  
export const pagination = async (page)=>{
    // console.log(word);
    if(localStorage.getItem('auth')){
      try{
      let req = await axios.get(`http://127.0.0.1:8008/asn/list/?page=${page}`,config);
      const {data} = req;
      console.log(data);
      return data;
      }catch(e){
          console.log(e)
      }
    }
    else{
      console.log('error');
    }
}