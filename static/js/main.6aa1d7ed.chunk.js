(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(22),i=a.n(l);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(12),o=a(5),u=a(9),r=a(10),m=a(13),v=a(11),h=a(14),d=(a(20),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={eventName:"",inputValue:"unnamed",list:["ii"],id_list:"list",cancelItem:"X",cancelButton:"cancelButton",voteNumber:[1],cancelDiv:"cancelDiv",cancelIndex:0},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u8f93\u5165\u6d3b\u52a8\u540d\u79f0"),c.a.createElement("div",{id:"nameInput"},c.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.inputValue}),c.a.createElement(s.b,{to:{pathname:"/detail/",state:{eventName:this.state.inputValue}}},c.a.createElement("button",null,"\u63d0\u4ea4"))))}},{key:"handleInputChange",value:function(e){this.setState({inputValue:e.target.value})}}]),t}(c.a.Component)),b=a(6),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={eventName:a.props.location.state.eventName,inputValue:"unnamed",list:["ii"],id_list:"list",cancelItem:"X",cancelButton:"cancelButton",voteNumber:[1],cancelDiv:"cancelDiv",cancelIndex:0},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"\u5173\u4e8e",this.state.eventName,"\u7684\u6295\u7968"),c.a.createElement("div",{id:"nameInput"},c.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.inputValue}),c.a.createElement("button",{onClick:this.solvingClick.bind(this)},"\u63d0\u4ea4")),c.a.createElement("div",{id:this.state.id_list},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",{className:this.state.cancelButton},"\u5220\u9664 "),c.a.createElement("span",{className:"name"},"\u59d3\u540d"),c.a.createElement("span",{className:"voteNumber"},"\u9009\u7968"),c.a.createElement("span",{className:"addVote"},"\u52a0\u7968"),c.a.createElement("span",{className:"subVote"},"\u51cf\u7968")),this.state.list.map(function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("strong",{className:e.state.cancelButton,onClick:e.cancelButtonClicked.bind(e,a),onMouseOver:e.onMouseAction.bind(e),onMouseOut:e.offMouseAction.bind(e)},e.state.cancelItem),c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"voteNumber"},e.state.voteNumber[a]),c.a.createElement("span",{className:"addVote",onClick:e.addAction.bind(e,a)},"+\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),c.a.createElement("span",{className:"subVote",onClick:e.subAction.bind(e,a)},"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))})),c.a.createElement("div",{id:this.state.cancelDiv},c.a.createElement("strong",null,"\u786e\u8ba4\u5220\u9664",this.state.list[this.state.cancelIndex],"?",c.a.createElement("br",null)),c.a.createElement("button",{onClick:this.cancelEvent.bind(this)},"\u786e\u8ba4"),c.a.createElement("button",{onClick:this.backEvent.bind(this)},"\u53d6\u6d88"))))}},{key:"handleInputChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"solvingClick",value:function(){this.setState({list:[].concat(Object(b.a)(this.state.list),[this.state.inputValue]),voteNumber:[].concat(Object(b.a)(this.state.voteNumber),[0]),inputValue:""}),console.log(this.state.voteNumber)}},{key:"cancelButtonClicked",value:function(e){this.setState({cancelDiv:"cancelDivDisplay",cancelIndex:e})}},{key:"cancelEvent",value:function(){var e=Object(b.a)(this.state.list),t=Object(b.a)(this.state.voteNumber);t.splice(this.state.cancelIndex,1),e.splice(this.state.cancelIndex,1),this.setState({cancelDiv:"cancelDiv",list:e,voteNumber:t})}},{key:"backEvent",value:function(){this.setState({cancelDiv:"cancelDiv"})}},{key:"onMouseAction",value:function(){this.setState({cancelItem:"o"})}},{key:"offMouseAction",value:function(){this.setState({cancelItem:"X"})}},{key:"addAction",value:function(e){var t=Object(b.a)(this.state.voteNumber);t[e]++,this.setState({voteNumber:t})}},{key:"subAction",value:function(e){var t=Object(b.a)(this.state.voteNumber);t[e]>0&&t[e]--,this.setState({voteNumber:t})}}]),t}(c.a.Component),E=function(){return c.a.createElement(s.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:d}),c.a.createElement(o.b,{exact:!0,path:"/detail",component:p}),c.a.createElement(o.a,{to:"/"})))};i.a.render(c.a.createElement(E,null),document.getElementById("root")),window.onbeforeunload=function(){window.history.back(),alert("yes")},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6aa1d7ed.chunk.js.map