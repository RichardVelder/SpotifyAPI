(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),a=(r(0),r(185)),i={id:"example_blazor_wasm",title:"Blazor WASM"},c={id:"example_blazor_wasm",title:"Blazor WASM",description:"Description",source:"@site/docs/example_blazor_wasm.md",permalink:"/SpotifyAPI-NET/docs/next/example_blazor_wasm",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_blazor_wasm.md",version:"next",lastUpdatedBy:"Andrew Novac",lastUpdatedAt:1591310443,sidebar:"docs",previous:{title:"ASP.NET",permalink:"/SpotifyAPI-NET/docs/next/example_asp"},next:{title:"Blazor ServerSide",permalink:"/SpotifyAPI-NET/docs/next/example_blazor"}},l=[{value:"Description",id:"description",children:[]},{value:"Run it",id:"run-it",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This small cross-platform web app runs on ",Object(a.b)("inlineCode",{parentName:"p"},"Blazor WebAssembly"),", which was released on 19. May 2020. It allows to run C# code in any browser which supports WebAssembly. This allows to create .NET full-stack web projects without writing any JavaScript. Find more about ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://devblogs.microsoft.com/aspnet/blazor-webassembly-3-2-0-now-available/"}),"Blazor WebAssembly here")),Object(a.b)("p",null,"Since this library is compatible with ",Object(a.b)("inlineCode",{parentName:"p"},".NET Standard 2.1"),", you can use all features of ",Object(a.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web")," in your blazor wasm app. The example logs the user in via ",Object(a.b)("inlineCode",{parentName:"p"},"Implicit Grant")," and does 2 user-related API requests from the browser. You can observe the requests from your browsers network tools."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/blazorwasm_homepage.png",alt:"BlazorWASM Spotify Example"}))),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/blazorwasm_network_tools.png",alt:"BlazorWASM Spotify Example - network tools"}))),Object(a.b)("h2",{id:"run-it"},"Run it"),Object(a.b)("p",null,"Before running it, make sure you created an app in your ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/dashboard/"}),"spotify dashboard")," and ",Object(a.b)("inlineCode",{parentName:"p"},"https://localhost:5001")," is a redirect uri of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.BlazorWASM\ndotnet restore\n\necho "{ \\"SPOTIFY_CLIENT_ID\\": \\"YourSpotifyClientId\\" }" > wwwroot/appsettings.json\ndotnet run\n\n# Visit https://localhost:5001\n')))}s.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(d,c({ref:t},p,{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);