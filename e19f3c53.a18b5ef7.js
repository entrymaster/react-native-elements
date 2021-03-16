(window.webpackJsonp=window.webpackJsonp||[]).push([[157,90],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return O}));var a=n(3),b=n(7),r=(n(0),n(260)),c=n(261),l=n(85),i={id:"button_group",title:"ButtonGroup"},o={unversionedId:"button_group",id:"button_group",isDocsHomePage:!1,title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that",source:"@site/docs/button_group.md",slug:"/button_group",permalink:"/docs/next/button_group",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/button_group.md",version:"current",sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/button"},next:{title:"Card",permalink:"/docs/next/card"}},d=[{value:"Usage",id:"usage",children:[{value:"Using strings",id:"using-strings",children:[]},{value:"Using components",id:"using-components",children:[]}]}],p={rightToc:d};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that\ncan display a different view. Use a ButtonGroup to offer choices that are\nclosely related but mutually exclusive."),Object(r.b)("img",{alt:"ButtonGroup",src:Object(c.a)("img/button_group.png")}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"using-strings"},"Using strings"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\n\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nrender () {\n  const buttons = ['Hello', 'World', 'Buttons']\n  const { selectedIndex } = this.state\n\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}}\n    />\n  )\n}\n")),Object(r.b)("h3",{id:"using-components"},"Using components"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),Object(r.b)("hr",null),Object(r.b)(l.default,{mdxType:"Props"}),Object(r.b)("hr",null))}O.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(n),j=a,u=p["".concat(c,".").concat(j)]||p[j]||O[j]||r;return n?b.a.createElement(u,l(l({ref:t},o),{},{components:n})):b.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},261:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(22),b=n(262);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,c=r.forcePrependBaseUrl,l=void 0!==c&&c,i=r.absolute,o=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(b.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+d:d}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},262:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function b(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return b}))},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),b=n(7),r=(n(0),n(260)),c={},l={unversionedId:"props/button_group",id:"props/button_group",isDocsHomePage:!1,title:"button_group",description:"Props",source:"@site/docs/props/button_group.md",slug:"/props/button_group",permalink:"/docs/next/props/button_group",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/button_group.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>buttonContainerStyle</code>",id:"buttoncontainerstyle",children:[]},{value:"<code>buttons</code>",id:"buttons",children:[]},{value:"<code>buttonStyle</code>",id:"buttonstyle",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledSelectedStyle</code>",id:"disabledselectedstyle",children:[]},{value:"<code>disabledSelectedTextStyle</code>",id:"disabledselectedtextstyle",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>disabledTextStyle</code>",id:"disabledtextstyle",children:[]},{value:"<code>innerBorderStyle</code>",id:"innerborderstyle",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>selectedButtonStyle</code>",id:"selectedbuttonstyle",children:[]},{value:"<code>selectedIndex</code>",id:"selectedindex",children:[]},{value:"<code>selectedIndexes</code>",id:"selectedindexes",children:[]},{value:"<code>selectedTextStyle</code>",id:"selectedtextstyle",children:[]},{value:"<code>selectMultiple</code>",id:"selectmultiple",children:[]},{value:"<code>textStyle</code>",id:"textstyle",children:[]},{value:"<code>underlayColor</code>",id:"underlaycolor",children:[]},{value:"<code>vertical</code>",id:"vertical",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component inherits\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/touchablehighlight.html"}),"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),",\nalong with the following:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#buttoncontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#buttons"}),Object(r.b)("inlineCode",{parentName:"a"},"buttons"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#buttonstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#Component"}),Object(r.b)("inlineCode",{parentName:"a"},"Component"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledselectedstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledSelectedStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledselectedtextstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledSelectedTextStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledtextstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledTextStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#innerborderstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"innerBorderStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#onpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectedbuttonstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"selectedButtonStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectedindex"}),Object(r.b)("inlineCode",{parentName:"a"},"selectedIndex"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectedindexes"}),Object(r.b)("inlineCode",{parentName:"a"},"selectedIndexes"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectedtextstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"selectedTextStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectmultiple"}),Object(r.b)("inlineCode",{parentName:"a"},"selectMultiple"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#textstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"textStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#underlaycolor"}),Object(r.b)("inlineCode",{parentName:"a"},"underlayColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#vertical"}),Object(r.b)("inlineCode",{parentName:"a"},"vertical")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"buttoncontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"buttonContainerStyle")),Object(r.b)("p",null,"specify styling for button containers (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"buttons"},Object(r.b)("inlineCode",{parentName:"h3"},"buttons")),Object(r.b)("p",null,"array of buttons for component (required), if returning a component, must be an\nobject with { element: componentName }"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"buttonstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"buttonStyle")),Object(r.b)("p",null,"specify styling for button (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"component"},Object(r.b)("inlineCode",{parentName:"h3"},"Component")),Object(r.b)("p",null,"Choose other button component such as TouchableOpacity (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"TouchableOpacity (ios) or TouchableNativeFeedback (android)")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"specify styling for main button container (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,"Controls if buttons are disabled. Setting ",Object(r.b)("inlineCode",{parentName:"p"},"true")," makes all of them disabled,\nwhile using an array only makes those indices disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(r.b)("strong",{parentName:"td"},"OR")," number[]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledselectedstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledSelectedStyle")),Object(r.b)("p",null,"Styling for each selected button when disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledselectedtextstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledSelectedTextStyle")),Object(r.b)("p",null,"Styling for the text of each selected button when disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledStyle")),Object(r.b)("p",null,"Styling for each button when disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledtextstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledTextStyle")),Object(r.b)("p",null,"Styling for the text of each button when disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"innerborderstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"innerBorderStyle")),Object(r.b)("p",null,"update the styling of the interior border of the list of buttons (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object { width, color }"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onPress")),Object(r.b)("p",null,"method to update Button Group Index (required)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"selectedbuttonstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"selectedButtonStyle")),Object(r.b)("p",null,"specify styling for selected button (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"selectedindex"},Object(r.b)("inlineCode",{parentName:"h3"},"selectedIndex")),Object(r.b)("p",null,"current selected index of array of buttons (required)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"selectedindexes"},Object(r.b)("inlineCode",{parentName:"h3"},"selectedIndexes")),Object(r.b)("p",null,"current selected indexes from the array of buttons"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"array (number)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[]")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"selectedtextstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"selectedTextStyle")),Object(r.b)("p",null,"specify specific styling for text in the selected state (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"selectmultiple"},Object(r.b)("inlineCode",{parentName:"h3"},"selectMultiple")),Object(r.b)("p",null,"allows the user to select multiple buttons"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"textStyle")),Object(r.b)("p",null,"specify specific styling for text (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"underlaycolor"},Object(r.b)("inlineCode",{parentName:"h3"},"underlayColor")),Object(r.b)("p",null,"specify underlayColor for TouchableHighlight (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"white")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"vertical"},Object(r.b)("inlineCode",{parentName:"h3"},"vertical")),Object(r.b)("p",null,"Display the ButtonGroup vertically"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))))}d.isMDXComponent=!0}}]);