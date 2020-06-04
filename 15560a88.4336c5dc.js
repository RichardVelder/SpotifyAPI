(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(185)),i={id:"authorization_code",title:"Authorization Code"},c={id:"version-5.1.1/auth/authorization_code",title:"Authorization Code",description:"This way is not recommended for client-side apps and requires server-side code to run securely.",source:"@site/versioned_docs/version-5.1.1/auth/authorization_code.md",permalink:"/SpotifyAPI-NET/docs/auth/authorization_code",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/authorization_code.md",version:"5.1.1",lastUpdatedBy:"Andrew Novac",lastUpdatedAt:1591310443,sidebar:"version-5.1.1/someSidebar",previous:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/auth/implicit_grant"},next:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/auth/client_credentials"}},s=[{value:"Token Refresh",id:"token-refresh",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This way is ",Object(a.b)("strong",{parentName:"p"},"not recommended")," for client-side apps and requires server-side code to run securely.\nWith this approach, you first get a code which you need to trade against the access-token.\nIn this exchange you need to provide your Client-Secret and because of that it's not recommended.\nA good thing about this method: You can always refresh your token, without having the user to auth it again."),Object(a.b)("p",null,"More info: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"}),"here")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'static async void Main(string[] args)\n{\n    AuthorizationCodeAuth auth = new AuthorizationCodeAuth(\n      _clientId,\n      _secretId,\n      "http://localhost:4002",\n      "http://localhost:4002",\n      Scope.PlaylistReadPrivate | Scope.PlaylistReadCollaborative\n    );\n\n    auth.AuthReceived += async (sender, payload) =>\n    {\n        auth.Stop();\n        Token token = await auth.ExchangeCode(payload.Code);\n        SpotifyWebAPI api = new SpotifyWebAPI()\n        {\n          TokenType = token.TokenType,\n          AccessToken = token.AccessToken\n        };\n        // Do requests with API client\n    };\n    auth.Start(); // Starts an internal HTTP Server\n    auth.OpenBrowser();\n}\n')),Object(a.b)("h2",{id:"token-refresh"},"Token Refresh"),Object(a.b)("p",null,"Once the ",Object(a.b)("inlineCode",{parentName:"p"},"AccessToken")," is expired, you can use your ",Object(a.b)("inlineCode",{parentName:"p"},"RefreshToken")," to get a new one.\nIn this procedure, no HTTP Server is needed in the background and a single HTTP Request is made."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"// Auth code from above\n\nif(token.IsExpired())\n{\n  Token newToken = await auth.RefreshToken(token.RefreshToken);\n  api.AccessToken = newToken.AccessToken\n  api.TokenType = newToken.TokenType\n}\n")))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(i,".").concat(h)]||d[h]||l[h]||a;return n?o.a.createElement(f,c({ref:t},u,{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);