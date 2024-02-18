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
  supplier: 'moh',
  goods_code: ['A000041','A000041','A000041','A000041','A000041','A000041','A000041','A000041','A000041','A000041','A000041','A000041'],
  goods_qty: [1,2,3,4,5,6,7,8,9,12,32,98],
  creater: ''
}
// create new ASN
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