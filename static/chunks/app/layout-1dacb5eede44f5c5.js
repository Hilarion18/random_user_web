(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3481:function(e,t,n){Promise.resolve().then(n.t.bind(n,180,23)),Promise.resolve().then(n.t.bind(n,5332,23)),Promise.resolve().then(n.bind(n,8657))},8657:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var a=n(7437),r=n(2265);let l=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=(0,r.createContext)(void 0),c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:o="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:v="data-theme",value:b,children:$,nonce:g})=>{let[S,_]=(0,r.useState)(()=>h(o,d)),[p,w]=(0,r.useState)(()=>h(o)),k=b?Object.values(b):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let s=b?b[r]:r,o=t?f():null,i=document.documentElement;if("class"===v?(i.classList.remove(...k),s&&i.classList.add(s)):s?i.setAttribute(v,s):i.removeAttribute(v),a){let e=l.includes(d)?d:null,t=l.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),E=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{w(y(t)),"system"===S&&n&&!e&&C("system")},[S,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===o&&E(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{C(null!=e?e:S)},[e,S]);let x=(0,r.useMemo)(()=>({theme:S,setTheme:E,forcedTheme:e,resolvedTheme:"system"===S?p:S,themes:n?[...c,"system"]:c,systemTheme:n?p:void 0}),[S,E,e,p,n,c]);return r.createElement(i.Provider,{value:x},r.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:o,themes:c,defaultTheme:d,attribute:v,value:b,children:$,attrs:k,nonce:g}),$)},u=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?l.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,a=!0)=>{let r=c?c[e]:e,s=t?e+"|| ''":`'${r}'`,i="";return o&&a&&!t&&l.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||r?`c.add(${s})`:"null":r&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${h}${y(e)}}()`:a?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");var v=e=>{let{children:t}=e;return(0,a.jsx)(c,{attribute:"class",disableTransitionOnChange:!0,children:t})}},5332:function(){},180:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875",variable:"__variable_aaf875"}}},function(e){e.O(0,[190,971,23,744],function(){return e(e.s=3481)}),_N_E=e.O()}]);