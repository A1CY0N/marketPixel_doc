(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{115:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n),o=a.a.createContext({}),i=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):Object.assign({},r,e)),t},c=function(e){var r=i(e.components);return a.a.createElement(o.Provider,{value:r},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),d=n,l=u[c+"."+d]||u[d]||s[d]||o;return t?a.a.createElement(l,Object.assign({},{ref:r},p,{components:t})):a.a.createElement(l,Object.assign({},{ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"default",(function(){return d}));var n=t(1),a=t(6),o=(t(0),t(115)),i={id:"roadmap",title:"Our roadmap"},c=[{value:"Project progress",id:"project-progress",children:[]}],p={id:"roadmap",title:"Our roadmap",description:"## Project progress",source:"@site/docs/roadmap.md",permalink:"/docs/roadmap",sidebar:"docs",previous:{title:"Possible uses of MarketPixel",permalink:"/docs/uses"},next:{title:"Application requirements",permalink:"/docs/app_requirements"}},s={rightToc:c,metadata:p},u="wrapper";function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"project-progress"},"Project progress"),Object(o.b)("p",null,"To see the different tasks of our project and get an overview of the next features we will implement, you can consult ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.cs.ttu.ee/chride/supermakert-app/-/boards"}),"our issues tracker on this page"),"."))}d.isMDXComponent=!0}}]);