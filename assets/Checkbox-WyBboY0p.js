import{i as R,e as $,f as h,w as Z,M as _,V as ee,r as E,a7 as L,Y as pe,ae as K,d as B,a9 as le,o as g,j as I,n as O,b as j,y as C,u,N as w,a as x,v as z,I as N,al as F,C as D,F as ke,D as ae,z as ne,B as T,J as te,A as he,W as ge,af as ye,m as Ce}from"./vue.esm-bundler-CKZLKMJN.js";import{N as xe}from"./InputLabel-D7tsELlc.js";import{a as oe,b as Se,u as H}from"./use-form-common-props-BTlxgw_X.js";import{U as G}from"./event-BB_Ol6Sd.js";import{i as W,h as P,e as M,g as Be}from"./constants-B8P1jKxi.js";import{u as U,_ as q,b as Ve,d as Le,w as Ne,g as se}from"./plugin-vue_export-helper-DmnD37aS.js";import{u as A,a as ue}from"./use-form-item-DhSYu2FI.js";import{d as ie}from"./error-Cq9Fpw4b.js";import{i as $e}from"./isEqual-PEmCjIlp.js";import{b as Ee}from"./_basePickBy-D3MBV8e2.js";import{i as Ie,a as we,c as ze,h as Fe}from"./hasIn-BxG8bepv.js";import{S as J,f as Te}from"./_baseGet-CJvEpbeR.js";import{d as Y}from"./_baseAssignValue-BjKO3dwM.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Ge(e,l,n){switch(n.length){case 0:return e.call(l);case 1:return e.call(l,n[0]);case 2:return e.call(l,n[0],n[1]);case 3:return e.call(l,n[0],n[1],n[2])}return e.apply(l,n)}var Pe=800,Me=16,Oe=Date.now;function Ue(e){var l=0,n=0;return function(){var a=Oe(),o=Me-(a-n);if(n=a,o>0){if(++l>=Pe)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function qe(e){return function(){return e}}var Ae=Y?function(e,l){return Y(e,"toString",{configurable:!0,enumerable:!1,value:qe(l),writable:!0})}:Ie,Re=Ue(Ae),Q=Math.max;function Ke(e,l,n){return l=Q(l===void 0?e.length-1:l,0),function(){for(var a=arguments,o=-1,b=Q(a.length-l,0),r=Array(b);++o<b;)r[o]=a[l+o];o=-1;for(var t=Array(l+1);++o<l;)t[o]=a[o];return t[l]=n(r),Ge(e,this,t)}}var X=J?J.isConcatSpreadable:void 0;function je(e){return Te(e)||we(e)||!!(X&&e&&e[X])}function re(e,l,n,a,o){var b=-1,r=e.length;for(n||(n=je),o||(o=[]);++b<r;){var t=e[b];l>0&&n(t)?l>1?re(t,l-1,n,a,o):ze(o,t):a||(o[o.length]=t)}return o}function He(e){var l=e==null?0:e.length;return l?re(e,1):[]}function We(e){return Re(Ke(e,void 0,He),e+"")}function Je(e,l){return Ee(e,l,function(n,a){return Fe(e,a)})}var Ye=We(function(e,l){return e==null?{}:Je(e,l)});const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:oe,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},be={[G]:e=>R(e)||W(e)||P(e),change:e=>R(e)||W(e)||P(e)},V=Symbol("checkboxGroupContextKey"),Qe=({model:e,isChecked:l})=>{const n=$(V,void 0),a=h(()=>{var b,r;const t=(b=n==null?void 0:n.max)==null?void 0:b.value,v=(r=n==null?void 0:n.min)==null?void 0:r.value;return!M(t)&&e.value.length>=t&&!l.value||!M(v)&&e.value.length<=v&&l.value});return{isDisabled:Se(h(()=>(n==null?void 0:n.disabled.value)||a.value)),isLimitDisabled:a}},Xe=(e,{model:l,isLimitExceeded:n,hasOwnLabel:a,isDisabled:o,isLabeledByFormItem:b})=>{const r=$(V,void 0),{formItem:t}=A(),{emit:v}=ee();function s(i){var m,p;return i===e.trueLabel||i===!0?(m=e.trueLabel)!=null?m:!0:(p=e.falseLabel)!=null?p:!1}function f(i,m){v("change",s(i),m)}function k(i){if(n.value)return;const m=i.target;v("change",s(m.checked),i)}async function S(i){n.value||!a.value&&!o.value&&b.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(l.value=s([!1,e.falseLabel].includes(l.value)),await _(),f(l.value,i)))}const d=h(()=>(r==null?void 0:r.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{d.value&&(t==null||t.validate("change").catch(i=>ie()))}),{handleChange:k,onClickRoot:S}},Ze=e=>{const l=E(!1),{emit:n}=ee(),a=$(V,void 0),o=h(()=>M(a)===!1),b=E(!1);return{model:h({get(){var t,v;return o.value?(t=a==null?void 0:a.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:l.value},set(t){var v,s;o.value&&L(t)?(b.value=((v=a==null?void 0:a.max)==null?void 0:v.value)!==void 0&&t.length>(a==null?void 0:a.max.value),b.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,t))):(n(G,t),l.value=t)}}),isGroup:o,isLimitExceeded:b}},_e=(e,l,{model:n})=>{const a=$(V,void 0),o=E(!1),b=h(()=>{const s=n.value;return P(s)?s:L(s)?pe(e.label)?s.map(K).some(f=>$e(f,e.label)):s.map(K).includes(e.label):s!=null?s===e.trueLabel:!!s}),r=H(h(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),t=H(h(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),v=h(()=>!!l.default||!Be(e.label));return{checkboxButtonSize:r,isChecked:b,isFocused:o,checkboxSize:t,hasOwnLabel:v}},el=(e,{model:l})=>{function n(){L(l.value)&&!l.value.includes(e.label)?l.value.push(e.label):l.value=e.trueLabel||!0}e.checked&&n()},ce=(e,l)=>{const{formItem:n}=A(),{model:a,isGroup:o,isLimitExceeded:b}=Ze(e),{isFocused:r,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:f}=_e(e,l,{model:a}),{isDisabled:k}=Qe({model:a,isChecked:t}),{inputId:S,isLabeledByFormItem:d}=ue(e,{formItemContext:n,disableIdGeneration:f,disableIdManagement:o}),{handleChange:i,onClickRoot:m}=Xe(e,{model:a,isLimitExceeded:b,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:d});return el(e,{model:a}),{inputId:S,isLabeledByFormItem:d,isChecked:t,isDisabled:k,isFocused:r,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:f,model:a,handleChange:i,onClickRoot:m}},ll=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],al=["id","indeterminate","disabled","value","name","tabindex"],nl=B({name:"ElCheckbox"}),tl=B({...nl,props:de,emits:be,setup(e){const l=e,n=le(),{inputId:a,isLabeledByFormItem:o,isChecked:b,isDisabled:r,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:f,handleChange:k,onClickRoot:S}=ce(l,n),d=U("checkbox"),i=h(()=>[d.b(),d.m(v.value),d.is("disabled",r.value),d.is("bordered",l.border),d.is("checked",b.value)]),m=h(()=>[d.e("input"),d.is("disabled",r.value),d.is("checked",b.value),d.is("indeterminate",l.indeterminate),d.is("focus",t.value)]);return(p,c)=>(g(),I(te(!u(s)&&u(o)?"span":"label"),{class:C(u(i)),"aria-controls":p.indeterminate?p.controls:null,onClick:u(S)},{default:O(()=>[j("span",{class:C(u(m))},[p.trueLabel||p.falseLabel?w((g(),x("input",{key:0,id:u(a),"onUpdate:modelValue":c[0]||(c[0]=y=>z(f)?f.value=y:null),class:C(u(d).e("original")),type:"checkbox",indeterminate:p.indeterminate,name:p.name,tabindex:p.tabindex,disabled:u(r),"true-value":p.trueLabel,"false-value":p.falseLabel,onChange:c[1]||(c[1]=(...y)=>u(k)&&u(k)(...y)),onFocus:c[2]||(c[2]=y=>t.value=!0),onBlur:c[3]||(c[3]=y=>t.value=!1),onClick:c[4]||(c[4]=N(()=>{},["stop"]))},null,42,ll)),[[F,u(f)]]):w((g(),x("input",{key:1,id:u(a),"onUpdate:modelValue":c[5]||(c[5]=y=>z(f)?f.value=y:null),class:C(u(d).e("original")),type:"checkbox",indeterminate:p.indeterminate,disabled:u(r),value:p.label,name:p.name,tabindex:p.tabindex,onChange:c[6]||(c[6]=(...y)=>u(k)&&u(k)(...y)),onFocus:c[7]||(c[7]=y=>t.value=!0),onBlur:c[8]||(c[8]=y=>t.value=!1),onClick:c[9]||(c[9]=N(()=>{},["stop"]))},null,42,al)),[[F,u(f)]]),j("span",{class:C(u(d).e("inner"))},null,2)],2),u(s)?(g(),x("span",{key:0,class:C(u(d).e("label"))},[D(p.$slots,"default"),p.$slots.default?T("v-if",!0):(g(),x(ke,{key:0},[ae(ne(p.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var ol=q(tl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const sl=["name","tabindex","disabled","true-value","false-value"],ul=["name","tabindex","disabled","value"],il=B({name:"ElCheckboxButton"}),rl=B({...il,props:de,emits:be,setup(e){const l=e,n=le(),{isFocused:a,isChecked:o,isDisabled:b,checkboxButtonSize:r,model:t,handleChange:v}=ce(l,n),s=$(V,void 0),f=U("checkbox"),k=h(()=>{var d,i,m,p;const c=(i=(d=s==null?void 0:s.fill)==null?void 0:d.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(p=(m=s==null?void 0:s.textColor)==null?void 0:m.value)!=null?p:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=h(()=>[f.b("button"),f.bm("button",r.value),f.is("disabled",b.value),f.is("checked",o.value),f.is("focus",a.value)]);return(d,i)=>(g(),x("label",{class:C(u(S))},[d.trueLabel||d.falseLabel?w((g(),x("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=m=>z(t)?t.value=m:null),class:C(u(f).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:u(b),"true-value":d.trueLabel,"false-value":d.falseLabel,onChange:i[1]||(i[1]=(...m)=>u(v)&&u(v)(...m)),onFocus:i[2]||(i[2]=m=>a.value=!0),onBlur:i[3]||(i[3]=m=>a.value=!1),onClick:i[4]||(i[4]=N(()=>{},["stop"]))},null,42,sl)),[[F,u(t)]]):w((g(),x("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=m=>z(t)?t.value=m:null),class:C(u(f).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:u(b),value:d.label,onChange:i[6]||(i[6]=(...m)=>u(v)&&u(v)(...m)),onFocus:i[7]||(i[7]=m=>a.value=!0),onBlur:i[8]||(i[8]=m=>a.value=!1),onClick:i[9]||(i[9]=N(()=>{},["stop"]))},null,42,ul)),[[F,u(t)]]),d.$slots.default||d.label?(g(),x("span",{key:2,class:C(u(f).be("button","inner")),style:he(u(o)?u(k):void 0)},[D(d.$slots,"default",{},()=>[ae(ne(d.label),1)])],6)):T("v-if",!0)],2))}});var me=q(rl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const dl=Ve({modelValue:{type:Le(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:oe,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),bl={[G]:e=>L(e),change:e=>L(e)},cl=B({name:"ElCheckboxGroup"}),ml=B({...cl,props:dl,emits:bl,setup(e,{emit:l}){const n=e,a=U("checkbox"),{formItem:o}=A(),{inputId:b,isLabeledByFormItem:r}=ue(n,{formItemContext:o}),t=async s=>{l(G,s),await _(),l("change",s)},v=h({get(){return n.modelValue},set(s){t(s)}});return ge(V,{...Ye(ye(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),Z(()=>n.modelValue,()=>{n.validateEvent&&(o==null||o.validate("change").catch(s=>ie()))}),(s,f)=>{var k;return g(),I(te(s.tag),{id:u(b),class:C(u(a).b("group")),role:"group","aria-label":u(r)?void 0:s.label||"checkbox-group","aria-labelledby":u(r)?(k=u(o))==null?void 0:k.labelId:void 0},{default:O(()=>[D(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ve=q(ml,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const vl=Ne(ol,{CheckboxButton:me,CheckboxGroup:ve}),zl=se(me),Fl=se(ve),fe=B({name:"N8nCheckbox",__name:"Checkbox",props:{label:{},disabled:{type:Boolean,default:!1},tooltipText:{},indeterminate:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},labelSize:{default:"medium"}},emits:["update:modelValue"],setup(e,{emit:l}){const n=l,a=r=>n("update:modelValue",r),o=E(),b=()=>{o!=null&&o.value&&o.value.$el.click()};return(r,t)=>(g(),I(u(vl),Ce(r.$props,{ref_key:"checkbox",ref:o,class:["n8n-checkbox",r.$style.n8nCheckbox],disabled:r.disabled,indeterminate:r.indeterminate,"model-value":r.modelValue,"onUpdate:modelValue":a}),{default:O(()=>[D(r.$slots,"default"),r.label?(g(),I(u(xe),{key:0,label:r.label,"tooltip-text":r.tooltipText,bold:!1,size:r.labelSize,onClick:N(b,["prevent"])},null,8,["label","tooltip-text","size"])):T("",!0)]),_:3},16,["class","disabled","indeterminate","model-value"]))}}),fl="_n8nCheckbox_qet2x_1",pl={n8nCheckbox:fl},kl={$style:pl},Tl=De(fe,[["__cssModules",kl]]);fe.__docgenInfo={name:"N8nCheckbox",exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipText",required:!1,type:{name:"string"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"labelSize",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'medium'"}}],events:[{name:"update:modelValue",type:{names:["CheckboxValueType"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/N8nCheckbox/Checkbox.vue"]};export{vl as E,Tl as N,Fl as a,re as b,zl as c,He as f,Ke as o,Ye as p,Re as s};
