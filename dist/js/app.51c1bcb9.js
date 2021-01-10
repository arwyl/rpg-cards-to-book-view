(function(e){function t(t){for(var n,c,l=t[0],i=t[1],u=t[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0889":function(e,t,r){"use strict";r("1a1f")},"1a1f":function(e,t,r){},"1d40":function(e,t,r){},"2d9c":function(e,t,r){},"4a8c":function(e,t,r){"use strict";r("2d9c")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("6c42"),a=(r("da96"),Object(n["withScopeId"])("data-v-2c8a5406"));Object(n["pushScopeId"])("data-v-2c8a5406");var c={class:"container"},l={class:"d-print-none"},i=Object(n["createVNode"])("section",null,[Object(n["createVNode"])("h2",null,"rpg-cards-to-book-view")],-1),u=Object(n["createVNode"])("section",{class:"mt-4 p-3 bg-info text-dark"},[Object(n["createTextVNode"])(" Load any number of .json files with arrays of "),Object(n["createVNode"])("a",{target:"_blank",href:"https://crobi.github.io/rpg-cards/"},"rpg cards"),Object(n["createTextVNode"])(" and press Print. "),Object(n["createVNode"])("br"),Object(n["createTextVNode"])(" You can reorder cards anyway you want by dragging their title. "),Object(n["createVNode"])("br"),Object(n["createTextVNode"])(" Tested only in "),Object(n["createVNode"])("a",{target:"_blank",href:"https://www.google.com/chrome/"},"Google Chrome"),Object(n["createTextVNode"])(". Probably will work in any "),Object(n["createVNode"])("strong",null,"modern"),Object(n["createTextVNode"])(" browser. ")],-1),s={class:"mt-3"},d=Object(n["createVNode"])("h6",null,"Sorting",-1),p={class:"row g-2 mt-2 align-items-center"},b={class:"col-md-auto"},m={class:"col-md-auto"},f={class:"col-md-auto"},h={class:"col-md-auto"},O={class:"col-md-auto"},g={class:"col-md-auto"},j={class:"form-check"},v=Object(n["createVNode"])("label",{class:"form-check-label",for:"cb-useSimplifiedView"}," Use simplified view ",-1),y={class:"mt-3"},V=Object(n["createTextVNode"])(" Loaded cards: "),T={id:"span-count"},S=Object(n["createVNode"])("hr",null,null,-1);Object(n["popScopeId"])();var w=a((function(e,t,r,o,w,N){var k=Object(n["resolveComponent"])("card-sorter"),E=Object(n["resolveComponent"])("rpg-cards-loader"),I=Object(n["resolveComponent"])("card-simplified"),L=Object(n["resolveComponent"])("draggable"),C=Object(n["resolveComponent"])("card");return Object(n["openBlock"])(),Object(n["createBlock"])("section",c,[Object(n["createVNode"])("section",l,[i,u,Object(n["createVNode"])("section",s,[d,Object(n["createVNode"])(k,{onSortChanged:N.sort},null,8,["onSortChanged"])]),Object(n["createVNode"])("section",p,[Object(n["createVNode"])("div",b,[Object(n["createVNode"])(E,{onLoaded:N.load,onOnError:N.onError},null,8,["onLoaded","onOnError"])]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return N.loadExample&&N.loadExample.apply(N,arguments)})}," Load example ")]),Object(n["createVNode"])("div",f,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[2]||(t[2]=function(){return e.download&&e.download.apply(e,arguments)})}," Save to file ")]),Object(n["createVNode"])("div",h,[Object(n["createVNode"])("button",{class:"btn btn-danger",type:"button",onClick:t[3]||(t[3]=function(){return N.clear&&N.clear.apply(N,arguments)})}," Clear cards ")]),Object(n["createVNode"])("div",O,[Object(n["createVNode"])("button",{class:"btn btn-success",type:"button",onClick:t[4]||(t[4]=function(){return N.print&&N.print.apply(N,arguments)})}," Print ")]),Object(n["createVNode"])("div",g,[Object(n["createVNode"])("div",j,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"cb-useSimplifiedView","onUpdate:modelValue":t[5]||(t[5]=function(e){return w.useSimplifiedView=e})},null,512),[[n["vModelCheckbox"],w.useSimplifiedView]]),v])])]),Object(n["createVNode"])("section",y,[Object(n["createVNode"])("p",null,[V,Object(n["createVNode"])("span",T,Object(n["toDisplayString"])(w.cards.length),1)])]),S]),w.useSimplifiedView?(Object(n["openBlock"])(),Object(n["createBlock"])(L,{key:0,modelValue:w.cards,"onUpdate:modelValue":t[6]||(t[6]=function(e){return w.cards=e}),"item-key":"title",onChange:N.store,"drag-class":"rpg-card-drag",tag:"section"},{item:a((function(e){var t=e.element;return[Object(n["createVNode"])(I,{modelValue:t},null,8,["modelValue"])]})),_:1},8,["modelValue","onChange"])):(Object(n["openBlock"])(),Object(n["createBlock"])(L,{key:1,modelValue:w.cards,"onUpdate:modelValue":t[7]||(t[7]=function(e){return w.cards=e}),"item-key":"title",onChange:N.store,"drag-class":"rpg-card-drag",handle:".title",tag:"section"},{item:a((function(e){var t=e.element;return[Object(n["createVNode"])(C,{modelValue:t},null,8,["modelValue"])]})),_:1},8,["modelValue","onChange"]))])})),N=(r("4de4"),r("d81d"),Object(n["withScopeId"])("data-v-d2e7a342")),k=N((function(e,t,r,o,a,c){var l=Object(n["resolveComponent"])("title-el"),i=Object(n["resolveComponent"])("dynamic-element");return Object(n["openBlock"])(),Object(n["createBlock"])("article",null,[Object(n["createVNode"])(l,{modelValue:r.modelValue.title},null,8,["modelValue"]),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(c.knownElements,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(i,{modelValue:e,key:t},null,8,["modelValue"])})),128))])}));function E(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(c.elementComponent),{modelValue:a.model},null,8,["modelValue"])}r("b0c0");function I(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("ul",null,[Object(n["createVNode"])("li",{innerHTML:r.modelValue.name},null,8,["innerHTML"])])}var L=r("d4ec"),C=r("262e"),B=r("2caf"),x={SUBTITLE:"subtitle",PROPERTY:"property",DESCRIPTION:"description",BULLET:"bullet",PICTURE:"picture",TEXT:"text",SECTION:"section",DNDSTATS:"dndstats",UNKNOWN:"unknown"},D=function e(t){if(Object(L["a"])(this,e),!t)throw new Error("Argumet 'type' should have value");this.type=t},P=D,M=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;if(Object(L["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return n=t.call(this,x.BULLET),n.name=e,n}return r}(P),R=M,U={name:"Bullet",props:{modelValue:R}};U.render=I;var _=U,A=Object(n["createTextVNode"])(": ");function H(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",{innerHTML:r.modelValue.name},null,8,["innerHTML"]),A,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])}var Y=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(L["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,x.DESCRIPTION),o.name=e,o.value=n,o}return r}(P),F=Y,J={name:"Description",props:{modelValue:F}};J.render=H;var W=J,z=Object(n["withScopeId"])("data-v-fd62a7ce");Object(n["pushScopeId"])("data-v-fd62a7ce");var X=Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("th",null,"STR"),Object(n["createVNode"])("th",null,"DEX"),Object(n["createVNode"])("th",null,"CON"),Object(n["createVNode"])("th",null,"INT"),Object(n["createVNode"])("th",null,"WIS"),Object(n["createVNode"])("th",null,"CHA")],-1);Object(n["popScopeId"])();var G=z((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("table",null,[Object(n["createVNode"])("tbody",null,[X,Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.str)+" ("+Object(n["toDisplayString"])(r.modelValue.strMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.dex)+" ("+Object(n["toDisplayString"])(r.modelValue.dexMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.con)+" ("+Object(n["toDisplayString"])(r.modelValue.conMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.int)+" ("+Object(n["toDisplayString"])(r.modelValue.intMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.wis)+" ("+Object(n["toDisplayString"])(r.modelValue.wisMod)+")",1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(r.modelValue.cha)+" ("+Object(n["toDisplayString"])(r.modelValue.chaMod)+")",1)])])])])})),K=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n,o,a,c,l){var i;Object(L["a"])(this,r),i=t.call(this,x.DNDSTATS);for(var u=[10,10,10,10,10,10],s=[0,0,0,0,0,0],d=[e,n,o,a,c,l],p=0;p<6;++p){u[p]=d[p]||0;var b=Math.floor((u[p]-10)/2);b=b>=0?"+"+b:""+b,s[p]=b}return i.str=u[0],i.dex=u[1],i.con=u[2],i.int=u[3],i.wis=u[4],i.cha=u[5],i.strMod=s[0],i.dexMod=s[1],i.conMod=s[2],i.intMod=s[3],i.wisMod=s[4],i.chaMod=s[5],i}return r}(P),$=K,q={name:"DndStats",props:{modelValue:$}};r("5abf");q.render=G,q.__scopeId="data-v-fd62a7ce";var Q=q,Z=Object(n["withScopeId"])("data-v-53a3fc5b"),ee=Z((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{style:{backgroundImage:"url("+r.modelValue.url+")",height:r.modelValue.height+"px"}},null,4)})),te=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;return Object(L["a"])(this,r),o=t.call(this,x.PICTURE),o.url=e,o.height=n,o}return r}(P),re=te,ne={name:"Picture",props:{modelValue:re}};r("5aa0");ne.render=ee,ne.__scopeId="data-v-53a3fc5b";var oe=ne,ae=Object(n["createTextVNode"])(": ");function ce(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",{innerHTML:r.modelValue.name},null,8,["innerHTML"]),ae,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])}var le=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(L["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,x.PROPERTY),o.name=e,o.value=n,o}return r}(P),ie=le,ue={name:"Property",props:{modelValue:ie}};ue.render=ce;var se=ue,de=Object(n["withScopeId"])("data-v-5b6c406c");Object(n["pushScopeId"])("data-v-5b6c406c");var pe=Object(n["createTextVNode"])(": ");Object(n["popScopeId"])();var be=de((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("strong",null,[Object(n["createVNode"])("u",{innerHTML:r.modelValue.name},null,8,["innerHTML"])]),pe,Object(n["createVNode"])("span",{innerHTML:r.modelValue.value},null,8,["innerHTML"])])})),me=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;if(Object(L["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return o=t.call(this,x.SECTION),o.name=e,o.value=n,o}return r}(P),fe=me,he={name:"Section",props:{modelValue:fe}};r("4a8c");he.render=be,he.__scopeId="data-v-5b6c406c";var Oe=he,ge=Object(n["withScopeId"])("data-v-5267e49c"),je=ge((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("em",{innerHTML:r.modelValue.name},null,8,["innerHTML"])])})),ve=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;if(Object(L["a"])(this,r),!e)throw new Error("Argumet 'name' should have value");return n=t.call(this,x.SUBTITLE),n.name=e,n}return r}(P),ye=ve,Ve={name:"Subtitle",props:{modelValue:ye}};r("a811");Ve.render=je,Ve.__scopeId="data-v-5267e49c";var Te=Ve;function Se(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{innerHTML:r.modelValue.text},null,8,["innerHTML"])}var we=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e){var n;return Object(L["a"])(this,r),n=t.call(this,x.TEXT),n.text=e,n}return r}(P),Ne=we,ke={name:"Text",props:{modelValue:Ne}};ke.render=Se;var Ee=ke,Ie={};Ie[x.BULLET]="bullet",Ie[x.DESCRIPTION]="description",Ie[x.DNDSTATS]="dndstats",Ie[x.PROPERTY]="property",Ie[x.SECTION]="section-el",Ie[x.SUBTITLE]="subtitle",Ie[x.TEXT]="text-el",Ie[x.PICTURE]="picture-el";var Le={isKnownType:function(e){return!!Ie[e]},name:"DynamicElement",props:["modelValue"],data:function(){return{model:this.modelValue}},computed:{elementComponent:function(){return Ie[this.model.type]}},components:{bullet:_,description:W,dndstats:Q,"picture-el":oe,property:se,"section-el":Oe,subtitle:Te,"text-el":Ee}};Le.render=E;var Ce=Le,Be=Object(n["withScopeId"])("data-v-1d06bc7e");Object(n["pushScopeId"])("data-v-1d06bc7e");var xe={class:"title"};Object(n["popScopeId"])();var De=Be((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",xe,[Object(n["createVNode"])("strong",null,Object(n["toDisplayString"])(r.modelValue),1)])})),Pe={name:"Title",props:{modelValue:String}};r("d042");Pe.render=De,Pe.__scopeId="data-v-1d06bc7e";var Me=Pe,Re=function e(t,r,n,o,a,c,l,i){if(Object(L["a"])(this,e),!t)throw new Error("Argumet 'title' should have value");this.title=t,this.elements=c||[],this.tags=l||[],this.count=i||1,this.icon=r,this.color=n,this.iconBack=o,this.backgroundImage=a},Ue=Re,_e={name:"Card",props:{modelValue:Ue},computed:{knownElements:function(){return this.modelValue.elements.filter((function(e){return Ce.isKnownType(e.type)}))}},components:{"dynamic-element":Ce,"title-el":Me}};r("e038");_e.render=k,_e.__scopeId="data-v-d2e7a342";var Ae=_e;function He(e,t,r,o,a,c){var l=Object(n["resolveComponent"])("title-el");return Object(n["openBlock"])(),Object(n["createBlock"])("article",null,[Object(n["createVNode"])(l,{modelValue:r.modelValue.title},null,8,["modelValue"])])}var Ye={name:"CardSimplified",props:{modelValue:Ue},components:{"title-el":Me}};Ye.render=He;var Fe=Ye,Je={class:"row g-2"},We={class:"col-md-auto"},ze={key:1,class:"col-md-auto"},Xe={class:"col-md-auto"},Ge={class:"row gx-2 align-items-center"},Ke={class:"col-auto"},$e={class:"form-check"},qe=Object(n["createVNode"])("label",{class:"form-check-label",for:"cb-sortDesc"}," Descending ",-1),Qe={class:"col-auto"};function Ze(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("section",Je,[Object(n["createVNode"])("div",We,[Object(n["withDirectives"])(Object(n["createVNode"])("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.by=e}),onChange:t[2]||(t[2]=function(e){return r.byElement=a.cardElementSort.SUBTITLE})},[Object(n["createVNode"])("option",{value:a.cardSort.TITLE},"Title",8,["value"]),Object(n["createVNode"])("option",{value:a.cardSort.SPELLEVEL},"Spell level (experimental)",8,["value"]),Object(n["createVNode"])("option",{value:a.cardSort.ELEMENT},"Element",8,["value"]),Object(n["createVNode"])("option",{value:a.cardSort.FIRSTTAG},"First tag name",8,["value"])],544),[[n["vModelSelect"],r.by]])]),r.by===a.cardSort.ELEMENT?(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:0,class:"col-md-auto",onChange:t[4]||(t[4]=function(e){return r.propertyName=""})},[Object(n["withDirectives"])(Object(n["createVNode"])("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.byElement=e})},[Object(n["createVNode"])("option",{value:a.cardElementSort.SUBTITLE},"Subtitle",8,["value"]),Object(n["createVNode"])("option",{value:a.cardElementSort.PROPERTY}," First property with name ",8,["value"])],512),[[n["vModelSelect"],r.byElement]])],32)):Object(n["createCommentVNode"])("",!0),r.byElement===a.cardElementSort.PROPERTY?(Object(n["openBlock"])(),Object(n["createBlock"])("div",ze,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-control",type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.propertyName=e}),placeholder:"Enter property name"},null,512),[[n["vModelText"],r.propertyName]])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",Xe,[Object(n["createVNode"])("div",Ge,[Object(n["createVNode"])("div",Ke,[Object(n["createVNode"])("div",$e,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"cb-sortDesc","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.desc=e})},null,512),[[n["vModelCheckbox"],r.desc]]),qe])]),Object(n["createVNode"])("div",Qe,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[7]||(t[7]=function(){return c.sort&&c.sort.apply(c,arguments)})}," Sort ")])])])])}r("c975");var et={TITLE:"title",SPELLEVEL:"spelllLevel",ELEMENT:"element",FIRSTTAG:"firstTag"},tt={SUBTITLE:"subtitle",PROPERTY:"property"},rt={name:"CardSorter",emits:["sortChanged"],props:{by:{type:String,default:function(){return et.TITLE}},byElement:{type:String,default:function(){return tt.SUBTITLE}},propertyName:String,desc:Boolean},data:function(){return{cardSort:et,cardElementSort:tt}},methods:{sort:function(e){var t=this,r=null;this.by===et.SPELLEVEL?r=function(e){return e.elements.filter((function(e){return e.type===x.SUBTITLE})).map((function(e){return!e.name||-1===e.name.indexOf("Cantrip")&&-1===e.name.indexOf("cantrip")?parseInt(e.name,10)||(t.desc?-1:999):0}))[0]}:this.by===et.ELEMENT?r=this.byElement===tt.SUBTITLE?function(e){return e.elements.filter((function(e){return e.type===x.SUBTITLE})).map((function(e){return e.name}))[0]}:function(e){return e.elements.filter((function(e){return e.type===x.PROPERTY&&e.name===t.propertyName})).map((function(e){return e.name}))[0]}:"firstTag"===this.by&&(r=function(e){return e.tags[0]}),this.$emit("sortChanged",{elementSelector:r,desc:this.desc}),e.target.blur()}}};rt.render=Ze;var nt=rt,ot={style:{display:"none"}};function at(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return c.openDialog&&c.openDialog.apply(c,arguments)})}," Load from json files "),Object(n["createVNode"])("form",ot,[Object(n["createVNode"])("input",{type:"file",id:"file-load",name:"files[]",multiple:"",accept:"application/JSON",onChange:t[2]||(t[2]=function(){return c.load&&c.load.apply(c,arguments)})},null,32)])])}r("99af");var ct=function e(t,r){Object(L["a"])(this,e),this.message=t,this.error=r},lt=ct,it={name:"RpgCardsLoader",emits:["loaded","onError"],methods:{openDialog:function(e){document.getElementById("file-load").click(),e.target.blur()},load:function(e){for(var t,r=this,n=e.target.files,o=n.length,a=function(){r.$emit("loaded",{rpgCards:c})},c=[],l=function(e,t){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);c=c.concat(e)}catch(t){r.$emit("onError",{exception:new lt("File is not in correct format.",t)})}--o||a()},n.readAsText(t)},i=0;t=n[i];i++)l(i,t);e.srcElement.form.reset()}}};it.render=at;var ut=it,st=r("b76a"),dt=r.n(st),pt=function(e){Object(C["a"])(r,e);var t=Object(B["a"])(r);function r(e,n){var o;return Object(L["a"])(this,r),o=t.call(this,x.UNKNOWN),o.name=e,o.params=n,o}return r}(P),bt=pt,mt="rpg-cards-v3";function ft(e){switch(e.type){case x.BULLET:return new R(e.name);case x.DESCRIPTION:return new F(e.name,e.value);case x.PICTURE:return new re(e.url,e.height);case x.PROPERTY:return new ie(e.name,e.value);case x.SECTION:return new fe(e.name,e.value);case x.SUBTITLE:return new ye(e.name);case x.TEXT:return new Ne(e.text);case x.DNDSTATS:return new $(e.str,e.dex,e.con,e.int,e.wis,e.cha);case x.UNKNOWN:return new bt(e.name,e.params);default:throw new Error("Unknown element from storage "+JSON.stringify(e))}}function ht(e){if(!e)throw new Error("Argumet 'card' should have value");var t=e.elements.map((function(e){return ft(e)}));return new Ue(e.title,e.icon,e.color,e.iconBack,e.backgroundImage,t,e.tags,e.count)}function Ot(){var e=localStorage.getItem(mt);if(e){var t=JSON.parse(e),r=t.map((function(e){return ht(e)}));return r}}function gt(e){localStorage.setItem(mt,e?JSON.stringify(e):void 0)}function jt(){return localStorage.removeItem(mt)}var vt={get:Ot,set:gt,clear:jt},yt=(r("a15b"),r("a434"),r("ac1f"),r("1276"),r("498a"),r("4478")),Vt=r("2909"),Tt=(r("4d63"),r("25f0"),r("c0c4")),St=r.n(Tt);function wt(e){return St.a.sanitize(e,{ALLOWED_TAGS:["b"]})}function Nt(e){var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!t.test(e)}function kt(e){return Nt(e)?e:void 0}var Et={purify:wt,purifyUrl:kt},It=" | ";function Lt(e,t){switch(e){case x.BULLET:return new R(Et.purify(t[0]));case x.DESCRIPTION:return new F(Et.purify(t[0]),Et.purify(t[1]));case x.PICTURE:return new re(Et.purifyUrl(t[0]),parseInt(t[1],10));case x.PROPERTY:return new ie(Et.purify(t[0]),Et.purify(t[1]));case x.SECTION:return new fe(Et.purify(t[0]),Et.purify(t[1]));case x.SUBTITLE:return new ye(Et.purify(t[0]));case x.TEXT:return new Ne(Et.purify(t[0]));case x.DNDSTATS:return Object(yt["a"])($,Object(Vt["a"])(t.map((function(e){return parseInt(e,10)}))));default:return new bt(e,t)}}function Ct(e){switch(e.type){case x.BULLET:return[e.type,e.name].join(It);case x.DESCRIPTION:return[e.type,e.name,e.value].join(It);case x.PICTURE:return[e.type,e.url,e.height].join(It);case x.PROPERTY:return[e.type,e.name,e.value].join(It);case x.SECTION:return[e.type,e.name,e.value].join(It);case x.SUBTITLE:return[e.type,e.name].join(It);case x.TEXT:return[e.type,e.name].join(It);case x.DNDSTATS:return[e.type,e.str,e.dex,e.con,e.int,e.wis,e.cha].join(It);default:return[e.name].concat(Object(Vt["a"])(e.params)).join(It)}}function Bt(e){if(!e)throw new Error("Argumet 'rpgCardJson' should have value");var t=(e.contents||[]).map((function(e){return e.split(It).map((function(e){return e.trim()}))})),r=t.map((function(e){return Lt(e[0],e.splice(1))})),n=(e.tags||[]).map((function(e){return e.trim().toLowerCase()}));return new Ue(e.title,e.icon,e.color,e.icon_back,e.background_image,r,n,e.count)}function xt(e){if(!e)throw new Error("Argumet 'card' should have value");var t=e.elements.map((function(e){return Ct(e)})).join("\r\n");return{title:e.title,count:e.count,icon:e.icon,color:e.color,icon_back:e.iconBack,background_image:e.backgroundImage,contents:t,tags:e.tags}}var Dt={fromRpgCardJson:Bt,toRpgCardJson:xt};function Pt(e,t,r){return e.sort((function(e,n){if(t){var o=t(e),a=t(n);if(r){if(o>a)return-1;if(o<a)return 1}else{if(o<a)return-1;if(o>a)return 1}}if(r){if(e.title>n.title)return-1;if(e.title<n.title)return 1}else{if(e.title<n.title)return-1;if(e.title>n.title)return 1}return 0}))}var Mt,Rt=Pt,Ut=[{count:1,color:"maroon",title:"Burning Hands",icon:"white-book-1",icon_back:"robe",contents:["subtitle | 1st level evocation","rule","property | Casting time | 1 action","property | Range | Self (15ft cone)","property | Components | V,S","rule","fill | 2","text | Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes <b>3d6 fire damage</b> on a failed save, or half as much damage on a successful one.","text | The fire ignites any flammable objects in the area that aren't being worn or carried.","fill | 3","section | At higher levels","text | +1d6 damage for each slot above 1st"],tags:["spell","mage"]},{count:1,color:"indigo",title:"Cunning Action",icon:"white-book",icon_back:"cloak-dagger",contents:["subtitle | Rogue feature","rule","fill | 2","text | You can take a <b>bonus action on each of your turns</b> in combat. This action can be used only to take the <b>Dash, Disengage, or Hide</b> action.","fill | 2","section | Fast hands (Thief 3rd)","text | You can also use the bonus action to make a Dexterity (<b>Sleight of Hand</b>) check, use your thieves' tools to <b>disarm a trap</b> or <b>open a lock</b>, or take the <b>Use an Object</b> action."],tags:["feature","rogue"]},{count:1,color:"dimgray",title:"Full Plate",icon:"breastplate",contents:["subtitle | Heavy armor (1500gp)","rule","property | AC | 18","property | Strength required | 15","property | Stealth | Disadvantage","rule","fill | 2","description | Heavy | Unless you have the required strength, your speed is reduced by 10 feet.","description | Stealth | You have disadvantage on Dexterity (Stealth) checks.","fill | 3"],tags:["item","armor"]},{count:1,color:"dimgray",title:"Dagger",icon:"mixed-swords",contents:["subtitle | Simple melee weapon (2gp)","rule","property | Damage | 1d4 piercing","property | Modifier | Strength or Dexterity","property | Properties | Light, Finesse, Thrown (20/60)","rule","fill | 2","description | Finesse | Use your choice of Strength or Dexterity modifier for attack and damage.","description | Light | When you attack while dual wielding light weapons, you may use a bonus action to attack with your off hand.","description | Thrown | You can throw the weapon to make a ranged attack with the given range.","fill | 3"],tags:["item","weapon"]},{count:1,color:"dimgray",title:"Shortsword of Very Long Names",title_size:"10",icon:"crossed-swords",contents:["subtitle | Simple melee weapon (10gp)","rule","property | Damage | 1d6 piercing","property | Modifier | Strength or Dexterity","property | Properties | Light, Finesse","rule","fill | 2","description | Finesse | Use your choice of Strength or Dexterity modifier for attack and damage.","description | Light | When you attack while dual wielding light weapons, you may use a bonus action to attack with your off hand.","fill | 3"],tags:["item","weapon","magic"]},{count:1,color:"dimgray",title:"Wand of Magic Missiles",icon:"crystal-wand",contents:["subtitle | Wondrous item","rule","property | Maximum charges | 7","property | Recharge | 1d6+1 each day","property | Depletion | If you expend the last charge, roll a d20. On a 1, the item is destroyed.","rule","fill | 2","description | Spells | You can use your action to cast the following spells:","bullet | magic missile, 1st level (1 charge)","bullet | magic missile, 2nd level (2 charges)","bullet | magic missile, 3rd level (3 charges)","fill | 3","boxes | 7 | 2.5"],tags:["item","wondrous-item","magic"]},{count:2,color:"dimgray",title:"Potion of Healing",icon:"drink-me",contents:["subtitle | Potion (50gp)","rule","property | Use time | 1 action","property | Hit points restored | 2d4+2","rule","fill | 2","text | When you drink this potion, you regain 2d4+2 hitpoints.","text | Drinking or administering a potion takes 1 action.","fill | 3"],tags:["item","consumable"]},{count:1,color:"black",title:"Goblin",icon:"imp-laugh",contents:["subtitle | Small humanoid (goblinoid)","rule","property | Armor class | 15 (leather armor, shield)","property | Hit points | 7 (2d6)","rule","dndstats | 8 | 14 | 10 | 10 | 8 | 8","rule","property | Skills | Stealth +6","property | Challenge | 1/4 (50 XP)","rule","description | Nimble escape | Disengage or Hide as bonus action","fill | 2","section | Actions","description | Scimitar | Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage","picture | https://upload.wikimedia.org/wikipedia/commons/9/9a/DnD_Goblin.png | 200"],tags:["creature","humanoid"]}],_t=Object(o["b"])();function At(e){console.error(e.message,e),_t.error(e.message+"\nSee console output for details.")}function Ht(e){var t=e.map((function(e){try{var t=Dt.fromRpgCardJson(e);return t}catch(r){return void At(new lt("Error during parsing example file.",r))}})).filter((function(e){return e}));return t}try{Mt=vt.get()}catch(Wt){At(new lt("Error during loading cards from storage.",Wt))}var Yt={name:"App",data:function(){return{cards:Mt||[],useSimplifiedView:!1}},methods:{store:function(){vt.set(this.cards)},sort:function(e){this.cards=Rt(this.cards,e.elementSelector,e.desc),this.store()},loadExample:function(e){var t=Ht(Ut);this.cards=t,this.store(),e.target.blur()},load:function(e){var t=Ht(e.rpgCards);this.cards=t,this.store()},clear:function(e){vt.clear(),this.cards=[],e.target.blur()},print:function(e){window.print(),e.target.blur()},onError:function(e){At(e.exception)}},components:{card:Ae,"card-simplified":Fe,draggable:dt.a,"card-sorter":nt,"rpg-cards-loader":ut}};r("0889"),r("db32f");Yt.render=w,Yt.__scopeId="data-v-2c8a5406";var Ft=Yt,Jt=Object(n["createApp"])(Ft);Jt.use(o["a"],{position:"bottom-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),Jt.mount("#app")},"5aa0":function(e,t,r){"use strict";r("f87e")},"5abf":function(e,t,r){"use strict";r("ca5d")},a745:function(e,t,r){},a811:function(e,t,r){"use strict";r("db32")},c15c:function(e,t,r){},ca5d:function(e,t,r){},d042:function(e,t,r){"use strict";r("a745")},db32:function(e,t,r){},db32f:function(e,t,r){"use strict";r("c15c")},e038:function(e,t,r){"use strict";r("1d40")},f87e:function(e,t,r){}});
//# sourceMappingURL=app.51c1bcb9.js.map