import{r as n,i as I}from"./react.341e6fda.js";import{F as i,u as B,a as L,j as R,R as f,C as d,S as x}from"./index.4ed5b74f.js";import{j as y,a as e}from"./index.9b5dcd62.js";import"./lodash.71f9f2ff.js";const{Option:k}=x,G=()=>{const[u]=i.useForm(),[m,C]=n.exports.useState([]),[o,$]=n.exports.useState([]),[p,v]=n.exports.useState(""),[S,w]=n.exports.useState("");B(()=>{A()});async function A(){let t=await L();C(t||[]),t.length>0&&(u.setFieldsValue({category:t[0]}),g(t[0]))}async function g(t){v(t);let{date:r,results:a}=await R(t);w(r),$(a),b(t,a)}function b(t,r){console.log(r);for(let a=0;a<r.length;a++){const l=r[a];j(l,t,a)}}function j(t,r,a){const l=`${r}-${t.title}`,F=document.getElementById(`${l}`);I(F).setOption({xAxis:{type:"category",data:t.xAxis},title:{left:"center",text:`${t==null?void 0:t.title}`},yAxis:{type:"value",name:"ms"},tooltip:{trigger:"axis",position:function(s){return a%3==2?"right":a%3==1?s:[s[0]+10,0]},formatter(s){let h=`<div style="font-size: '12px';">${t.sql}</div><span style="display:inline-block;">${t.version}</span></br>`;return s.forEach((c,E)=>{h+=`<div>${c.marker} ${c.name}:${c.data}</div>`}),h}},series:[{data:t.lines,type:"line"}]})}return y("div",{children:[e(i,{form:u,initialValues:{category:p},children:y(f,{gutter:20,children:[e(d,{span:4,children:e(i.Item,{name:"category",label:"Category",children:e(x,{onChange:g,children:m.map((t,r)=>e(k,{value:t,children:t},r))})})}),e(d,{span:6,children:e(i.Item,{label:"Latest",children:e("span",{children:S})})})]})}),e(f,{children:o==null?void 0:o.map(t=>e(d,{span:8,style:{marginBottom:"20px"},children:e("div",{style:{height:"300px",width:"100%"},id:`${p}-${t.title}`})},t.title))})]})};export{G as default};
