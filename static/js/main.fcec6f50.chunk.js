(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(12),a=n.n(r),l=(n(22),n.p,n(23),n(0));var i=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("form",{className:"form",children:Object(l.jsx)("input",{value:e.value,name:"search",id:"search",onChange:e.handleInputChange,type:"text",placeholder:"Search"})})})};var o=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{class:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Image"}),Object(l.jsx)("th",{scope:"col",onClick:e.handleOnClick,children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Phone"}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(l.jsxs)("tbody",{children:[console.log(e.results),e.results.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{alt:"thumbnail",className:"img-fluid",src:e.picture.thumbnail})}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.dob.date})]},e.index)}))]})]})})},h=n(13),u=n(14),d=n(17),j=n(16),b=n(15),O=n.n(b),f=function(e){return O.a.get("https://randomuser.me/api/?results="+e)},p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:"",results:[]},e.getUsers=function(t){f(t).then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,c=e.state.results;console.log("value ".concat(n));var s=c.filter((function(e){return e.name.first.startsWith("".concat(n))}));console.log("new Results ".concat(s)),e.setState({search:n,results:s})},e.handleOnClick=function(t){t.preventDefault(),alert("this was clicked");var n=e.state.results.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));console.log("new Order ".concat(n)),e.setState({results:n})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUsers(25)}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i,{name:"search",value:this.state.search,handleInputChange:this.handleInputChange}),Object(l.jsx)(o,{results:this.state.results,handleOnClick:this.handleOnClick})]})}}]),n}(c.Component);var m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(p,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};n(43);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.fcec6f50.chunk.js.map