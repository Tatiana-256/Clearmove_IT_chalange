(this.webpackJsonpclearmove=this.webpackJsonpclearmove||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={position:"loader_position__3qAsp",loader:"loader_loader__2OccQ",spin:"loader_spin__2olnc"}},,function(e,t,n){},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(16),n(1)),s=n(2),l=n(3),u=n(4),m=(n(9),n(5)),p=n.n(m),d=n(6),h=(n(18),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onItemChange=function(t){e.props.onItemChange(t.currentTarget.value)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{value:this.props.value,placeholder:"Type your request",className:"".concat(this.props.styleForInput),onChange:this.onItemChange}))}}]),n}(r.a.Component)),f=n(7),v=n.n(f),b=function(){return r.a.createElement("div",{className:v.a.position},r.a.createElement("div",{className:v.a.loader}))},y=function(e){return r.a.createElement("div",{className:"".concat(e.styleForResults)},e.result)},g=function(e){return r.a.createElement("div",{className:"box"},e.data.map((function(t){return r.a.createElement(y,{key:t.id,result:t.name,styleForResults:e.styleForResults})})))},k=[{name:"find",id:1},{name:"connection",id:2},{name:"cursor",id:3},{name:"database Instance",id:4},{name:"deterministic",id:5},{name:"application",id:6},{name:"compile",id:7},{name:"siblings",id:8},{name:"syntax extension",id:9},{name:"parent element",id:10},{name:"open source library",id:11}],E=function(e){return Object(d.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){e?setTimeout((function(){var n=k.filter((function(t){return t.name.indexOf(e)>-1}));t(n)}),1500):t([])})));case 1:case"end":return t.stop()}}),t)})))()},O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={itemName:"",data:[],loading:!1,styleForInput:"blueThemeInput",styleForResults:"blueThemeBox"},e.onItemChange=function(t){e.setState({itemName:t})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(d.a)(p.a.mark((function e(t,n,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.itemName===this.state.itemName){e.next=7;break}return this.setState({loading:!0}),e.next=4,E(this.state.itemName);case 4:r=e.sent,this.setState({data:r,loading:!1}),this.props.callback(r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"searchContainer"},r.a.createElement("h1",null,"Challenge project of Clearmove"),r.a.createElement(h,{value:this.state.itemName,styleForInput:this.state.styleForInput,onItemChange:this.onItemChange}),this.state.loading?r.a.createElement(b,null):r.a.createElement(g,{styleForResults:this.state.styleForResults,data:this.state.data}))}}]),n}(r.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"callback",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{callback:this.callback}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a59991c6.chunk.js.map