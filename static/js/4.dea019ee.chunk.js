(this.webpackJsonpactions=this.webpackJsonpactions||[]).push([[4],{1778:function(e,t,a){"use strict";a.r(t);a(50);var n=a(18),r=a.n(n),o=(a(51),a(11)),l=a.n(o),i=(a(53),a(10)),s=a.n(i),c=a(19),d=a(20),u=a(22),m=a(21),p=a(0),h=a.n(p),g=a(28),C=a(1679),E=(a(1775),a(1776)),f=a.n(E),b=a(1777),y=a.n(b),S={entityMap:{0:{type:"IMAGE",mutability:"MUTABLE",data:{src:"http://i.imgur.com/aMtBIep.png",height:"auto",width:"100%"}}},blocks:[{key:"9unl6",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"95kn",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"7rjes",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={editorContent:void 0,contentState:S,editorState:void 0},e.onEditorChange=function(t){e.setState({editorContent:t})},e.clearContent=function(){e.setState({contentState:""})},e.onContentStateChange=function(e){console.log("contentState",e)},e.onEditorStateChange=function(t){e.setState({editorState:t})},e.imageUploadCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 8d26ccd12712fca");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.editorContent,a=e.editorState;return h.a.createElement("div",{className:"gutter-example button-demo"},h.a.createElement(g.a,{breads:["UI","\u5bcc\u6587\u672c"]}),h.a.createElement(r.a,{gutter:16},h.a.createElement(l.a,{className:"gutter-row",md:24},h.a.createElement("div",{className:"gutter-box"},h.a.createElement(s.a,{title:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",bordered:!1},h.a.createElement(C.Editor,{editorState:a,toolbarClassName:"home-toolbar",wrapperClassName:"home-wrapper",editorClassName:"home-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{history:{inDropdown:!0},inline:{inDropdown:!1},list:{inDropdown:!0},textAlign:{inDropdown:!0},image:{uploadCallback:this.imageUploadCallBack}},onContentStateChange:this.onEditorChange,placeholder:"\u8bf7\u8f93\u5165\u6b63\u6587~~\u5c1d\u8bd5@\u54e6\uff0c\u6709\u60ca\u559c",spellCheck:!0,onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onTab:function(){return console.log("tab"),!0},localization:{locale:"zh",translations:{"generic.add":"Test-Add"}},mention:{separator:" ",trigger:"@",caseSensitive:!0,suggestions:[{text:"A",value:"AB",url:"href-a"},{text:"AB",value:"ABC",url:"href-ab"},{text:"ABC",value:"ABCD",url:"href-abc"},{text:"ABCD",value:"ABCDDDD",url:"href-abcd"},{text:"ABCDE",value:"ABCDE",url:"href-abcde"},{text:"ABCDEF",value:"ABCDEF",url:"href-abcdef"},{text:"ABCDEFG",value:"ABCDEFG",url:"href-abcdefg"}]}}),h.a.createElement("style",null,"\n                                    .home-editor {\n                                        min-height: 300px;\n                                    }\n                                ")))),h.a.createElement(l.a,{className:"gutter-row",md:8},h.a.createElement(s.a,{title:"\u540c\u6b65\u8f6c\u6362HTML",bordered:!1},h.a.createElement("pre",null,f()(t)))),h.a.createElement(l.a,{className:"gutter-row",md:8},h.a.createElement(s.a,{title:"\u540c\u6b65\u8f6c\u6362MarkDown",bordered:!1},h.a.createElement("pre",{style:{whiteSpace:"pre-wrap"}},y()(t)))),h.a.createElement(l.a,{className:"gutter-row",md:8},h.a.createElement(s.a,{title:"\u540c\u6b65\u8f6c\u6362JSON",bordered:!1},h.a.createElement("pre",{style:{whiteSpace:"normal"}},JSON.stringify(t))))))}}]),a}(p.Component);t.default=v}}]);
//# sourceMappingURL=4.dea019ee.chunk.js.map