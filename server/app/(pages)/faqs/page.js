(()=>{var e={};e.id=419,e.ids=[419],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8614:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c}),s(2234),s(5866),s(9859);var a=s(3191),r=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["(pages)",{children:["faqs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2234)),"/Users/macbook/Documents/porto/random_user/random_user_web/app/(pages)/faqs/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,9859)),"/Users/macbook/Documents/porto/random_user/random_user_web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/macbook/Documents/porto/random_user/random_user_web/app/(pages)/faqs/page.tsx"],d="/(pages)/faqs/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(pages)/faqs/page",pathname:"/faqs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6158:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},1302:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,4253))},6687:(e,t,s)=>{Promise.resolve().then(s.bind(s,2897))},1287:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var a=s(7577),r=s(8439),i=s.n(r),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},n=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,s)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))d.call(t,s)&&p(e,s,t[s]);if(u)for(var s of u(t))m.call(t,s)&&p(e,s,t[s]);return e},h=(e,t)=>o(e,c(t)),g=(e,t)=>{var s={};for(var a in e)d.call(e,a)&&0>t.indexOf(a)&&(s[a]=e[a]);if(null!=e&&u)for(var a of u(e))0>t.indexOf(a)&&m.call(e,a)&&(s[a]=e[a]);return s},b=(e,t,s)=>{let r=(0,a.forwardRef)((t,r)=>{var{color:i="currentColor",size:n=24,stroke:o=2,children:c}=t,u=g(t,["color","size","stroke","children"]);return(0,a.createElement)("svg",x(h(x({ref:r},l),{width:n,height:n,stroke:i,strokeWidth:o,className:`tabler-icon tabler-icon-${e}`}),u),[...s.map(([e,t])=>(0,a.createElement)(e,t)),...c||[]])});return r.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),stroke:i().oneOfType([i().string,i().number])},r.displayName=`${t}`,r}},5058:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var a=(0,s(1287).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},9417:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var a=(0,s(1287).Z)("chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},9899:(e,t,s)=>{"use strict";var a=s(6715);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,s,r,i,l){if(l!==a){var n=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return s.PropTypes=s,s}},8439:(e,t,s)=>{e.exports=s(9899)()},6715:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2897:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(326),r=s(3574);let i=({children:e})=>a.jsx(r.f,{attribute:"class",disableTransitionOnChange:!0,children:e})},6948:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(326),r=s(9417),i=s(5058),l=s(7577);let n=()=>{let[e,t]=(0,l.useState)(!0),[s,a]=(0,l.useState)(void 0);return{activeIndex:s,handleSetIndex:r=>{s!==r?a(r):a(void 0),t(!e)}}},o=({items:e,classCollapseItem:t,iconUp:s,iconDown:l})=>{let{activeIndex:o,handleSetIndex:c}=n();return a.jsx(a.Fragment,{children:e.map(({title:e,description:n},u)=>a.jsx("div",{onClick:()=>c(u),className:"mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700",children:(0,a.jsxs)("div",{className:t,children:[(0,a.jsxs)("div",{className:"align-center flex justify-between",id:`accordion__heading-${u}`,"aria-disabled":"false","aria-expanded":"false","aria-controls":`accordion__panel-${u}`,role:"button",children:[a.jsx("h2",{className:"w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300",children:e}),l&&s?o===u?s:l:o===u?a.jsx(r.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):a.jsx(i.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),o===u&&a.jsx("div",{className:"mt-3 select-none","aria-labelledby":`accordion__heading-${u}`,id:`accordion__panel-${u}`,children:a.jsx("p",{className:"mt-2 text-gray-600 dark:text-slate-400",children:n})})]})},`accordion-${u}`))})}},384:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(326),r=s(1009);let i=({header:e,containerClass:t,titleClass:s,subtitleClass:i})=>{let{title:l,subtitle:n,tagline:o,position:c}=e;return a.jsx("div",{className:"mb-4",children:(l||n||o)&&(0,a.jsxs)("div",{className:(0,r.m6)(`mb-6 mx-auto md:mb-12 ${"left"===c?"text-left ml-0":"right"===c?"text-right mr-0":"text-center"}`,t),children:[o&&a.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:o}),l&&a.jsx("h2",{className:(0,r.m6)("font-heading mb-4 font-bold tracking-tight",s),children:l}),n&&a.jsx("p",{className:(0,r.m6)(`mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ${"left"===c?"text-left ml-0":"right"===c?"text-right mr-0":"text-center"}`,i),children:n})]})})}},2975:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(326),r=s(1009);let i=({children:e,hasBackground:t})=>a.jsx("div",{className:`absolute inset-0 ${t?"bg-primary-50 dark:bg-slate-800":"bg-transparent"}`,children:e}),l=({children:e,id:t,hasBackground:s,containerClass:l})=>(0,a.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:t,children:[a.jsx(i,{hasBackground:s}),a.jsx("div",{className:(0,r.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:e})]})},4253:(e,t,s)=>{"use strict";s.d(t,{default:()=>g});var a=s(326),r=s(384),i=s(6948),l=s(1287),n=(0,l.Z)("minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]),o=(0,l.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),c=s(7577);let u=()=>{let[e,t]=(0,c.useState)({width:0,height:0});return(0,c.useEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e};var d=s(5058),m=s(9417),p=(0,l.Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]);let x=({options:e,activeTab:t,onActiveTabSelected:s,iconUp:r,iconDown:i})=>{let[l,n]=(0,c.useState)(!1),[o,u]=(0,c.useState)(e[t].link?.label),x=(e,t)=>{u(e.link?.label),s(t)};return(0,c.useEffect)(()=>{let e=()=>n(!1);return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),(0,a.jsxs)("div",{className:"relative mt-4 rounded-md border border-gray-400 text-left",children:[(0,a.jsxs)("div",{onClick:e=>{e.stopPropagation(),n(!l)},className:"flex select-none items-center justify-between rounded-md p-3",children:[a.jsx("div",{className:"text-lg",children:o}),i&&r?!1===l?i:r:!1===l?a.jsx(d.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):a.jsx(m.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),l&&a.jsx("div",{className:"absolute w-full translate-y-1 overflow-auto rounded-md border border-gray-400",children:e.map((e,s)=>(0,a.jsxs)("div",{onClick:()=>x(e,s),className:`flex cursor-pointer items-center bg-white p-3 text-lg dark:bg-slate-900 ${t!==s?"pl-10":"text-primary-600 dark:text-primary-200"}`,children:[t===s&&a.jsx(p,{className:"mr-2 h-5 w-5"})," ",e.link?.label]},`option-${s}`))})]})};var h=s(2975);let g=({header:e,tabs:t,id:s,hasBackground:l=!1})=>{let{width:d}=u(),[m,p]=(0,c.useState)(0);return(0,a.jsxs)(h.Z,{id:s||"",hasBackground:l,containerClass:"",children:[e&&a.jsx(r.Z,{header:e,titleClass:"text-3xl sm:text-4xl"}),a.jsx("div",{className:"flex items-stretch justify-center",children:(0,a.jsxs)("div",{className:"grid w-full md:grid-cols-3 md:items-center md:gap-4",children:[d>767?a.jsx("div",{className:"block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4",children:a.jsx("div",{className:"flex h-fit w-full justify-center sm:w-auto sm:justify-start",children:a.jsx("ul",{children:t.map((e,t)=>a.jsx("li",{className:`mb-5 flex cursor-pointer items-center ${m===t?"text-primary-600 dark:text-primary-200":""}`,tabIndex:0,onClick:()=>{p(t)},children:a.jsx("span",{className:"w-full text-xl hover:underline",children:e.link?.label})},`tab-${t}`))})})}):a.jsx(x,{options:t,activeTab:m,onActiveTabSelected:e=>{p(e)}}),a.jsx("div",{className:"mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4",children:t.map((e,t)=>a.jsx("div",{className:"",children:m===t&&a.jsx(i.default,{items:e.items,classCollapseItem:"border-b border-solid border-slate-300 dark:border-slate-500 py-5",iconUp:a.jsx(n,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}),iconDown:a.jsx(o,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})})},`tab-${t}`))})]})})]})}},2234:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h,metadata:()=>x});var a=s(9510),r=s(7066),i=s(8570);let l=(0,i.createProxy)(String.raw`/Users/macbook/Documents/porto/random_user/random_user_web/src/components/widgets/FAQs4.tsx`),{__esModule:n,$$typeof:o}=l;l.default;let c=(0,i.createProxy)(String.raw`/Users/macbook/Documents/porto/random_user/random_user_web/src/components/widgets/FAQs4.tsx#default`),u={title:"Frequently Asked Questions",subtitle:(0,a.jsxs)(a.Fragment,{children:[a.jsx("span",{className:"hidden md:inline",children:"Whether you need help using our Next.js and Tailwind CSS templates, solving problems, or just want some useful tips, our FAQs are here to assist you."})," ","Explore them to optimize your experience with our website and products."]}),tagline:"Demo FAQs Page"},d={id:"faqsFour-on-faqs",hasBackground:!0,header:{title:"Find what you need",subtitle:"Get quick answers to your questions: Everything you need in one spot.",position:"center"},tabs:[{link:{label:"General",href:"/tab1"},items:[{title:"What do I need to start?",description:"Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula."},{title:"How to install the NextJS + Tailwind CSS template?",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus."},{title:"What's something that you completely don't understand?",description:"Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur."},{title:"What's an example of when you changed your mind?",description:"Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc."},{title:"What is something that you would really like to try again?",description:"Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur."},{title:"If you could only ask one question to each person you meet, what would that question be?",description:"Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros."}]},{link:{label:"Plans, prices and payments",href:"/tab2"},items:[{title:"Which plan is best for me?",description:"Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula."},{title:"What are my payment options?",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus."},{title:"How do I change my plan to a different one?",description:"Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur."},{title:"What happen at the end of my free trial?",description:"Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc."},{title:"Can I import data from other tools?",description:"Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur."},{title:"Can I cancel my plan at any time?",description:"Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros."}]},{link:{label:"Others",href:"/tab3"},items:[{title:"How do I download the template?",description:"In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor."},{title:"How do I customize the template?",description:"Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus."},{title:"Does the template come with any tutorials or instructions?",description:"Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim."},{title:"Are there any additional fees or charges for using the template?",description:"Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada."}]}]},m={id:"callToAction-on-faqs",hasBackground:!0,title:"Still have questions?",subtitle:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.",callToAction:{text:"Contact us",href:"/contact"}};var p=s(1669);let x={title:"FAQs"},h=()=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(p.Z,{...u}),a.jsx(c,{...d}),a.jsx(r.Z,{...m})]})},9859:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y,metadata:()=>v});var a=s(9510),r=s(4148),i=s.n(r),l=s(8570);let n=(0,l.createProxy)(String.raw`/Users/macbook/Documents/porto/random_user/random_user_web/src/components/atoms/Providers.tsx`),{__esModule:o,$$typeof:c}=n;n.default;let u=(0,l.createProxy)(String.raw`/Users/macbook/Documents/porto/random_user/random_user_web/src/components/atoms/Providers.tsx#default`);var d=s(9720),m=s(4569),p=s(6331),x=s(5487),h=s(2556),g=s(5914);d.Z,m.Z,p.Z,x.Z,h.Z,g.Z;let b={links:[{label:"Terms & Conditions",href:"/terms"},{label:"Privacy Policy",href:"/privacy"}],columns:[{title:"Address",texts:["51 Phasellus Avenue Maecenas","Aliquam, AQ 52098"]},{title:"Phone",texts:["Reception: +105 123 4567","Office: +107 235 7890"]},{title:"Email",texts:["Office: info@example.com","Site: https://example.com"]}],socials:[{label:"Twitter",icon:m.Z,href:"#"},{label:"Instagram",icon:p.Z,href:"#"},{label:"Facebook",icon:x.Z,href:"#"},{label:"RSS",icon:h.Z,href:"#"},{label:"Github",icon:g.Z,href:"https://github.com/onwidget/tailnext"}],footNote:(0,a.jsxs)("div",{className:"mr-4 text-sm",children:[a.jsx("span",{className:"float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"}),"Made by"," ",(0,a.jsxs)("a",{className:"font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600",href:"https://onwidget.com/",children:[" ","onWidget"]})," ","\xb7 All rights reserved."]})},f=()=>{let{links:e,columns:t,socials:s,footNote:r}=b;return(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12",children:[t.map(({title:e,texts:t},s)=>(0,a.jsxs)("div",{className:"col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1",children:[a.jsx("div",{className:"mb-2 font-medium text-gray-800 dark:text-gray-300",children:e}),t&&t.map((e,t)=>a.jsx("p",{className:"text-gray-600 dark:text-slate-400",children:e},`item-text-${t}`))]},`item-column-${s}`)),(0,a.jsxs)("div",{className:"col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1",children:[a.jsx("div",{className:"mb-2 font-medium text-gray-800 dark:text-gray-300",children:"Social"}),a.jsx("ul",{className:"mb-4 -ml-2 flex md:order-1 md:mb-0",children:s.map(({label:e,icon:t,href:s},r)=>a.jsx("li",{children:a.jsx("a",{className:"text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":e,href:s,children:t&&a.jsx(t,{className:"h-5 w-5"})})},`item-social-${r}`))})]})]}),(0,a.jsxs)("div",{className:"text-muted py-6 text-sm text-gray-700 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8",children:[a.jsx("ul",{className:"mb-4 -ml-2 flex pl-2 md:order-1 md:mb-0",children:e&&e.map(({label:t,href:s},r)=>(0,a.jsxs)("li",{children:[a.jsx("a",{className:"duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400","aria-label":t,href:s,children:t}),e.length-1!==r&&a.jsx("span",{className:"mr-1",children:" \xb7 "})]},`item-link-${r}`))}),r]})]})};s(6406);let v={title:"Badan Data Driver Nasional",description:"Pengepul data driver"};function y({children:e}){return(0,a.jsxs)("html",{lang:"en",className:`motion-safe:scroll-smooth 2xl:text-[24px] ${i().variable} font-sans`,children:[(0,a.jsxs)("head",{children:[a.jsx("meta",{charSet:"utf-8"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),a.jsx("body",{className:"tracking-tight antialiased text-gray-900 dark:text-slate-300",children:(0,a.jsxs)(u,{children:[a.jsx("main",{children:e}),a.jsx(f,{})]})})]})}},3700:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(9510),r=s(7371),i=s(2386);let l=({callToAction:e,containerClass:t,linkClass:s,iconClass:l})=>{let{text:n,href:o,icon:c,targetBlank:u}=e;return a.jsx(a.Fragment,{children:o&&(n||c)&&a.jsx("div",{className:(0,i.m6)("flex w-auto cursor-pointer",t),children:u?(0,a.jsxs)(r.default,{className:(0,i.m6)("inline-flex items-center justify-center w-full sm:mb-0",s),href:o,target:"_blank",rel:"noopener noreferrer",children:[c&&a.jsx(c,{className:(0,i.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),n]}):(0,a.jsxs)(r.default,{className:(0,i.m6)("inline-flex items-center justify-center w-full sm:mb-0 ",s),href:o,children:[c&&a.jsx(c,{className:(0,i.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),n]})})})}},8730:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(9510),r=s(2386);let i=({children:e,hasBackground:t})=>a.jsx("div",{className:`absolute inset-0 ${t?"bg-primary-50 dark:bg-slate-800":"bg-transparent"}`,children:e}),l=({children:e,id:t,hasBackground:s,containerClass:l})=>(0,a.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:t,children:[a.jsx(i,{hasBackground:s}),a.jsx("div",{className:(0,r.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:e})]})},7066:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(9510),r=s(3700),i=s(8730);let l=({title:e,subtitle:t,callToAction:s,id:l,hasBackground:n=!1})=>{let{text:o,href:c}=s;return a.jsx(i.Z,{id:l||"",hasBackground:n,containerClass:"",children:(0,a.jsxs)("div",{className:"card mx-auto max-w-3xl p-6 text-center",children:[e&&a.jsx("h2",{className:"leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl",children:e}),t&&a.jsx("p",{className:"text-xl text-gray-600 dark:text-slate-400",children:t}),o&&c&&a.jsx(r.Z,{callToAction:s,containerClass:"mt-6 sm:mx-auto sm:w-fit",linkClass:"btn btn-primary"})]})})}},1669:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(9510),r=s(7710),i=s(3700);let l=({title:e,subtitle:t,tagline:s,callToAction:l,callToAction2:n,image:o})=>a.jsx("section",{id:"heroOne",children:a.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"py-12 md:py-20",children:[(0,a.jsxs)("div",{className:"mx-auto max-w-4xl pb-10 text-center md:pb-16",children:[s&&a.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:s}),e&&a.jsx("h1",{className:"leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl",children:e}),(0,a.jsxs)("div",{className:"mx-auto max-w-3xl",children:[t&&a.jsx("p",{className:"mb-6 text-xl font-normal text-gray-600 dark:text-slate-400",children:t}),(0,a.jsxs)("div",{className:"flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center",children:[l&&a.jsx(i.Z,{callToAction:l,linkClass:"btn btn-primary"}),n&&a.jsx(i.Z,{callToAction:n,linkClass:"btn"})]})]})]}),o&&a.jsx("div",{className:"relative m-auto max-w-5xl",children:a.jsx(r.default,{className:"mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700",src:o.src,alt:o.alt,width:1024,height:607,sizes:"(max-width: 64rem) 100vw, 1024px",loading:"eager",placeholder:"blur",priority:!0})})]})})})},6406:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[549,481,404,710,615,9],()=>s(8614));module.exports=a})();