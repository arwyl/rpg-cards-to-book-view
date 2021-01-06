(function(e){function t(t){for(var n,a,l=t[0],i=t[1],u=t[2],s=0,p=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"08c1":function(e,t,r){},"1d3f":function(e,t,r){"use strict";r("4997")},"2d9c":function(e,t,r){},"3d6b":function(e,t,r){"use strict";r("a6e0")},"3fbb":function(e,t,r){"use strict";r("08c1")},4997:function(e,t,r){},"4a8c":function(e,t,r){"use strict";r("2d9c")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("6c42"),c=(r("da96"),Object(n["withScopeId"])("data-v-7e40db85"));Object(n["pushScopeId"])("data-v-7e40db85");var a={class:"container"},l={class:"nonprintable"},i=Object(n["createVNode"])("h2",null,"rpg-cards-to-book-view",-1),u=Object(n["createVNode"])("br",null,null,-1),d=Object(n["createVNode"])("div",{class:"p-3 mb-2 bg-info text-dark"},[Object(n["createTextVNode"])(" Load any number of .json files with arrays of "),Object(n["createVNode"])("a",{target:"_blank",href:"https://crobi.github.io/rpg-cards/"},"rpg cards"),Object(n["createTextVNode"])(" and press Print. "),Object(n["createVNode"])("br"),Object(n["createTextVNode"])(" You can reorder cards anyway you want by dragging their title. "),Object(n["createVNode"])("br"),Object(n["createTextVNode"])(" Tested only in "),Object(n["createVNode"])("a",{target:"_blank",href:"https://www.google.com/chrome/"},"Google Chrome"),Object(n["createTextVNode"])(". Probably will work in any "),Object(n["createVNode"])("strong",null,"modern"),Object(n["createTextVNode"])(" browser. ")],-1),s=Object(n["createTextVNode"])(" Loaded cards: "),p={id:"span-count"},b=Object(n["createVNode"])("label",null,"Sorting",-1),m={class:"d-flex d-flex-row"},O={class:"p-2"},f={class:"p-2"},j={class:"p-2"},v={class:"p-2"},h={class:"p-2"},V={class:"form-check"},g=Object(n["createVNode"])("label",{class:"form-check-label",for:"cb-useSimplifiedView"}," Use simplified view ",-1),y=Object(n["createVNode"])("hr",null,null,-1);Object(n["popScopeId"])();var N=c((function(e,t,r,o,N,T){var S=Object(n["resolveComponent"])("card-sorter"),E=Object(n["resolveComponent"])("rpg-cards-loader"),k=Object(n["resolveComponent"])("card-simplified"),w=Object(n["resolveComponent"])("draggable"),B=Object(n["resolveComponent"])("card");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])("section",l,[i,u,d,Object(n["createVNode"])("p",null,[s,Object(n["createVNode"])("span",p,Object(n["toDisplayString"])(N.cards.length),1)]),b,Object(n["createVNode"])(S,{onSortChanged:T.sort},null,8,["onSortChanged"]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])("div",O,[Object(n["createVNode"])(E,{onLoaded:T.load,onOnError:T.onError},null,8,["onLoaded","onOnError"])]),Object(n["createVNode"])("div",f,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return e.download&&e.download.apply(e,arguments)})}," Save to file ")]),Object(n["createVNode"])("div",j,[Object(n["createVNode"])("button",{class:"btn btn-danger",type:"button",onClick:t[2]||(t[2]=function(){return T.clear&&T.clear.apply(T,arguments)})}," Clear cards ")]),Object(n["createVNode"])("div",v,[Object(n["createVNode"])("button",{class:"btn btn-success",type:"button",onClick:t[3]||(t[3]=function(){return T.print&&T.print.apply(T,arguments)})}," Print ")]),Object(n["createVNode"])("div",h,[Object(n["createVNode"])("div",V,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"cb-useSimplifiedView","onUpdate:modelValue":t[4]||(t[4]=function(e){return N.useSimplifiedView=e})},null,512),[[n["vModelCheckbox"],N.useSimplifiedView]]),g])])]),y]),Object(n["createVNode"])("section",null,[N.useSimplifiedView?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:0,modelValue:N.cards,"onUpdate:modelValue":t[5]||(t[5]=function(e){return N.cards=e}),"item-key":"title",onChange:T.store,"drag-class":"rpg-card-drag"},{item:c((function(e){var t=e.element;return[Object(n["createVNode"])(k,{modelValue:t},null,8,["modelValue"])]})),_:1},8,["modelValue","onChange"])):(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:1,modelValue:N.cards,"onUpdate:modelValue":t[6]||(t[6]=function(e){return N.cards=e}),"item-key":"title",onChange:T.store,"drag-class":"rpg-card-drag",handle:".title"},{item:c((function(e){var t=e.element;return[Object(n["createVNode"])(B,{modelValue:t},null,8,["modelValue"])]})),_:1},8,["modelValue","onChange"]))])])})),T=(r("4de4"),r("d81d"),Object(n["withScopeId"])("data-v-85ba68fc")),S=T((function(e,t,r,o,c,a){var l=Object(n["resolveComponent"])("title-el"),i=Object(n["resolveComponent"])("bullet"),u=Object(n["resolveComponent"])("description"),d=Object(n["resolveComponent"])("dndstats"),s=Object(n["resolveComponent"])("picture-el"),p=Object(n["resolveComponent"])("property"),b=Object(n["resolveComponent"])("section-el"),m=Object(n["resolveComponent"])("subtitle"),O=Object(n["resolveComponent"])("text-el");return Object(n["openBlock"])(),Object(n["createBlock"])("article",null,[Object(n["createVNode"])(l,{modelValue:r.modelValue.title},null,8,["modelValue"]),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.modelValue.elements,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[e.type===c.types.BULLET?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.DESCRIPTION?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.DNDSTATS?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.PICTURE?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.PROPERTY?(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.SECTION?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.SUBTITLE?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0),e.type===c.types.TEXT?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:t,modelValue:e},null,8,["modelValue"])):Object(n["createCommentVNode"])("",!0)],64)})),256))])}));r("b0c0");function E(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("ul",null,[Object(n["createVNode"])("li",{innerHTML:r.modelValue.name},null,8,["innerHTML"])])}var k=r("d4ec"),w=r("262e"),B=r("2caf"),C={SUBTITLE:"subtitle",PROPERTY:"property",DESCRIPTION:"description",BULLET:"bullet",PICTURE:"picture",TEXT:"text",SECTION:"section",DNDSTATS:"dndstats",UNKNOWN:"unknown"},I=function e(t){if(Object(k["a"])(this,e),!t)throw new Error("Argumet 'type' should have value");this.type=t},L=I,P=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;if(Object(k["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return n=t.call(this,C.BULLET),n.name=e,n}return r}(L),x=P,D={name:"Bullet",props:{modelValue:x}};D.render=E;var M=D,R=Object(n["createTextVNode"])(": ");function U(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",{innerHTML:r.modelValue.name},null,8,["innerHTML"]),R,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])}var _=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(k["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,C.DESCRIPTION),o.name=e,o.value=n,o}return r}(L),A=_,H={name:"Description",props:{modelValue:A}};H.render=U;var J=H,Y=Object(n["withScopeId"])("data-v-fd62a7ce");Object(n["pushScopeId"])("data-v-fd62a7ce");var F=Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("th",null,"STR"),Object(n["createVNode"])("th",null,"DEX"),Object(n["createVNode"])("th",null,"CON"),Object(n["createVNode"])("th",null,"INT"),Object(n["createVNode"])("th",null,"WIS"),Object(n["createVNode"])("th",null,"CHA")],-1);Object(n["popScopeId"])();var z=Y((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("table",null,[Object(n["createVNode"])("tbody",null,[F,Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.str)+" ("+Object(n["toDisplayString"])(r.modelValue.strMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.dex)+" ("+Object(n["toDisplayString"])(r.modelValue.dexMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.con)+" ("+Object(n["toDisplayString"])(r.modelValue.conMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.int)+" ("+Object(n["toDisplayString"])(r.modelValue.intMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.wis)+" ("+Object(n["toDisplayString"])(r.modelValue.wisMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.cha)+" ("+Object(n["toDisplayString"])(r.modelValue.chaMod)+")",1)])])])])})),X=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n,o,c,a,l){var i;Object(k["a"])(this,r),i=t.call(this,C.DNDSTATS);for(var u=[10,10,10,10,10,10],d=[0,0,0,0,0,0],s=[e,n,o,c,a,l],p=0;p<6;++p){u[p]=s[p]||0;var b=Math.floor((u[p]-10)/2);b=b>=0?"+"+b:""+b,d[p]=b}return i.str=u[0],i.dex=u[1],i.con=u[2],i.int=u[3],i.wis=u[4],i.cha=u[5],i.strMod=d[0],i.dexMod=d[1],i.conMod=d[2],i.intMod=d[3],i.wisMod=d[4],i.chaMod=d[5],i}return r}(L),W=X,G={name:"DndStats",props:{modelValue:W}};r("5abf");G.render=z,G.__scopeId="data-v-fd62a7ce";var $=G,K=Object(n["withScopeId"])("data-v-53a3fc5b"),q=K((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{style:{backgroundImage:"url("+r.modelValue.url+")",height:r.modelValue.height+"px"}},null,4)})),Q=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;return Object(k["a"])(this,r),o=t.call(this,C.PICTURE),o.url=e,o.height=n,o}return r}(L),Z=Q,ee={name:"Picture",props:{modelValue:Z}};r("5aa0");ee.render=q,ee.__scopeId="data-v-53a3fc5b";var te=ee,re=Object(n["createTextVNode"])(": ");function ne(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",{innerHTML:r.modelValue.name},null,8,["innerHTML"]),re,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])}var oe=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(k["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,C.PROPERTY),o.name=e,o.value=n,o}return r}(L),ce=oe,ae={name:"Property",props:{modelValue:ce}};ae.render=ne;var le=ae,ie=Object(n["withScopeId"])("data-v-5b6c406c");Object(n["pushScopeId"])("data-v-5b6c406c");var ue=Object(n["createTextVNode"])(": ");Object(n["popScopeId"])();var de=ie((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",null,[Object(n["createVNode"])("u",{innerHTML:r.modelValue.name},null,8,["innerHTML"])]),ue,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])})),se=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(k["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,C.SECTION),o.name=e,o.value=n,o}return r}(L),pe=se,be={name:"Section",props:{modelValue:pe}};r("4a8c");be.render=de,be.__scopeId="data-v-5b6c406c";var me=be,Oe=Object(n["withScopeId"])("data-v-5267e49c"),fe=Oe((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("em",{innerHTML:r.modelValue.name},null,8,["innerHTML"])])})),je=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;if(Object(k["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return n=t.call(this,C.SUBTITLE),n.name=e,n}return r}(L),ve=je,he={name:"Subtitle",props:{modelValue:ve}};r("a811");he.render=fe,he.__scopeId="data-v-5267e49c";var Ve=he;function ge(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{innerHTML:r.modelValue.text},null,8,["innerHTML"])}var ye=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;return Object(k["a"])(this,r),n=t.call(this,C.TEXT),n.text=e,n}return r}(L),Ne=ye,Te={name:"Text",props:{modelValue:Ne}};Te.render=ge;var Se=Te,Ee=Object(n["withScopeId"])("data-v-1d06bc7e");Object(n["pushScopeId"])("data-v-1d06bc7e");var ke={class:"title"};Object(n["popScopeId"])();var we=Ee((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",ke,[Object(n["createVNode"])("strong",null,Object(n["toDisplayString"])(r.modelValue),1)])})),Be={name:"Title",props:{modelValue:String}};r("d042");Be.render=we,Be.__scopeId="data-v-1d06bc7e";var Ce=Be,Ie=function e(t,r,n,o,c,a,l,i){if(Object(k["a"])(this,e),!t)throw new Error("Argumet 'title' should have value");this.title=t,this.elements=a||[],this.tags=l||[],this.count=i||1,this.icon=r,this.color=n,this.iconBack=o,this.backgroundImage=c},Le=Ie,Pe={name:"Card",props:{modelValue:Le},data:function(){return{types:C}},components:{bullet:M,description:J,dndstats:$,"picture-el":te,property:le,"section-el":me,subtitle:Ve,"text-el":Se,"title-el":Ce}};r("3d6b");Pe.render=S,Pe.__scopeId="data-v-85ba68fc";var xe=Pe,De=Object(n["withScopeId"])("data-v-48fd43fa"),Me=De((function(e,t,r,o,c,a){var l=Object(n["resolveComponent"])("title-el");return Object(n["openBlock"])(),Object(n["createBlock"])("article",null,[Object(n["createVNode"])(l,{modelValue:r.modelValue.title},null,8,["modelValue"])])})),Re={name:"CardSimplified",props:{modelValue:Le},components:{"title-el":Ce}};r("3fbb");Re.render=Me,Re.__scopeId="data-v-48fd43fa";var Ue=Re,_e={class:"d-flex d-flex-row"},Ae={class:"p-2"},He={key:1,class:"p-2"},Je={class:"p-2"},Ye={class:"form-check"},Fe=Object(n["createVNode"])("label",{class:"form-check-label",for:"cb-sortDesc"}," Descending ",-1),ze={class:"p-2"};function Xe(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("section",null,[Object(n["createVNode"])("div",_e,[Object(n["createVNode"])("div",Ae,[Object(n["withDirectives"])(Object(n["createVNode"])("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.by=e}),onChange:t[2]||(t[2]=function(e){return r.byElement=c.cardElementSort.SUBTITLE})},[Object(n["createVNode"])("option",{value:c.cardSort.TITLE},"Title",8,["value"]),Object(n["createVNode"])("option",{value:c.cardSort.SPELLEVEL}," Spell level (experimental) ",8,["value"]),Object(n["createVNode"])("option",{value:c.cardSort.ELEMENT},"Element",8,["value"]),Object(n["createVNode"])("option",{value:c.cardSort.FIRSTTAG},"First tag name",8,["value"])],544),[[n["vModelSelect"],r.by]])]),r.by===c.cardSort.ELEMENT?(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:0,class:"p-2",onChange:t[4]||(t[4]=function(e){return r.propertyName=""})},[Object(n["withDirectives"])(Object(n["createVNode"])("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.byElement=e})},[Object(n["createVNode"])("option",{value:c.cardElementSort.SUBTITLE},"Subtitle",8,["value"]),Object(n["createVNode"])("option",{value:c.cardElementSort.PROPERTY}," First property with name ",8,["value"])],512),[[n["vModelSelect"],r.byElement]])],32)):Object(n["createCommentVNode"])("",!0),r.byElement===c.cardElementSort.PROPERTY?(Object(n["openBlock"])(),Object(n["createBlock"])("div",He,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-control",type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.propertyName=e}),placeholder:"Enter property name"},null,512),[[n["vModelText"],r.propertyName]])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",Je,[Object(n["createVNode"])("div",Ye,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"cb-sortDesc","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.desc=e})},null,512),[[n["vModelCheckbox"],r.desc]]),Fe])]),Object(n["createVNode"])("div",ze,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[7]||(t[7]=function(){return a.sort&&a.sort.apply(a,arguments)})}," Sort ")])])])}r("c975");var We={TITLE:"title",SPELLEVEL:"spelllLevel",ELEMENT:"element",FIRSTTAG:"firstTag"},Ge={SUBTITLE:"subtitle",PROPERTY:"property"},$e={name:"CardSorter",emits:["sortChanged"],props:{by:{type:String,default:function(){return We.TITLE}},byElement:{type:String,default:function(){return Ge.SUBTITLE}},propertyName:String,desc:Boolean},data:function(){return{cardSort:We,cardElementSort:Ge}},methods:{sort:function(e){var t=this,r=null;this.by===We.SPELLEVEL?r=function(e){return e.elements.filter((function(e){return e.type===C.SUBTITLE})).map((function(e){return!e.name||-1===e.name.indexOf("Cantrip")&&-1===e.name.indexOf("cantrip")?parseInt(e.name,10)||(t.desc?-1:999):0}))[0]}:this.by===We.ELEMENT?r=this.byElement===Ge.SUBTITLE?function(e){return e.elements.filter((function(e){return e.type===C.SUBTITLE})).map((function(e){return e.name}))[0]}:function(e){return e.elements.filter((function(e){return e.type===C.PROPERTY&&e.name===t.propertyName})).map((function(e){return e.name}))[0]}:"firstTag"===this.by&&(r=function(e){return e.tags[0]}),this.$emit("sortChanged",{elementSelector:r,desc:this.desc}),e.target.blur()}}};$e.render=Xe;var Ke=$e,qe={style:{display:"none"}};function Qe(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return a.openDialog&&a.openDialog.apply(a,arguments)})}," Load from json files "),Object(n["createVNode"])("form",qe,[Object(n["createVNode"])("input",{type:"file",id:"file-load",name:"files[]",multiple:"",accept:"application/JSON",onChange:t[2]||(t[2]=function(){return a.load&&a.load.apply(a,arguments)})},null,32)])])}r("99af");var Ze=function e(t,r){Object(k["a"])(this,e),this.message=t,this.error=r},et=Ze,tt={name:"RpgCardsLoader",emits:["loaded","onError"],methods:{openDialog:function(e){document.getElementById("file-load").click(),e.target.blur()},load:function(e){for(var t,r=this,n=e.target.files,o=n.length,c=function(){r.$emit("loaded",{rpgCards:a})},a=[],l=function(e,t){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);a=a.concat(e)}catch(t){r.$emit("onError",{exception:new et("File is not in correct format.",t)})}--o||c()},n.readAsText(t)},i=0;t=n[i];i++)l(i,t);e.srcElement.form.reset()}}};tt.render=Qe;var rt=tt,nt=r("b76a"),ot=r.n(nt),ct=function(e){Object(w["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;return Object(k["a"])(this,r),o=t.call(this,C.UNKNOWN),o.name=e,o.params=n,o}return r}(L),at=ct,lt="rpg-cards-v3";function it(e){switch(e.type){case C.BULLET:return new x(e.name);case C.DESCRIPTION:return new A(e.name,e.value);case C.PICTURE:return new Z(e.url,e.height);case C.PROPERTY:return new ce(e.name,e.value);case C.SECTION:return new pe(e.name,e.value);case C.SUBTITLE:return new ve(e.name);case C.TEXT:return new Ne(e.text);case C.DNDSTATS:return new W(e.str,e.dex,e.con,e.int,e.wis,e.cha);case C.UNKNOWN:return new at(e.name,e.params);default:throw new Error("Unknown element from storage "+JSON.stringify(e))}}function ut(e){if(!e)throw new Error("Argumet 'card' should have value");var t=e.elements.map((function(e){return it(e)}));return new Le(e.title,e.icon,e.color,e.iconBack,e.backgroundImage,t,e.tags,e.count)}function dt(){var e=localStorage.getItem(lt);if(e){var t=JSON.parse(e),r=t.map((function(e){return ut(e)}));return r}}function st(e){localStorage.setItem(lt,e?JSON.stringify(e):void 0)}function pt(){return localStorage.removeItem(lt)}var bt={get:dt,set:st,clear:pt},mt=(r("a15b"),r("a434"),r("ac1f"),r("1276"),r("498a"),r("4478")),Ot=r("2909"),ft=(r("4d63"),r("25f0"),r("c0c4")),jt=r.n(ft);function vt(e){return jt.a.sanitize(e,{ALLOWED_TAGS:["b"]})}function ht(e){var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!t.test(e)}function Vt(e){return ht(e)?e:void 0}var gt={purify:vt,purifyUrl:Vt},yt=" | ";function Nt(e,t){switch(e){case C.BULLET:return new x(gt.purify(t[0]));case C.DESCRIPTION:return new A(gt.purify(t[0]),gt.purify(t[1]));case C.PICTURE:return new Z(gt.purifyUrl(t[0]),parseInt(t[1],10));case C.PROPERTY:return new ce(gt.purify(t[0]),gt.purify(t[1]));case C.SECTION:return new pe(gt.purify(t[0]),gt.purify(t[1]));case C.SUBTITLE:return new ve(gt.purify(t[0]));case C.TEXT:return new Ne(gt.purify(t[0]));case C.DNDSTATS:return Object(mt["a"])(W,Object(Ot["a"])(t.map((function(e){return parseInt(e,10)}))));default:return new at(e,t)}}function Tt(e){switch(e.type){case C.BULLET:return[e.type,e.name].join(yt);case C.DESCRIPTION:return[e.type,e.name,e.value].join(yt);case C.PICTURE:return[e.type,e.url,e.height].join(yt);case C.PROPERTY:return[e.type,e.name,e.value].join(yt);case C.SECTION:return[e.type,e.name,e.value].join(yt);case C.SUBTITLE:return[e.type,e.name].join(yt);case C.TEXT:return[e.type,e.name].join(yt);case C.DNDSTATS:return[e.type,e.str,e.dex,e.con,e.int,e.wis,e.cha].join(yt);default:return[e.name].concat(Object(Ot["a"])(e.params)).join(yt)}}function St(e){if(!e)throw new Error("Argumet 'rpgCardJson' should have value");var t=(e.contents||[]).map((function(e){return e.split(yt).map((function(e){return e.trim()}))})),r=t.map((function(e){return Nt(e[0],e.splice(1))})),n=(e.tags||[]).map((function(e){return e.trim().toLowerCase()}));return new Le(e.title,e.icon,e.color,e.icon_back,e.background_image,r,n,e.count)}function Et(e){if(!e)throw new Error("Argumet 'card' should have value");var t=e.elements.map((function(e){return Tt(e)})).join("\r\n");return{title:e.title,count:e.count,icon:e.icon,color:e.color,icon_back:e.iconBack,background_image:e.backgroundImage,contents:t,tags:e.tags}}var kt={fromRpgCardJson:St,toRpgCardJson:Et};function wt(e,t,r){return e.sort((function(e,n){if(t){var o=t(e),c=t(n);if(r){if(o>c)return-1;if(o<c)return 1}else{if(o<c)return-1;if(o>c)return 1}}if(r){if(e.title>n.title)return-1;if(e.title<n.title)return 1}else{if(e.title<n.title)return-1;if(e.title>n.title)return 1}return 0}))}var Bt,Ct=wt,It=Object(o["b"])();function Lt(e){console.error(e.message,e),It.error(e.message+"\nSee console output for details.")}try{Bt=bt.get()}catch(Mt){Lt(new et("Error during loading cards from storage.",Mt))}var Pt={name:"App",data:function(){return{cards:Bt||[],useSimplifiedView:!1}},methods:{store:function(){bt.set(this.cards)},sort:function(e){this.cards=Ct(this.cards,e.elementSelector,e.desc),this.store()},load:function(e){var t=e.rpgCards.map((function(e){try{var t=kt.fromRpgCardJson(e);return t}catch(Mt){return void Lt(new et("Error during parsing file.",Mt))}})).filter((function(e){return e}));this.cards=t,this.store()},clear:function(e){bt.clear(),this.cards=[],e.target.blur()},print:function(e){window.print(),e.target.blur()},onError:function(e){Lt(e.exception)}},components:{card:xe,"card-simplified":Ue,draggable:ot.a,"card-sorter":Ke,"rpg-cards-loader":rt}};r("c650"),r("1d3f");Pt.render=N,Pt.__scopeId="data-v-7e40db85";var xt=Pt,Dt=Object(n["createApp"])(xt);Dt.use(o["a"],{position:"bottom-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),Dt.mount("#app")},"5aa0":function(e,t,r){"use strict";r("f87e")},"5abf":function(e,t,r){"use strict";r("ca5d")},a6e0:function(e,t,r){},a745:function(e,t,r){},a811:function(e,t,r){"use strict";r("db32")},c650:function(e,t,r){"use strict";r("d416")},ca5d:function(e,t,r){},d042:function(e,t,r){"use strict";r("a745")},d416:function(e,t,r){},db32:function(e,t,r){},f87e:function(e,t,r){}});
//# sourceMappingURL=app.035ee223.js.map