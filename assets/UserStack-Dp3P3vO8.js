import{d as E,f as u,o as s,a as r,p as c,n as l,F as m,E as p,b as g,y as t,z as C,B as U,H as v,j as b,u as w,m as I}from"./vue.esm-bundler-CKZLKMJN.js";import{N as V}from"./Avatar-dmkPYTDH.js";import{N as z}from"./UserInfo-D9vbHoN0.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={class:"user-stack","data-test-id":"user-stack-container"},q=E({__name:"UserStack",props:{users:{},currentUserEmail:{default:""},maxAvatars:{default:2},dropdownTrigger:{default:"hover"}},setup($){const a=$,f=u(()=>{const e={};for(const n in a.users)a.users[n].length>0&&(e[n]=a.users[n]);return e}),_=u(()=>Object.keys(f.value).length),d=u(()=>{const e=[];for(const n in a.users)e.push(...a.users[n]);return e}),y=u(()=>d.value.length>=a.maxAvatars?a.maxAvatars:d.value.length),k=u(()=>d.value.length-y.value),B=u(()=>_.value>1?220:190);return(e,n)=>{const h=v("el-dropdown-item"),S=v("el-dropdown-menu"),A=v("el-dropdown");return s(),r("div",T,[c(A,{trigger:e.$props.dropdownTrigger,"max-height":B.value,"popper-class":"user-stack-popper"},{dropdown:l(()=>[c(S,{class:"user-stack-list","data-test-id":"user-stack-list"},{default:l(()=>[(s(!0),r(m,null,p(f.value,(o,N)=>(s(),r("div",{key:N},[g("div",{class:t(e.$style.groupContainer)},[c(h,null,{default:l(()=>[_.value>1?(s(),r("header",{key:0,class:t(e.$style.groupName)},C(N),3)):U("",!0)]),_:2},1024),g("div",{class:t(e.$style.groupUsers)},[(s(!0),r(m,null,p(o,i=>(s(),b(h,{key:i.id,"data-test-id":`user-stack-info-${i.id}`,class:t(e.$style.userInfoContainer)},{default:l(()=>[c(w(z),I(i,{"is-current-user":i.email===a.currentUserEmail}),null,16,["is-current-user"])]),_:2},1032,["data-test-id","class"]))),128))],2)],2)]))),128))]),_:1})]),default:l(()=>[g("div",{class:t(e.$style.avatars),"data-test-id":"user-stack-avatars"},[(s(!0),r(m,null,p(d.value.slice(0,y.value),o=>(s(),b(w(V),{key:o.id,"first-name":o.firstName,"last-name":o.lastName,class:t(e.$style.avatar),"data-test-id":`user-stack-avatar-${o.id}`,size:"small"},null,8,["first-name","last-name","class","data-test-id"]))),128)),k.value>0?(s(),r("div",{key:0,class:t(e.$style.hiddenBadge)},"+"+C(k.value),3)):U("",!0)],2)]),_:1},8,["trigger","max-height"])])}}}),j="_avatars_yebqg_1",x="_avatar_yebqg_1",G="_hiddenBadge_yebqg_11",H="_groupContainer_yebqg_26",L="_groupName_yebqg_34",M="_groupUsers_yebqg_42",D="_userInfoContainer_yebqg_48",O={avatars:j,avatar:x,hiddenBadge:G,groupContainer:H,groupName:L,groupUsers:M,userInfoContainer:D},P={$style:O},W=F(q,[["__cssModules",P]]);q.__docgenInfo={exportName:"default",displayName:"UserStack",description:"",tags:{},props:[{name:"users",required:!0,type:{name:"UserStackGroups"}},{name:"currentUserEmail",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxAvatars",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"dropdownTrigger",required:!1,type:{name:"union",elements:[{name:'"hover"'},{name:'"click"'}]},defaultValue:{func:!1,value:"'hover'"}}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/N8nUserStack/UserStack.vue"]};export{W as N};
