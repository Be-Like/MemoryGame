(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/MemoryGame/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01a3":function(e,t,a){e.exports=a.p+"img/easyImage3.311e7b8c.jpg"},"044e":function(e,t,a){e.exports=a.p+"img/easyImage1.d8e762da.jpg"},"0e0d":function(e,t,a){e.exports=a.p+"img/easyImage5.39065ba0.jpg"},"19f9":function(e,t,a){},"290a":function(e,t,a){},"2c8e":function(e,t,a){"use strict";var n=a("382d"),r=a.n(n);r.a},"2df6":function(e,t,a){"use strict";var n=a("19f9"),r=a.n(n);r.a},"2e9f":function(e,t,a){"use strict";var n=a("50db"),r=a.n(n);r.a},"382d":function(e,t,a){},"50db":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},c=i,l=a("2877"),u=a("6544"),f=a.n(u),d=a("7496"),m=Object(l["a"])(c,s,o,!1,null,null,null),p=m.exports;f()(m,{VApp:d["a"]});var v=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"hero-image",attrs:{"text-xs-center":"",wrap:"",fluid:""}},[a("div",{staticClass:"hero-text-centered"},[a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"hero-text"},[e._v("UNION "+e._s(e.getRandomTest))]),a("h2",{staticClass:"hero-text"},[e._v("Yeah! It's a Memory Game.")])]),e._l(e.gameModes,function(t,n){return a("v-flex",{key:n,staticClass:"subeading mx-3",attrs:{xs12:"","mb-5":"",id:"verticalButtons",target:"_blank"}},[a("v-layout",{attrs:{"justify-center":"",id:"maxButtonWidth"}},[a("v-btn",{staticClass:"hero-text",attrs:{dark:"",block:"",flat:"",to:t.url,"active-class":"inactive"}},[e._v("\n          "+e._s(t.text)+"\n        ")])],1)],1)}),a("v-dialog",{attrs:{persistent:"","max-width":"50%"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{id:"maxButtonWidth",dark:"",block:"",flat:""}},n),[e._v("\n          Player Settings\n        ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Player Information")])]),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{rules:[e.rules.required],label:"Player 1 Name"},model:{value:e.playerOneInfo.name,callback:function(t){e.$set(e.playerOneInfo,"name",t)},expression:"playerOneInfo.name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{rules:[e.rules.required],label:"Player 2 Name"},model:{value:e.playerTwoInfo.name,callback:function(t){e.$set(e.playerTwoInfo,"name",t)},expression:"playerTwoInfo.name"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",disabled:e.isValidPlayerInfo,flat:""},on:{click:function(t){return e.savePlayerInfo(e.playerOneInfo,e.playerTwoInfo)}}},[e._v("Save")])],1)],1)],1)],2),a("v-footer",{staticClass:"pa-3",attrs:{absolute:"",color:"#000000",dark:""}},[a("v-spacer"),a("a",{staticClass:"footer-link",attrs:{href:"https://github.com/Be-Like/MemoryGame.git"}},[e._v("Jake Simpson: Memory Game Repo")])],1)],1)},h=[],g=(a("7f7f"),{data:function(){return{rules:{required:function(e){return!!e||"Required."}},gameModes:[{text:"Let's Get Started",url:"easy"}],dialog:!1,playerOneInfo:{name:"",score:0},playerTwoInfo:{name:"",score:0}}},computed:{getRandomTest:function(){return this.$store.getters.getRandomTest},isValidPlayerInfo:function(){var e=this.playerOneInfo.name,t=this.playerTwoInfo.name;return!e||!t}},methods:{testAlert:function(e){alert(JSON.stringify(e))},savePlayerInfo:function(e,t){var a=e.name,n=t.name;a&&n&&(this.$store.commit("setPlayerOneInfo",e),this.$store.commit("setPlayerTwoInfo",t),this.dialog=!1)}}}),b=g,I=(a("2c8e"),a("8336")),_=a("b0af"),w=a("99d9"),C=a("12b2"),O=a("a523"),x=a("169a"),T=a("0e8f"),P=a("553a"),k=a("a722"),j=a("9910"),M=a("2677"),V=Object(l["a"])(b,y,h,!1,null,null,null),W=V.exports;f()(V,{VBtn:I["a"],VCard:_["a"],VCardActions:w["a"],VCardTitle:C["a"],VContainer:O["a"],VDialog:x["a"],VFlex:T["a"],VFooter:P["a"],VLayout:k["a"],VSpacer:j["a"],VTextField:M["a"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"game-panel"},[a("v-toolbar",{attrs:{dark:"",color:"#546E7A"}},[a("v-toolbar-title",[e._v("Welcome to an Easy Game of Memory")])],1),a("game-header",{on:{winner:e.updateCurrentWinner,player1IsWinner:e.updateIsWinner}}),a("board-setup",{}),0==e.getTotalMatches&&e.currentWinner?a("div",{staticClass:"winnerBanner",class:{player1IsWinner:e.player1IsWinner,player2IsWinner:!e.player1IsWinner}},[a("h1",{staticClass:"winnerText"},[e._v(e._s(e.currentWinner)+" is the winner!")])]):e._e(),0!=e.getTotalMatches||e.currentWinner?e._e():a("div",{staticClass:"winnerBanner tie"},[a("h1",{staticClass:"winnerText tie"},[e._v("Alas, it has come down to a tie...")])]),a("v-footer",{attrs:{"justify-center":"",dark:"",color:"#546E7A",align:"right"}},[a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:function(t){t.stopPropagation(),e.confirmReset=!0}}},[e._v("Reset")]),a("v-btn",{attrs:{flat:""},on:{click:function(t){t.stopPropagation(),e.confirmExit=!0}}},[e._v("Main Menu")])],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.confirmReset,callback:function(t){e.confirmReset=t},expression:"confirmReset"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Reset")]),a("v-card-text",[e._v("\n        Are you sure you want to reset? Current game data will be erased.\n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.confirmReset=!1}}},[e._v("\n          cancel\n        ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:e.confirmedReset}},[e._v("\n          reset\n        ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.confirmExit,callback:function(t){e.confirmExit=t},expression:"confirmExit"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to leave?")]),a("v-card-text",[e._v("\n        Current game data will be erased and you will return to the main menu.\n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.confirmExit=!1}}},[e._v("\n          cancel\n        ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat",to:"/"},on:{click:function(t){e.confirmExit=!1}}},[e._v("\n          Exit\n        ")])],1)],1)],1)],1)},N=[],E=a("cebc"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"status-bar"},[e.startingPlayer1||e.startingPlayer2?e._e():a("h2",{class:{player1Turn:e.playerOneInfo.turn,getWinningPlayer:e.getWinningPlayer}},[e._v("\n      "+e._s(e.playerOneInfo.name)),a("br"),e._v(e._s(e.playerOneInfo.score)+"\n  ")]),e.startingPlayer1||e.startingPlayer2?e._e():a("h2",{class:{player2Turn:e.playerTwoInfo.turn}},[e._v("\n      "+e._s(e.playerTwoInfo.name)),a("br"),a("div",{attrs:{align:"right"}},[e._v(e._s(e.playerTwoInfo.score))])]),e.startingPlayer1?a("div",{staticClass:"status-bar",class:{player1Started:e.startingPlayer1}},[a("h2",{staticClass:"bannerText"},[e._v("Starting "+e._s(e.playerOneInfo.name))])]):e._e(),e.startingPlayer2?a("div",{staticClass:"status-bar",class:{player2Started:e.startingPlayer2}},[a("h2",{staticClass:"bannerText"},[e._v("Starting "+e._s(e.playerTwoInfo.name))])]):e._e()])},R=[],B=a("2f62"),G={data:function(){return{playerOneInfo:{name:"",turn:!1,score:0},playerTwoInfo:{name:"",turn:!1,score:0},startingPlayer1:!1,startingPlayer2:!1}},computed:Object(E["a"])({},Object(B["c"])(["getPlayerOneInfo","getPlayerTwoInfo"]),{getWinningPlayer:function(){return this.playerOneInfo.score>this.playerTwoInfo.score?(this.$emit("winner",this.playerOneInfo.name),this.$emit("player1IsWinner",!0)):this.playerOneInfo.score<this.playerTwoInfo.score?(this.$emit("winner",this.playerTwoInfo.name),this.$emit("player1IsWinner",!1)):this.$emit("winner",null),null}}),mounted:function(){var e=this,t=this.getPlayerOneInfo,a=this.getPlayerTwoInfo;this.playerOneInfo=t,this.playerTwoInfo=a,t.turn?(this.startingPlayer1=!0,setTimeout(function(){e.startingPlayer1=!1},2e3)):(this.startingPlayer2=!0,setTimeout(function(){e.startingPlayer2=!1},2e3))}},A=G,U=(a("2df6"),Object(l["a"])(A,$,R,!1,null,null,null)),L=U.exports;f()(U,{VContainer:O["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"boardSetup"},e._l(e.getCards,function(t,n){return a("v-flex",{key:n,attrs:{xs3:""}},[a("game-card",{attrs:{selected:t},on:{revealed:e.onRevealed}})],1)}),1)},F=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cardContainer",on:{click:e.reveal}},[n("div",{staticClass:"card",class:{revealed:e.selected.revealed}},["card1"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("044e")}}):e._e(),"card2"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("879d")}}):e._e(),"card3"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("01a3")}}):e._e(),"card4"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("a2d5")}}):e._e(),"card5"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("0e0d")}}):e._e(),"card6"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("c705")}}):e._e(),"card7"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("b764")}}):e._e(),"card8"===e.selected.cardName?n("img",{staticClass:"faceUp",attrs:{src:a("6b98")}}):e._e(),n("img",{staticClass:"faceDown",attrs:{src:a("ce25")}})])])},D=[],H={props:{selected:{type:Object,default:function(){return{revealed:!1,cardName:""}}}},methods:Object(E["a"])({},Object(B["b"])(["revealCard"]),{reveal:function(){this.selected.revealed||(this.revealCard(this.selected),this.$emit("revealed",this.selected),console.log(this.selected.cardName))}})},Y=H,z=(a("2e9f"),Object(l["a"])(Y,q,D,!1,null,"1ab554d7",null)),K=z.exports,Q={components:{GameCard:K},data:function(){return{lastCard:null}},computed:Object(E["a"])({},Object(B["c"])(["getCards","getPlayerOneInfo"])),methods:Object(E["a"])({},Object(B["b"])(["flipCards","cardsMatch","switchTurns"]),{onRevealed:function(e){var t=this;if(!this.lastCard)return this.lastCard=e;if(this.lastCard!==e&&this.lastCard.cardName===e.cardName)return this.lastCard=null,this.cardsMatch(this.getPlayerOneInfo),this.switchTurns(this.getPlayerOneInfo),void console.log("Switch Turns "+JSON.stringify(this.getPlayerOneInfo));var a=this.lastCard;this.lastCard=null,this.switchTurns(this.getPlayerOneInfo),console.log("Switch Turns "+JSON.stringify(this.getPlayerOneInfo)),setTimeout(function(){t.flipCards([a,e])},1e3)}})},X=Q,Z=(a("b0f8"),Object(l["a"])(X,J,F,!1,null,"024ce212",null)),ee=Z.exports;f()(Z,{VContainer:O["a"],VFlex:T["a"]});var te={components:{GameHeader:L,BoardSetup:ee},data:function(){return{currentWinner:"",player1IsWinner:null,confirmReset:!1,confirmExit:!1}},computed:Object(E["a"])({},Object(B["c"])(["getCards","getTotalMatches"])),methods:Object(E["a"])({},Object(B["b"])(["reset"]),{showCards:function(){alert(JSON.stringify(this.getCards))},updateCurrentWinner:function(e){console.log("update current winner "+e),this.currentWinner=e},updateIsWinner:function(e){console.log("update Is Winner "+e),this.player1IsWinner=e},confirmedReset:function(){this.confirmReset=!1,this.reset()}}),created:function(){this.reset()}},ae=te,ne=(a("830f"),a("71d9")),re=a("2a7f"),se=Object(l["a"])(ae,S,N,!1,null,null,null),oe=se.exports;f()(se,{VBtn:I["a"],VCard:_["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:C["a"],VContainer:O["a"],VDialog:x["a"],VFooter:P["a"],VSpacer:j["a"],VToolbar:ne["a"],VToolbarTitle:re["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{attrs:{tag:"h2",to:"/"}},[e._v(" Welcom to an Medium Game of Memory")])},ce=[],le={},ue=Object(l["a"])(le,ie,ce,!1,null,null,null),fe=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{attrs:{tag:"h2",to:"/"}},[e._v("Welcom to an Hard Game of Memory")])},me=[],pe={},ve=Object(l["a"])(pe,de,me,!1,null,null,null),ye=ve.exports;n["a"].use(v["a"]);var he=new v["a"]({mode:"history",base:"/MemoryGame/",routes:[{path:"",component:W},{path:"/easy",component:oe},{path:"/normal",component:fe},{path:"/hard",component:ye}]}),ge=(a("ac6a"),a("7514"),function(e){for(var t=e.slice(),a=t.length;a;a--){var n=Math.floor(Math.random()*a),r=t[a-1];t[a-1]=t[n],t[n]=r}return t});n["a"].use(B["a"]);var be=new B["a"].Store({state:{playerOneInfo:{name:"Player1",turn:!1,score:0},playerTwoInfo:{name:"Player2",turn:!1,score:0},totalMatchesLeft:8,cards:[]},mutations:{setPlayerOneInfo:function(e,t){e.playerOneInfo.name=t.name,e.playerOneInfo.score=t.score},setPlayerTwoInfo:function(e,t){e.playerTwoInfo.name=t.name,e.playerTwoInfo.score=t.score},resetBoard:function(e,t){e.cards=t,e.playerOneInfo.score=0,e.playerTwoInfo.score=0,e.totalMatchesLeft=8},setInitialPlayerTurn:function(e,t){e.playerOneInfo.turn=t,e.playerTwoInfo.turn=!t},reveal:function(e,t){var a=e.cards.find(function(e){return e===t});a.revealed=!a.revealed},flipCards:function(e,t){e.cards.filter(function(e){return t.indexOf(e)>=0}).forEach(function(e){e.revealed=!e.revealed})},playerOneMatch:function(e){e.playerOneInfo.score++,e.totalMatchesLeft--},playerTwoMatch:function(e){e.playerTwoInfo.score++,e.totalMatchesLeft--},switchTurns:function(e,t){e.playerOneInfo.turn=!t,e.playerTwoInfo.turn=t}},actions:{setPlayerOneInfo:function(e,t){var a=e.commit;a({commit:a},t)},setPlayerTwoInfo:function(e,t){var a=e.commit;a({commit:a},t)},flipCards:function(e,t){var a=e.commit;a("flipCards",t)},revealCard:function(e,t){var a=e.commit;a("reveal",t)},reset:function(e){var t,a=e.commit,n=["card1","card2","card3","card4","card5","card6","card7","card8"],r=ge(n.concat(n)).map(function(e){return{revealed:!1,cardName:e}}),s=Math.floor(2*Math.random());t=s<1,a("resetBoard",r),a("setInitialPlayerTurn",t)},cardsMatch:function(e,t){var a=e.commit;t.turn?a("playerOneMatch"):a("playerTwoMatch")},switchTurns:function(e,t){var a=e.commit;a("switchTurns",t.turn)}},getters:{getPlayerOneInfo:function(e){return e.playerOneInfo},getPlayerTwoInfo:function(e){return e.playerTwoInfo},getCards:function(e){return e.cards},getTotalMatches:function(e){return e.totalMatchesLeft}}});n["a"].config.productionTip=!1,new n["a"]({router:he,store:be,render:function(e){return e(p)}}).$mount("#app")},6520:function(e,t,a){},"6b98":function(e,t,a){e.exports=a.p+"img/easyImage8.a619b29c.jpg"},"830f":function(e,t,a){"use strict";var n=a("6520"),r=a.n(n);r.a},"879d":function(e,t,a){e.exports=a.p+"img/easyImage2.4ad037d8.jpg"},a2d5:function(e,t,a){e.exports=a.p+"img/easyImage4.68ee3fb2.jpg"},b0f8:function(e,t,a){"use strict";var n=a("290a"),r=a.n(n);r.a},b764:function(e,t,a){e.exports=a.p+"img/easyImage7.23766209.png"},c705:function(e,t,a){e.exports=a.p+"img/easyImage6.f6607210.jpg"},ce25:function(e,t,a){e.exports=a.p+"img/cardBack.402eee13.jpg"}});
//# sourceMappingURL=app.1ae7a0f3.js.map