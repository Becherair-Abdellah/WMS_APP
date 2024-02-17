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
  goods_code: '',
  goods_qty: '',
  creater: ''
}
export const create_goods = async ()=>{
  console.log(newForm);
    //  console.log( localStorage.getItem('openid'));

  if(localStorage.getItem('auth')){
    try{
      let req = await axios.post('http://localhost:8008/asn/list/',{creater: 'bachir'},config)
      newForm.asn_code = req.data.asn_code;
      newForm.creater = req.data.creater
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