(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},111:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);n(93),n(94),n(95),n(96);var a=n(0),o=n.n(a),s=n(71),r=n.n(s),i=(n(104),n(20)),l=n(16),c=n(17),u=n(25),m=n(24),h=n(26),d=n(38),p=(n(105),n(106),n(107),n(73)),b=n.n(p),f=n(78),E=n.n(f),g=n(79),y=n.n(g),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"chooseStyle",value:function(e){var t={flexDirection:"row-reverse"};switch(e){case"assistant":return delete t.flexDirection,t.backgroundColor="#5f9b8c",t;case"system":return delete t.flexDirection,t;default:return t.backgroundColor="#428776",t}}},{key:"chooseIcon",value:function(e){var t={borderRadius:"100%",backgroundColor:"transparent",borderColor:"#2f3e46",width:"40px",height:"40px",borderWidth:"thick",borderStyle:"solid",display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0};switch(e){case"assistant":return t.borderColor="green",o.a.createElement("div",{style:t},o.a.createElement(b.a,null));case"system":return t.borderColor="#354f52",o.a.createElement("div",{style:t},o.a.createElement(E.a,null));default:return o.a.createElement("div",{style:t},o.a.createElement(y.a,null))}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ChatItem",style:this.chooseStyle(this.props.obj.role)},this.chooseIcon(this.props.obj.role),o.a.createElement("div",null,o.a.createElement("div",{style:{fontWeight:"bold"}},this.props.obj.name),o.a.createElement("div",{style:{fontSize:"8pt"}},this.props.obj.model),o.a.createElement("div",{style:{fontSize:"8pt"}},this.props.obj.datetime)),o.a.createElement("div",{style:"assistant"!==this.props.obj.role&"system"!==this.props.obj.role?{alignSelf:"flex-start",marginTop:"35px"}:{marginTop:"35px"}},this.props.obj.content)))}}]),t}(o.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.chatItems;return o.a.createElement("div",{className:"ChatSecion"},e.map(function(e,t){return o.a.createElement(j,{key:t,obj:e})}))}}]),t}(o.a.Component),O=n(165),v=n(163),C=n(164),I=(n(111),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){n.setState({inputText:e.target.value})},n.handleClick=function(){n.props.addChatItem({content:n.state.inputText,name:"Ahmad",role:"user"});n.setState({inputText:""}),C.a.post("https://hjpt.appian.community/suite/webapi/call-gpt",{model:"gpt-3.5-turbo",messages:n.props.chatItems,loggedInUser:"Ahmad"},{headers:{"Appian-API-Key":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTY0NTU4Mi1kYzJlLTRkNmYtYWQ3YS02NGJiNTc1ZTBkYWQifQ.qvBFLvd3S9LQivUGaKo1agqb1X5ZTBHPyVFI8VqBgmU"}}).then(function(e){var t=e.data.choices[0].message;t.name="Assistant",t.role="assistant",console.log(t),n.props.addChatItem(t)}).catch(function(e){console.error(e)})},n.state={inputText:""},n.pressEnter=n.pressEnter.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"pressEnter",value:function(e){13!==e.keyCode||e.shiftKey||this.handleClick()}},{key:"render",value:function(){return a.createElement("div",{className:"ChatUserInputSec"},a.createElement(v.a,{required:!0,style:{flexGrow:5},id:"outlined-multiline-flexible",label:"write to AI",multiline:!0,InputProps:{sx:{borderRadius:3,backgroundColor:"#cad2c5"}},rows:4,value:this.state.inputText,onChange:this.handleInputChange,onKeyUp:this.pressEnter}),a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},a.createElement(O.a,{onClick:this.handleClick,style:{backgroundColor:"#2f3e46"},variant:"contained"},"Send"),a.createElement(O.a,{onClick:this.props.resetChatItems,variant:"contained",color:"error"},"reset")))}}]),t}(a.Component)),k=(n(117),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"MainContainer"},this.props.children)}}]),t}(o.a.Component)),w=(n(118),n(119),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"HistorySection"},this.props.children)}}]),t}(o.a.Component)),S=(n(120),n(80)),N=n.n(S),T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"HistoryItem"},o.a.createElement(N.a,null),this.props.name)}}]),t}(o.a.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"SideBar"},o.a.createElement(O.a,{style:{margin:"20px",backgroundColor:"#2f3e46"},variant:"contained"},"Start New Chat"),o.a.createElement(w,null,o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"}),o.a.createElement(T,{name:"texting solutions"})))}}]),t}(o.a.Component),A=[{name:"System",content:"you're a good assisstant, now do your magic!",role:"system"},{name:"Assistant",content:"Thank you for your kind words! I'm here to help you with whatever you need. Just let me know what you'd like assistance with or what information you're looking for, and I'll do my best to assist you.",role:"assistant"}],U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).addChatItem=function(e){n.setState(function(t){return{chatItems:[].concat(Object(i.a)(t.chatItems),[e])}})},n.state={chatItems:A},n.resetChatItems=n.resetChatItems.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"resetChatItems",value:function(){this.setState({chatItems:A})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,null,o.a.createElement(J,null),o.a.createElement(x,{chatItems:this.state.chatItems}),o.a.createElement(I,{chatItems:this.state.chatItems,addChatItem:this.addChatItem,resetChatItems:this.resetChatItems})))}}]),t}(o.a.Component);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(U,null))},92:function(e,t,n){e.exports=n(122)}},[[92,1,2]]]);
//# sourceMappingURL=main.e3888b1d.chunk.js.map