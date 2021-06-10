(this.webpackJsonpmeetbot=this.webpackJsonpmeetbot||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),s=n.n(o),i=(n(28),n(2)),c=n(6),u=n(4),l=n(3),d=n.p+"static/media/logo.462aee1a.svg",h=(n(29),n(30),n(0)),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleToggleEvent=function(){e.setState({isCollapsed:!0!==e.state.isCollapsed})},e.showCollapsedEvent=function(){var t=e.props.event;if(!1===e.state.isCollapsed)return Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("h3",{children:"About event:"}),Object(h.jsx)("a",{href:t.htmlLink,className:"event-link",target:"_blank",rel:"noreferrer",children:"See details on Google Calendar"}),Object(h.jsx)("p",{className:"event-description",children:t.description}),Object(h.jsx)("p",{className:"event-status",children:t.status})]})},e.state={isCollapsed:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(h.jsxs)("div",{className:"Event",children:[Object(h.jsx)("h3",{className:"event-summary",children:e.summary}),Object(h.jsxs)("p",{className:"event-start-date",children:[e.start.dateTime,", ",e.start.timeZone]}),Object(h.jsxs)("p",{className:"event-end-date",children:[e.end.dateTime,", ",e.end.timeZone]}),Object(h.jsx)("p",{className:"event-location",children:e.location}),Object(h.jsx)("button",{type:"button",className:"btn-toggle-event",onClick:this.handleToggleEvent,children:"Details"}),this.showCollapsedEvent()]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsxs)("ul",{className:"EventList",children:[Object(h.jsx)("h2",{children:"Events:"}),e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(f,{event:e})},e.id)}))]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"400",fontSize:"1.2rem"}},a.color="blue",a}return n}(v),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"900",fontSize:"1rem"}},a.color="orange",a}return n}(v),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"700",fontSize:"1.4rem"}},a.color="red",a}return n}(v),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Sorry, we can not find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,0)},e.state={query:"",suggestions:[],showSuggestions:void 0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("h2",{children:"Please enter a city:"}),Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Search events by city here",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]}),Object(h.jsx)(m,{text:this.state.infoText})]})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:n,errorText:"Please select a number from 1 to 32 events"}):(e.setState({numberOfEvents:n,errorText:""}),e.props.updateEvents("",n))},e.state={numberOfEvents:32},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"NumberOfEvents",children:[Object(h.jsx)("h2",{children:"Please select a number of events:"}),Object(h.jsx)("input",{type:"number",className:"input-number-events",min:"1",max:"32",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(h.jsx)(g,{text:this.state.errorText})]})}}]),n}(a.Component),O=n(23),x=n(7),y=n.n(x),k=n(8),S=n(10),T=n.n(S),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=n(9),N=n.n(C),Z=function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(O.a)(new Set(t))},M=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",E);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",JSON.parse(t).events);case 8:return e.next=10,q();case 10:if(!(n=e.sent)){e.next=20;break}return W(),a="https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,T.a.get(a);case 16:return(r=e.sent).data&&(o=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){e.mounted=!0,M().then((function(a){var r="all"===t&&0===n?a:"all"!==t&&0===n?a.filter((function(e){return e.location===t})):a.slice(0,n);e.mounted&&e.setState({events:r,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:32},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently using the app offline. Events may be out of date."}),M().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:L(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("img",{src:d,alt:"Logo",className:"logo-web",width:"300",height:"100"}),Object(h.jsx)("h1",{children:"Meetbot"}),Object(h.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(w,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(h.jsx)(b,{text:this.state.warningText}),Object(h.jsx)(p,{events:this.state.events})]})}}]),n}(a.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(22).config("e1684a1fb3644b0aae4c2db6df955548").install(),s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetbot",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetbot","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),U()}},[[51,1,2]]]);
//# sourceMappingURL=main.9dfa0d85.chunk.js.map