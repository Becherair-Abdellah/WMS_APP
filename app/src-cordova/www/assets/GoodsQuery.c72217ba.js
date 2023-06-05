import{Q as i}from"./QItemLabel.fd5bb575.js";import{Q as q,b as o,a as u}from"./QList.7b9f2b39.js";import{_ as L,aC as j,J,aR as P,r as W,c as l,w as O,o as X,M as z,O as E,R as a,f as e,W as s,X as d,$ as g}from"./index.f005976b.js";import{u as F}from"./use-quasar.03956383.js";import{u as H}from"./vue-i18n.runtime.esm-bundler.8759bef3.js";import{a as K}from"./index.2885cb15.js";const Y=j({name:"GoodsQuery",data(){return{}},setup(){const t=J();P();const _=F(),h=W(0),{t:c}=H(),v=l({get:()=>t.state.fabchange.fab1}),b=l({get:()=>t.state.fabchange.fab2}),A=l({get:()=>t.state.fabchange.fab3}),G=l({get:()=>t.state.fabchange.fab4}),w=l({get:()=>t.state.screenchange.screenscroll}),$=l({get:()=>t.state.loginauth.authin}),I=l({get:()=>t.state.loginauth.login_name}),C=l({get:()=>t.state.loginauth.operator}),y=l({get:()=>t.state.settings.openid}),D=l({get:()=>t.state.langchange.lang}),Q=l({get:()=>t.state.settings.server}),r=l({get:()=>t.state.scanchanged.scandata,set:n=>{t.commit("scanchanged/ScanChanged",n)}}),S=l({get:()=>t.state.scanchanged.datadetail,set:n=>{t.commit("scanchanged/ScanDataChanged",n)}}),T=l({get:()=>t.state.scanchanged.asndata,set:n=>{t.commit("scanchanged/ASNDataChanged",n)}}),k=l({get:()=>t.state.scanchanged.dndata,set:n=>{t.commit("scanchanged/DNDataChanged",n)}}),B=l({get:()=>t.state.scanchanged.bindata,set:n=>{t.commit("scanchanged/BinDataChanged",n)}}),M=l({get:()=>t.state.scanchanged.tablelist,set:n=>{t.commit("scanchanged/TableDataChanged",n)}}),p=l({get:()=>t.state.scanchanged.scanmode,set:n=>{t.commit("scanchanged/ScanModeChanged",n)}}),V=l({get:()=>t.state.scanchanged.bar_scanned}),m=l({get:()=>t.state.scanchanged.apiurl,set:n=>{t.commit("scanchanged/ApiUrlChanged",n)}}),R=l({get:()=>t.state.scanchanged.apiurlnext,set:n=>{t.commit("scanchanged/ApiUrlNextChanged",n)}}),U=l({get:()=>t.state.scanchanged.apiurlprevious,set:n=>{t.commit("scanchanged/ApiUrlPreviousChanged",n)}});function N(n){m.value=Q.value+"/goods/?goods_code="+n,K.get(m.value,{headers:{"Content-Type":'application/json, charset="utf-8"',token:y.value,language:D.value,operator:C.value}}).then(f=>{f.data.detail?_.notify({type:"negative",message:c("notice.mobile_scan.notice1")}):S.value=f.data.results[0]}).catch(f=>{_.notify({type:"negative",message:c("notice.mobile_scan.notice3")})})}return O(V,(n,f)=>{p.value==="GOODS"&&N(r.value)}),O(w,(n,f)=>{}),X(()=>{$.value==="0"?_.notify({type:"negative",message:c("notice.mobile_userlogin.notice9")}):p.value==="GOODS"&&N(r.value)}),{t:c,fab1:v,fab2:b,fab3:A,fab4:G,screenscroll:w,authin:$,login_name:I,openid:y,operator:C,lang:D,requestauth:h,baseurl:Q,apiurl:m,apiurlnext:R,apiurlprevious:U,scandata:r,datadetail:S,tablelist:M,asndata:T,dndata:k,bindata:B,scanmode:p,bar_scanned:V}}});function Z(t,_,h,c,v,b){return z(),E(q,{bordered:"",padding:""},{default:a(()=>[e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[e(i,null,{default:a(()=>[s(d(t.datadetail.goods_code),1)]),_:1}),e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_desc),1)]),_:1})]),_:1}),e(o,{side:"",top:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.update_time),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:""}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_supplier")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_supplier),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_weight")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_weight),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_w")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_w),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_d")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_d),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_h")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_h),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.unit_volume")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.unit_volume),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_unit")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_unit),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_class")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_class),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_brand")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_brand),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_color")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_color),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_shape")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_shape),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_specs")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_specs),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_origin")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_origin),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_cost")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_cost),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_price")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_price),1)]),_:1})]),_:1})]),_:1})]),_:1})}var oe=L(Y,[["render",Z]]);export{oe as default};
