(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{18:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),l=a.n(i),m=a(11),o=a(12),s=a(15),c=a(14),d=(a(23),a(8)),p=a(28),u=a(29),h=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{fluid:!0},r.a.createElement(u.a,{fluid:!0},r.a.createElement("h1",{className:"display-3"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Filter by name and sort alphabetically"))))},_=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.first_name),r.a.createElement("td",null,e.last_name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.job_title),r.a.createElement("td",null,e.department),r.a.createElement("td",null,e.phone))},f=a(30),g=a(31),b=a(32),E=a(33),y=function(e){return r.a.createElement(f.a,{inline:!0},r.a.createElement(g.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(b.a,{for:"name",className:"mr-sm-2"},"Search:"),r.a.createElement(E.a,{type:"name",title:"first_name",name:"first_name",id:"first_name",placeholder:"start typing name",onChange:e.handleInputChange,value:e.first_name})))},v=a(16),j=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={first_name:"",employees:d,filtered:[]},e.handleInputChange=function(t){console.log(t.target.value);var a=t.target.value;e.setState({first_name:a}),e.filterNames(a)},e.handleSort=function(e){e.preventDefault(),d.sort((function(e,t){return e.first_name<t.first_name?-1:1}))},e}return Object(o.a)(a,[{key:"filterNames",value:function(e){var t=this.state.employees.filter((function(t){return t.first_name?t.first_name.indexOf(e)>=0:null}));this.setState({filtered:t}),console.log(t)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(y,{title:this.state.first_name,handleInputChange:this.handleInputChange}),r.a.createElement("hr",null),r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:this.handleSort},"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Job Title"),r.a.createElement("th",null,"Department"),r.a.createElement("th",null,"Phone"))),r.a.createElement("tbody",null,this.state.filtered[0]?this.state.filtered.map((function(e){return r.a.createElement(_,{id:e.id,key:e.id,first_name:e.first_name,last_name:e.last_name,email:e.email,job_title:e.job_title,department:e.department,phone:e.phone})})):this.state.employees.map((function(e){return r.a.createElement(_,{id:e.id,key:e.id,first_name:e.first_name,last_name:e.last_name,email:e.email,job_title:e.job_title,department:e.department,phone:e.phone})})))))}}]),a}(n.Component);a(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Fernanda","last_name":"Ahren","email":"fahren0@ftc.gov","job_title":"Media Manager I","department":"Product Management","phone":"793-857-4012"},{"id":2,"first_name":"Rivkah","last_name":"Cockson","email":"rcockson1@unc.edu","job_title":"Physical Therapy Assistant","department":"Marketing","phone":"609-975-0359"},{"id":3,"first_name":"Lydie","last_name":"Durrant","email":"ldurrant2@ovh.net","job_title":"Assistant Manager","department":"Sales","phone":"746-828-1457"},{"id":4,"first_name":"Marietta","last_name":"Kuscha","email":"mkuscha3@reddit.com","job_title":"Business Systems Development Analyst","department":"Research and Development","phone":"690-326-5592"},{"id":5,"first_name":"Collin","last_name":"Matyas","email":"cmatyas4@desdev.cn","job_title":"Product Engineer","department":"Support","phone":"807-824-0180"},{"id":6,"first_name":"Zaccaria","last_name":"Ponting","email":"zponting5@artisteer.com","job_title":"VP Accounting","department":"Support","phone":"312-271-2239"},{"id":7,"first_name":"Bryn","last_name":"Father","email":"bfather6@elegantthemes.com","job_title":"Senior Developer","department":"Human Resources","phone":"664-571-3122"},{"id":8,"first_name":"Marni","last_name":"Lernihan","email":"mlernihan7@admin.ch","job_title":"Automation Specialist II","department":"Marketing","phone":"431-876-8633"},{"id":9,"first_name":"Alvis","last_name":"Abrahmer","email":"aabrahmer8@webs.com","job_title":"Safety Technician IV","department":"Research and Development","phone":"150-280-6289"},{"id":10,"first_name":"Berky","last_name":"Piatkowski","email":"bpiatkowski9@bandcamp.com","job_title":"VP Quality Control","department":"Accounting","phone":"909-862-1888"},{"id":11,"first_name":"Trina","last_name":"Willbraham","email":"twillbrahama@ihg.com","job_title":"Structural Engineer","department":"Engineering","phone":"600-431-8468"},{"id":12,"first_name":"Ediva","last_name":"Blyden","email":"eblydenb@seattletimes.com","job_title":"Associate Professor","department":"Engineering","phone":"221-500-1901"},{"id":13,"first_name":"Sigfrid","last_name":"Petracci","email":"spetraccic@twitter.com","job_title":"Programmer III","department":"Product Management","phone":"404-361-5192"},{"id":14,"first_name":"See","last_name":"Abramamovh","email":"sabramamovhd@stumbleupon.com","job_title":"Information Systems Manager","department":"Business Development","phone":"214-723-6736"},{"id":15,"first_name":"Melosa","last_name":"Forsyth","email":"mforsythe@prlog.org","job_title":"Tax Accountant","department":"Support","phone":"836-662-2843"},{"id":16,"first_name":"Murdock","last_name":"Dimitriades","email":"mdimitriadesf@cam.ac.uk","job_title":"Assistant Manager","department":"Product Management","phone":"190-286-9589"},{"id":17,"first_name":"Dee dee","last_name":"Enden","email":"dendeng@nhs.uk","job_title":"Teacher","department":"Product Management","phone":"439-930-6611"},{"id":18,"first_name":"Amaleta","last_name":"De Gogay","email":"adegogayh@google.com","job_title":"Registered Nurse","department":"Product Management","phone":"494-405-2753"},{"id":19,"first_name":"Roxie","last_name":"Clist","email":"rclisti@chronoengine.com","job_title":"Account Representative III","department":"Marketing","phone":"586-799-3924"},{"id":20,"first_name":"Ari","last_name":"Kerins","email":"akerinsj@cnn.com","job_title":"Software Consultant","department":"Accounting","phone":"884-134-7444"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.44f7e7ac.chunk.js.map