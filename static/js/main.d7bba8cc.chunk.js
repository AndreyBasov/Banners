(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{124:function(e,t,a){e.exports=a(241)},241:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),i=a(85),u=a(15),c=a(113),s=a.n(c),m=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(s.a,null),"Banners"))},d=function(){var e=(new Date).getFullYear();return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",null,"Andrey Basov \u24d2 ",e))},p=a(115),b=a.n(p),v=a(42),E=a.n(v),g=a(258),y=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),c=Object(u.a)(i,2),s=c[0],m=c[1];return o.a.createElement("div",null,o.a.createElement("div",{onClick:function(t){e.onBannerClick(e.id),t.stopPropagation()},className:"note"},o.a.createElement("img",{style:r?{display:"none"}:{},src:e.src,onLoad:function(){return l({loading:!1})},alt:"banner"}),o.a.createElement("img",{src:e.url,alt:e.id}),o.a.createElement("h1",{style:{color:e.color}},e.title.substring(0,30)),o.a.createElement("button",{className:"delete-button",onClick:function(t){e.onDelete(e.id),t.stopPropagation()}},o.a.createElement(b.a,null)),o.a.createElement("button",{className:"download-button",onClick:function(e){m(!0),e.stopPropagation()}},o.a.createElement(E.a,null))),o.a.createElement(g.a,{centered:!0,show:s,onHide:function(e){m(!1)}},o.a.createElement(g.a.Body,null,o.a.createElement("div",{className:"download-field"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u043a .png"),o.a.createElement("a",{href:e.url,download:e.id+".png"},o.a.createElement("button",null,o.a.createElement(E.a,null))))),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"),o.a.createElement("button",{onClick:function(t){var a=document.createElement("textarea");a.value=e.url,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}},o.a.createElement(E.a,null)))),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c json"),o.a.createElement("button",{onClick:function(t){var a=document.createElement("textarea");a.value=JSON.stringify({title:e.title,content:e.content,url:e.url}),document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}},o.a.createElement(E.a,null))))))))},f=[{title:"\u041a\u0430\u043a \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u043f\u043e\u0441\u044b\u043b\u043a\u0438",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",url:"https://www.avito.st/s/app/i/story-previews/story-50/preview@3x.jpg",color:"#120078"},{title:"\u0411\u0438\u0437\u043d\u0435\u0441 \u043d\u0430 \u0410\u0432\u0438\u0442\u043e",content:"Lorem ipsum dolor sit amet,  invidunt ut labore et dolore magna. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",url:"https://www.avito.st/s/app/i/story-previews/story-49/preview@3x.jpg",color:"#000000"},{title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",url:"https://www.avito.st/s/app/i/story-previews/story-48/preview@2x.jpg",color:"#db6400"},{title:"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u043f\u0440\u0430\u0432\u0434\u0443 \u043e \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",url:"https://www.avito.st/s/app/i/story-previews/story-47/preview@3x.jpg",color:"#120078"},{title:"C\u0441\u044b\u043b\u043a\u0438 - \u044d\u0442\u043e \u043e\u043f\u0430\u0441\u043d\u043e",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",url:"https://www.avito.st/s/app/i/story-previews/story-46/preview@2x.jpg",color:"#bb2205"},{title:"\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0439\u043d\u0435",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",url:"https://www.avito.st/s/app/i/story-previews/story-43/preview@2x.jpg",color:"#cd0a0a"}],w=a(44),j=a(84),h=a.n(j),k=a(260),C=a(261),O=a(257),L=a(120),S=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],l=a[1],i=function(){return l(!1)},c=Object(n.useState)({title:"",content:"",url:"",color:"#000"}),s=Object(u.a)(c,2),m=s[0],d=s[1],p=function(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(w.a)(Object(w.a)({},e),{},{[a]:n})}))},b=Object(n.useState)("#fff"),v=Object(u.a)(b,2),E=v[0],y=v[1];return o.a.createElement("div",{className:"note"},o.a.createElement(O.a,{onClick:function(){d({title:"",content:"",url:"",color:"#000"}),l(!0)}},o.a.createElement(h.a,null)),o.a.createElement(g.a,{centered:!0,show:r,onHide:i},o.a.createElement(g.a.Body,null,o.a.createElement("p",{className:"form-title"},"Enter the parameters of a new banner!"),o.a.createElement("form",{className:"create-note"},o.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title",autoComplete:"off"}),o.a.createElement("hr",null),o.a.createElement("textarea",{name:"content",onChange:p,value:m.content,placeholder:"Content",rows:"3"}),o.a.createElement("hr",null),o.a.createElement("textarea",{name:"url",onChange:p,value:m.url,placeholder:"URL of an image",rows:"1"}),o.a.createElement(C.a,{in:r},o.a.createElement(k.a,{onClick:function(t){e.onAdd(m),i(),t.preventDefault()}},o.a.createElement(h.a,null)))),o.a.createElement(L.a,{color:E,onChange:function(e){y(e.hex),d((function(t){return Object(w.a)(Object(w.a)({},t),{},{color:e.hex})}))}}),o.a.createElement("h2",null,"The color you picked: ",E," "))))},x=a(259),A=function(){var e=Object(n.useState)(Object(i.a)(f)),t=Object(u.a)(e,2),a=t[0],r=t[1],l=function(e){r((function(t){return t.filter((function(t,a){return a!==e}))}))},c=Object(n.useState)(0),s=Object(u.a)(c,2),p=s[0],b=s[1],v=Object(n.useState)(!1),E=Object(u.a)(v,2),w=E[0],j=E[1],h=function(e){b(e),j(!0)};return o.a.createElement("div",null,o.a.createElement(m,null),a.map((function(e,t){return o.a.createElement(y,{key:t,id:t,title:e.title,content:e.content,url:e.url,color:e.color,onDelete:l,onBannerClick:h})})),o.a.createElement(S,{onAdd:function(e){r((function(t){return[].concat(Object(i.a)(t),[e])}))}}),o.a.createElement(g.a,{centered:!0,show:w,onHide:function(){return j(!1)}},o.a.createElement(g.a.Body,null,o.a.createElement(x.a,{activeIndex:p,onSelect:function(e,t){b(e)}},a.map((function(e,t){return o.a.createElement(x.a.Item,null,o.a.createElement("img",{className:"carousel-img d-block w-100",src:e.url,alt:"A slide"}),o.a.createElement(x.a.Caption,null,o.a.createElement("h3",{style:{color:e.color}},e.title.substring(0,30)),o.a.createElement("p",{style:{color:e.color,textAlign:"justify"}},e.content.substring(0,400))))}))))),o.a.createElement(d,null))};l.a.render(o.a.createElement(A,null),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.d7bba8cc.chunk.js.map