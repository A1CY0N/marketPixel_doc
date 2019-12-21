(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(115)),i={id:"app_building",title:"Application building"},c=[],p={id:"app_building",title:"Application building",description:"In order to build the application from source, we first need to clone our gitlab repository.",source:"@site/docs/app_building.md",permalink:"/docs/app_building",sidebar:"docs",previous:{title:"Installation of the application",permalink:"/docs/app_install"},next:{title:"Deploying the backend",permalink:"/docs/back_install"}},l={rightToc:c,metadata:p},u="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to build the application from source, we first need to clone our gitlab repository."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"git clone https://gitlab.cs.ttu.ee/chride/supermakert-app\n")),Object(o.b)("p",null,"And then, after installing flutter with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://flutter.dev/docs/get-started/install"}),"intructions here"),", you have to run the following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"flutter build apk\n")),Object(o.b)("p",null,"From the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://flutter.dev/docs/deployment/android"}),"doc")))}d.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,s=u[c+"."+d]||u[d]||l[d]||o;return n?a.a.createElement(s,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);