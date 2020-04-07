(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{100:function(e,t,a){e.exports=a(218)},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=(a(66),a(67),a(26)),s=a.n(i),o=a(38),u=a(5),m=a(39);var d=function(){Object(n.useEffect)((function(){C()}),[]);var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),i=Object(u.a)(c,2),d=i[0],h=i[1],p=Object(n.useState)(0),f=Object(u.a)(p,2),E=f[0],g=f[1],b=Object(n.useState)(0),v=Object(u.a)(b,2),y=v[0],O=v[1],k=Object(n.useState)(0),w=Object(u.a)(k,2),j=w[0],S=w[1],C=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.cases-(a.deaths+a.recovered),r={labels:["Deaths","Recovered","Open Cases"],datasets:[{data:[a.deaths,a.recovered,n],backgroundColor:["#ff3b3b","#00b646","#ffa24c"],hoverBackgroundColor:["#ff3b3b","#00b646","#ffa24c"]}]},h(n),g(a.deaths),O(a.recovered),S(a.cases),l(r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"World Total"),r.a.createElement(m.b,{data:a}),r.a.createElement("div",{className:"text-center p-3"},r.a.createElement("span",{className:"text-warning mr-3"},r.a.createElement("i",{className:"las la-square-full"}),": ",d.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("span",{className:"text-success mr-3"},r.a.createElement("i",{className:"las la-square-full"}),": ",y.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("span",{className:"text-danger mr-3"},r.a.createElement("i",{className:"las la-square-full"}),": ",E.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("span",null,"Total: ",j.toLocaleString(void 0,{maximumFractionDigits:0}))))},h=Object(n.createContext)();function p(e){var t=Object(n.useState)([{title:"Stay at Home",body:"Please stay at home to minimize the risk of being infected and/or spreading the virus. Follow guidelines set by your local government unit and only go outside to get basic necessities like food or to seek emergency medical services.",date:"27/03/2020 0:00PM",source:"",priority:1},{title:"Philippines under State of Calamity",body:"President R. Duterte declares state of calamity for the entire Philippines",date:"17/03/2020 7:00PM",source:"https://cnnphilippines.com/news/2020/3/17/ph-state-of-calamity-coronavirus.html",priority:0},{title:"Quarantine Status",body:"<p>The Philippine government has placed the entire Luzon island under quarantine. Expires 13th of April 12:00AM. Please observe the following guidelines:\n            </p>\n            <ul>\n              <li>Classes and all school activities in all levels are suspended until April 14, 2020. School activities resume 15th April.</li>\n              <li>Mass gatherings are prohibited.</li>\n              <li>Strict home quarantine must be observed. Movement outside limited to accessing basic necessities like food and health services.\n              Heighted presence of uniformed personnel expected to enforce quarantine.\n                </li>\n              <li>Work-from-home arrangement implemented in the Executive branch except PNP, AFP,PCG, and health and emergency services, border control and other critical services, which shall ensure a skeletal workforce. </li>\n              <li>Only private establishments providing basic necessities are allowed to open. BPOs and export oriented industries allowed to\n              operate as long as proper distancing measures are observed and their employees are provided with accomodation. Skeletal work force shall be implemented.\n              Media personnel shall be allowed to travel within quarantine area provided that they have secured ID cards from PCOO.\n                </li>\n              <li>Mass public transport suspended.</li>\n              <li>Land, air, sea travel restricted.</li>\n            </ul>\n            To read the full memorandum, click <a href='https://drive.google.com/file/d/1lOQzupmmEusuMhCa1ksPv_6uKfXJIcr4/view' target='_blank' rel=\"noopener noreferrer\">here.</a>",date:"17/03/2020 12:00AM",source:"https://drive.google.com/file/d/1lOQzupmmEusuMhCa1ksPv_6uKfXJIcr4/view",priority:1}]),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement(h.Provider,{value:[l,c]},e.children)}var f=a(221);var E=function(e){var t=e.title,a=e.body,n=e.date,l=e.priority,c=e.source;return r.a.createElement("div",{className:"update-box mb-3"},r.a.createElement("p",{className:"update-title"},t),1===l&&r.a.createElement(f.a,{variant:"danger"},"Important"),r.a.createElement("p",null,n),r.a.createElement("p",{className:"update-text",dangerouslySetInnerHTML:{__html:a}}),c?r.a.createElement("a",{href:c},"Source"):null)};var g=function(){var e=Object(n.useContext)(h),t=Object(u.a)(e,1)[0];return r.a.createElement(n.Fragment,null,t.map((function(e){return r.a.createElement(E,{key:e.title,title:e.title,body:e.body,date:e.date,priority:e.priority,source:e.source})})))},b=a(47),v=a(19),y=a(227);function O(e){return r.a.createElement(y.a,{className:e.style},r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,{className:"text-center font-weight-normal"},e.title),r.a.createElement(y.a.Text,{className:"text-center font-weight-normal"},e.main),r.a.createElement(y.a.Subtitle,{className:"text-center font-weight-normal"},e.footer)))}var k=a(25),w=a.n(k);var j=function(){Object(n.useEffect)((function(){P(!0),w.a.get("https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/slide_fig/FeatureServer/0/query?",{params:{f:"json",where:"1=1",returnGeometry:!1,spatialRel:"esriSpatialRelIntersects",outFields:"*",cacheHint:!0,outStatistics:""}}).then((function(e){e.data.features.map((function(e){l(e.attributes.confirmed),o(e.attributes.recovered),p(e.attributes.deaths),g(e.attributes.PUIs),j(e.attributes.PUMs),x(e.attributes.tests)}))})),P(!1)}),[]);var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),i=Object(u.a)(c,2),s=i[0],o=i[1],m=Object(n.useState)(0),d=Object(u.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(0),E=Object(u.a)(f,2),g=(E[0],E[1]),y=Object(n.useState)(0),k=Object(u.a)(y,2),j=(k[0],k[1]),S=Object(n.useState)(0),C=Object(u.a)(S,2),x=(C[0],C[1]),N=Object(n.useState)(!0),F=Object(u.a)(N,2),P=(F[0],F[1]);return r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6,md:4},r.a.createElement(O,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"las la-procedures"}),"Cases"),main:r.a.createElement("span",null,a),footer:"Total of all cases.",style:"bg-info mb-3 text-white"})),r.a.createElement(v.a,{sm:6,md:4},r.a.createElement(O,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"las la-user"}),"Recovered"),main:r.a.createElement("span",null,s),footer:r.a.createElement("span",null,(s/a*100).toLocaleString(void 0,{maximumFractionDigits:2}),"% have recovered."),style:"bg-success mb-3 text-white"})),r.a.createElement(v.a,{sm:6,md:4},r.a.createElement(O,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"las la-skull"}),"Deaths"),main:r.a.createElement("span",null,h),footer:r.a.createElement("span",null,(h/a*100).toLocaleString(void 0,{maximumFractionDigits:2}),"% of all cases died."),style:"bg-danger mb-3 text-white"})))},S=a(21),C=Object(n.createContext)();function x(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],h=m[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a),h(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(C.Provider,{value:[l,c]},d?r.a.createElement("div",{className:"uk-width-1-1","uk-spinner":"true"}):e.children)}var N=a(228);function F(e){var t=Object(n.useState)(e.currentPage),a=Object(u.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){c(e.currentPage)}),[e.currentPage]);var i=function(t,a){t.preventDefault(),e.handleClick(a)},s=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[],r=e;r<=t;r+=a)n.push(r);return n},o="...",m=function(){var t=e.numOfPages;if(t>5){var a=Math.max(2,l-1),n=Math.min(l+1,e.numOfPages-1),r=s(a,n),c=a>2,i=t-n>1,u=5-(r.length-1);if(c&&i)r=[1,o].concat(Object(S.a)(r),[o,t]);else if(c&&!i){var m=s(a-u,a-1);r=[1,o].concat(Object(S.a)(m),Object(S.a)(r),[t])}else{var d=s(n+1,n+u);r=[1].concat(Object(S.a)(r),Object(S.a)(d),[o,t])}return r}return s(1,e.numOfPages,1)}();return r.a.createElement(N.a,{size:"sm",className:"uk-pagination"},r.a.createElement(N.a.Prev,{onClick:function(e){console.log("click"),l>1&&i(e,l-1)}}),m.map((function(e,t){return e===o?r.a.createElement(N.a.Ellipsis,{key:t}):r.a.createElement(N.a.Item,{className:l===e?"active":null,onClick:function(t){return i(t,e)},key:t},e)})),r.a.createElement(N.a.Next,{onClick:function(t){console.log("click"),l<e.numOfPages&&i(t,l+1)}}))}var P=a(225),D=a(222);function I(){var e=Object(n.useContext)(C),t=Object(u.a)(e,1)[0],a=Object(n.useState)(5),l=Object(u.a)(a,1)[0],c=Math.ceil(t.length/l),i=Object(n.useState)(Object(S.a)(t)),s=Object(u.a)(i,2),o=s[0],m=s[1],d=Object(n.useState)(o.slice(0,5)),h=Object(u.a)(d,2),p=h[0],f=h[1],E=Object(n.useState)(c),g=Object(u.a)(E,2),b=g[0],v=g[1],y=Object(n.useState)(1),O=Object(u.a)(y,2),k=O[0],w=O[1];return r.a.createElement(n.Fragment,null,r.a.createElement(P.a,null,r.a.createElement("h3",null,"Cases by Country"),r.a.createElement(P.a.Row,{className:"p-3"},r.a.createElement(P.a.Control,{type:"text",placeholder:"Filter country",onChange:function(e){var a=e.target.value,n=t.filter((function(e){return e.country.toLowerCase().includes(a.toLowerCase())}));m(n),f(n.slice(0,l)),v(Math.ceil(n.length/l)),w(1)}}))),r.a.createElement(D.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,p.map((function(e,t){return r.a.createElement("tr",{key:e.country},r.a.createElement("td",null,e.country.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("td",null,e.cases.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("td",null,e.deaths.toLocaleString(void 0,{maximumFractionDigits:0})),r.a.createElement("td",null,e.recovered.toLocaleString(void 0,{maximumFractionDigits:0})))})))),r.a.createElement(F,{handleClick:function(e){var t=o.slice(e*l-l,e*l);f(t),v(Math.ceil(o.length/l)),w(e)},numOfPages:b,currentPage:k}))}var M=a(63),T=a(223),L=a(226),_=a(18);function R(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){w.a.get("https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/age_group/FeatureServer/0/query?",{params:{f:"json",where:"1=1",returnGeometry:!1,spatialRel:"esriSpatialRelIntersects",outFields:"*",groupByFieldsForStatistics:"age_categ,sex",cacheHint:!0,outStatistics:'[{"statisticType":"count","onStatisticField":"FID","outStatisticFieldName":"value"}]'}}).then((function(e){var t=[];e.data.features.map((function(e,a){t.indexOf(e.attributes.age_categ)<=-1&&t.push(e.attributes.age_categ)}));t.sort((function(e,t){return parseInt(e.split(" ")[0])-parseInt(t.split(" ")[0])})),console.log(t);var a=new Array(t.length).fill(0),n=new Array(t.length).fill(0);e.data.features.map((function(e){var r=t.indexOf(e.attributes.age_categ);r>=0&&("Male"===e.attributes.sex?a[r]=e.attributes.value:n[r]=e.attributes.value)})),l({labels:t,datasets:[{label:"Male",backgroundColor:"#265d82",borderColor:"#265d82",borderWidth:1,hoverBackgroundColor:"#265d82",hoverBorderColor:"#265d82",data:a},{label:"Female",backgroundColor:"#c462aa",borderColor:"#c462aa",borderWidth:1,hoverBackgroundColor:"#c462aa",hoverBorderColor:"#c462aa",data:n}]})}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Cases by Age Group"),r.a.createElement(m.a,{data:a}))}var H=function(e){var t=Object(_.f)();return r.a.createElement(M.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement("p",{className:"main-headline"},"COVID-19 Situation in the Philippines"))),r.a.createElement(b.a,{className:"mb-3"},r.a.createElement(v.a,null,r.a.createElement(j,null))),r.a.createElement(b.a,{xs:12,className:"pr-3 pl-3 mb-3"},r.a.createElement(T.a,{variant:"dark",style:{width:"100%"},onClick:function(){return e="/Facilities",void t.push(e);var e}},"View List of Medical Facilities")),r.a.createElement(b.a,{className:"mb-3"},r.a.createElement(v.a,{md:12,lg:12},r.a.createElement(R,null))),r.a.createElement(b.a,null,r.a.createElement(x,null,r.a.createElement(v.a,{md:12,lg:8,className:"mb-3"},r.a.createElement(I,null))),r.a.createElement(v.a,{md:12,lg:4,className:"mb-3"},r.a.createElement(d,null))),r.a.createElement(b.a,null,r.a.createElement(p,null,r.a.createElement(v.a,{sm:12,md:8},r.a.createElement(g,null))),r.a.createElement(v.a,{sm:12,md:4},r.a.createElement(L.a,{defaultActiveKey:"0"},r.a.createElement(y.a,null,r.a.createElement(y.a.Header,null,r.a.createElement(L.a.Toggle,{as:T.a,variant:"link",eventKey:"0"},"What is COVID-19")),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(y.a.Body,null,"According to the World Health Organization, COVID-19(or Coronavirus Disease 2019) is an infectious disease caused by the newly discovered SARS-CoV-2 virus. The most common symptoms are fever, dry cough and, shortness of breath. The elderly and those with preexisting conditions such as heart disease, diabetes, and hypertension are more likely to experience severe symptoms. COVID-19 is now a global pandemic."))),r.a.createElement(y.a,null,r.a.createElement(y.a.Header,null,r.a.createElement(L.a.Toggle,{as:T.a,variant:"link",eventKey:"1"},"Prevention")),r.a.createElement(L.a.Collapse,{eventKey:"1"},r.a.createElement(y.a.Body,null,r.a.createElement("ul",null,r.a.createElement("li",null,"STAY AT HOME. Leave your house ONLY when necessary(like getting basic supplies such as food and medicine)."),r.a.createElement("li",null,"One of the most recommended ways of reducing the risk of being infected and/or spreading the disease is by frequent and thorough handwashing with soap and water. Use alcohol-based sanitizer/disinfectant when soap and water are not available."),r.a.createElement("li",null,"Disinfect frequently touched surfaces. Alcohol-based solutions are recommended."),r.a.createElement("li",null,"Avoid touching your face, especially eyes, nose, or mouth"),r.a.createElement("li",null,"Avoid crowds, and practice social distancing. Maintain at least 3 feet distance from any other person, especially if showing signs of sickness."),r.a.createElement("li",null,"If you believe you are experiencing symptoms related to COVID-19, seek medical attention and follow the orders of your local health authority."))))),r.a.createElement(y.a,null,r.a.createElement(y.a.Header,null,r.a.createElement(L.a.Toggle,{as:T.a,variant:"link",eventKey:"2"},"Contact Info")),r.a.createElement(L.a.Collapse,{eventKey:"2"},r.a.createElement(y.a.Body,null,r.a.createElement("p",null,"For Philippine residents, here are some contact numbers you may find helpful:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Department of Health COVID Hotlines:",r.a.createElement("ul",null,r.a.createElement("li",null,"02-894-COVID (02-894-26843)"),r.a.createElement("li",null,"1555 (Smart and PLDT subscribers)"))),r.a.createElement("li",null,"Department of Health Telephone Nos.:",r.a.createElement("ul",null,r.a.createElement("li",null,"(632) 8651-7800 local 5003-5004 "),r.a.createElement("li",null,"(632) 165-364"))),r.a.createElement("li",null,"Research Institute for Tropical Medicine Telephone Nos.:",r.a.createElement("ul",null,r.a.createElement("li",null,"(+632)8807-2631"),r.a.createElement("li",null,"(+632)8807-2632"),r.a.createElement("li",null,"(+632)8807-2637")))),r.a.createElement("p",null,"Hospitals are in dire need of medical supplies. The ",r.a.createElement("a",{href:"https://bit.ly/forCOVID19frontliners",target:"_blank"},"Kaya Natin! Movement")," is open for donations."),r.a.createElement("p",null,"Alternatively, if you have extra face masks, or other medical equipment ready to donate, the Philippine General Hospital is asking for donations. Tel: (02) 554-8400"),r.a.createElement("p",null,"Thank you to our medical heroes and other frontliners currently working non-stop to help the sick."))))))))},A=a(229),q=a(230),B=a(224),V=a(231);function z(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),o=s[0],m=s[1],d=Object(n.useState)([]),h=Object(u.a)(d,2),p=h[0],E=h[1],g=Object(n.useState)(10),b=Object(u.a)(g,1)[0],v=Object(n.useState)(1),y=Object(u.a)(v,2),O=y[0],k=y[1],j=Object(n.useState)(1),S=Object(u.a)(j,2),C=S[0],x=S[1];Object(n.useEffect)((function(){w.a.get("https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/conf_fac_tracking/FeatureServer/0/query?",{params:{f:"json",where:"1=1",returnGeometry:!1,spatialRel:"esriSpatialRelIntersects",outFields:"*",cacheHint:!0}}).then((function(e){c(e.data.features),E(e.data.features),m(e.data.features.slice(C*b-b,C*b)),k(Math.ceil(e.data.features.length/b))}))}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{className:"p-3"},r.a.createElement(P.a.Row,null,r.a.createElement(P.a.Control,{type:"text",placeholder:"Filter facility",onChange:function(e){e.preventDefault();var t=e.target.value,a=l.filter((function(e){return e.attributes.facility.toLowerCase().includes(t.toLowerCase())}));E(a),m(a.slice(0,b)),k(Math.ceil(a.length/b)),x(1)}}))),r.a.createElement(D.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Facility"))),r.a.createElement("tbody",null,o.map((function(t){return t=t.attributes,r.a.createElement("tr",{key:t.facility},r.a.createElement("td",{onClick:function(){return e.handleClick(t.latitude,t.longitude)}},t.facility,r.a.createElement(f.a,{variant:"info"},t.count_," cases")))})))),r.a.createElement(F,{numOfPages:O,currentPage:C,handleClick:function(e){var t=p.slice(e*b-b,e*b);m(t),x(e)}}))}function W(){var e=Object(n.useState)([11.577942,122.671174]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(5),i=Object(u.a)(c,2),s=i[0],o=i[1];return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,{className:"map-container",center:a,zoom:s},r.a.createElement(q.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(B.a,{position:a},r.a.createElement(V.a,null))),r.a.createElement(M.a,{className:"mt-3 mb-3"},r.a.createElement(b.a,{xs:1,className:"text-center"},r.a.createElement("h1",null,"Facilities Handling COVID-19 Cases"),r.a.createElement("h4",null,"Click on a facility to view map")),r.a.createElement(b.a,{xs:1},r.a.createElement(z,{handleClick:function(e,t){l([e,t]),o(16)}}))))}var G=a(60);var K=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"The page you are looking for does not exist."))};var J=function(){var e={grid:{paddingLeft:0,paddingRight:0},row:{marginLeft:0,marginRight:0},col:{paddingLeft:0,paddingRight:0}};return r.a.createElement(G.a,{basename:"/covid19phstats"},r.a.createElement("div",{className:"warning-lead sticky-top"},r.a.createElement("span",null,"Enhanced Community Quarantine is now in effect in Luzon. Residents are strictly advised to stay home and practice social distancing.")),r.a.createElement(M.a,{fluid:!0,style:e.grid},r.a.createElement(b.a,{style:e.row},r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:H}),r.a.createElement(_.a,{path:"/Facilities",exact:!0,component:W}),r.a.createElement(_.a,{component:K}))),r.a.createElement(b.a,{style:e.row},r.a.createElement(v.a,{xs:12,className:"footer"},r.a.createElement(M.a,null,r.a.createElement("p",null,"Sources and other useful links:"),r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:12,md:4},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.doh.gov.ph/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"Department of Health")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"Centers for Disease Control and Prevention")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"World Health Organization (COVID-19)")))),r.a.createElement(v.a,{sm:12,md:4},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/OfficialDOHgov/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"DOH Official Facebook Page")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/Philippines/comments/fjlbz1/megathread_covid19_philippines/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"COVID-19 Megathread in /r/Philippines")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=qgylp3Td1Bw",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"COVID-19 Stats Livestream (Roylab Stats)")))),r.a.createElement(v.a,{sm:12,md:4},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://news.abs-cbn.com/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"ABS-CBN News")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.gmanetwork.com/news/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"GMA News")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://cnnphilippines.com/",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},"CNN Philippines"))))))),r.a.createElement(v.a,{xs:12,className:"footer-bottom"},r.a.createElement("span",{className:"uk-text-muted"},"Stay safe. ",r.a.createElement("span",{role:"img"},"\ud83d\ude37"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.74f6f9fc.chunk.js.map