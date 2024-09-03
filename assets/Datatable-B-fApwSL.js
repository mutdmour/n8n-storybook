import{d as M,r as R,f as c,o as r,a as n,b as u,y as d,u as s,F as g,E as m,j as y,B as W,p as k,n as S,D as H,z as _,m as F,G as L,A as T,C as U,J as E}from"./vue.esm-bundler-CKZLKMJN.js";import{_ as N,N as I}from"./Option-DGwcywGk.js";import{_ as O}from"./Pagination-CAEDWZzg.js";import{u as j}from"./useI18n-BYVGpRei.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";function J(f,b){return b.split(".").reduce((a,p)=>a==null?void 0:a[p],f)}const x={key:1},w=-1,D=M({name:"N8nDatatable",__name:"Datatable",props:{columns:{},rows:{},currentPage:{default:1},pagination:{type:Boolean,default:!0},rowsPerPage:{default:10}},emits:["update:currentPage","update:rowsPerPage"],setup(f,{emit:b}){const a=f,p=b,{t:C}=j(),V=R([10,25,50,100]),i=L(),z=c(()=>Math.ceil(a.rows.length/a.rowsPerPage)),v=c(()=>a.rows.length),B=c(()=>{if(a.rowsPerPage===w)return a.rows;const e=(a.currentPage-1)*a.rowsPerPage,l=e+a.rowsPerPage;return a.rows.slice(e,l)}),$=c(()=>({datatable:!0,[i.datatableWrapper]:!0}));function P(e){p("update:currentPage",e)}function q(e){if(p("update:rowsPerPage",e),e===w){P(1);return}const l=Math.ceil(v.value/e);l<a.currentPage&&P(l)}function h(e,l){return J(e,l.path)}function A(e){return{...e.width?{width:e.width}:{}}}return(e,l)=>(r(),n("div",F({class:$.value},e.$attrs),[u("table",{class:d(s(i).datatable)},[u("thead",{class:d(s(i).datatableHeader)},[u("tr",null,[(r(!0),n(g,null,m(e.columns,t=>(r(),n("th",{key:t.id,class:d(t.classes),style:T(A(t))},_(t.label),7))),128))])],2),u("tbody",null,[(r(!0),n(g,null,m(B.value,t=>U(e.$slots,"row",{columns:e.columns,row:t,getTdValue:h},()=>[(r(),n("tr",{key:t.id},[(r(!0),n(g,null,m(e.columns,o=>(r(),n("td",{key:o.id,class:d(o.classes)},[o.render?(r(),y(E(o.render),{key:0,row:t,column:o},null,8,["row","column"])):(r(),n("span",x,_(h(t,o)),1))],2))),128))]))])),256))])],2),u("div",{class:d(s(i).pagination)},[z.value>1?(r(),y(s(O),{key:0,background:"","pager-count":5,"page-size":e.rowsPerPage,layout:"prev, pager, next",total:v.value,"current-page":e.currentPage,"onUpdate:currentPage":P},null,8,["page-size","total","current-page"])):W("",!0),u("div",{class:d(s(i).pageSizeSelector)},[k(s(I),{size:"mini","model-value":e.rowsPerPage,teleported:"","onUpdate:modelValue":q},{prepend:S(()=>[H(_(s(C)("datatable.pageSize")),1)]),default:S(()=>[(r(!0),n(g,null,m(V.value,t=>(r(),y(s(N),{key:t,label:`${t}`,value:t},null,8,["label","value"]))),128)),k(s(N),{label:"All",value:w})]),_:1},8,["model-value"])],2)],2)],16))}}),K="_datatableWrapper_egg0f_1",Q="_datatable_egg0f_1",X="_datatableHeader_egg0f_21",Y="_pagination_egg0f_29",Z="_pageSizeSelector_egg0f_39",ee={datatableWrapper:K,datatable:Q,datatableHeader:X,pagination:Y,pageSizeSelector:Z},ae={$style:ee},oe=G(D,[["__cssModules",ae]]);D.__docgenInfo={name:"N8nDatatable",exportName:"default",displayName:"Datatable",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"DatatableColumn"}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"DatatableRow"}]}},{name:"currentPage",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"pagination",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rowsPerPage",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}}],events:[{name:"update:currentPage",type:{names:["number"]}},{name:"update:rowsPerPage",type:{names:["number"]}}],slots:[{name:"row",scoped:!0,bindings:[{name:"columns",title:"binding"},{name:"row",title:"binding"},{name:"get-td-value",title:"binding"}]}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/N8nDatatable/Datatable.vue"]};export{oe as N};
