(this.webpackJsonpgomovie=this.webpackJsonpgomovie||[]).push([[0],{50:function(e,a,t){e.exports=t.p+"static/media/circle-cropped.f883bd61.png"},59:function(e,a,t){e.exports=t(96)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},93:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(23),l=t.n(r),c=(t(64),t(27)),m=t(16),s=t(17),i=t(18),u=t(19),d=(t(65),t(66),t(67),t(68),function(e){var a=e.genre.map((function(a){return o.a.createElement("li",null,o.a.createElement("a",{style:{color:"#449fcf"},onClick:e.clicked},a))})),t=e.imdb.map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{style:{color:"#449fcf"}},e))}));return o.a.createElement("div",{className:"searchDropdown"},o.a.createElement("ul",{className:"nav nav-pills"},o.a.createElement("li",null,o.a.createElement("span",{className:" dropdown-toggle",style:{fontWeight:"700",fontSize:"17px",overflow:"hidden",marginRight:"11px"},"data-toggle":"dropdown"},"Genre"),o.a.createElement("ul",{className:"dropdown-menu"},a)),o.a.createElement("li",null,o.a.createElement("span",{className:" dropdown-toggle",style:{fontWeight:"700",fontSize:"17px"},"data-toggle":"dropdown"},"Imdb"),o.a.createElement("ul",{className:"dropdown-menu"},t))))}),h=t(51),p=t.n(h),v=t(117),f=t(118),g=t(116),E=t(52),b=t.n(E),w=t(50),y=t.n(w),N=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-6 headerSearchLeft"},o.a.createElement("div",{className:"col-sm-6 col-md-5 logo"},o.a.createElement("img",{src:y.a,height:"50",className:"logoImg"})),o.a.createElement("div",{className:"col-sm-6 col-md-7 dropdownList "},o.a.createElement(d,{clicked:e.searchHandler,genre:e.genrelist,imdb:e.imdb}))),o.a.createElement("div",{className:"col-sm-12 col-md-6 headerSearchRight"},o.a.createElement("div",{className:"col-sm-6 col-md-9 textSearch"},o.a.createElement(g.a,{className:"paper"},o.a.createElement(f.a,{placeholder:"Search Movies",variant:"outlined",label:"search movies",value:e.name,className:"inputBase",id:"outlined-warning",style:{fontSize:15},onChange:e.nameChangeHandler}),o.a.createElement(v.a,{type:"submit",className:"iconButton","aria-label":"search",onClick:e.searchHandler},o.a.createElement(p.a,{style:{fontSize:30,color:"#41bbce"}})))),o.a.createElement("div",{className:"col-sm-6 col-md-3 userProfile"},o.a.createElement("div",null,o.a.createElement(b.a,{style:{fontSize:30,color:"#41bbce"}})," "),o.a.createElement("div",{className:"userName"},"Tarun"))))},k=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement(N,{genrelist:e.genre,imdb:e.imdb,nameChangeHandler:e.nameChangeHandler,searchHandler:e.searchHandler,name:e.name}))},S=(t(73),t(74),function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={URLParameter:"",image:""},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){console.log(this.props.movieBlock)}},{key:"render",value:function(){return o.a.createElement("div",{className:"DownloadMoviePage"},o.a.createElement("h2",null,"Click on the link to download"),o.a.createElement("h3",null,this.props.match.params.title),o.a.createElement("img",{src:this.props.location.hash.slice(1)}),o.a.createElement("h3",null,"Its broken!!! will be fixed soon..."))}}]),t}(n.Component)),O=(t(75),t(76),t(24)),z=t.n(O),H=(n.Component,function(e){return o.a.createElement("div",{className:"movieBlock"},o.a.createElement("img",{onMouseEnter:e.zoomIn,onMouseLeave:e.zoomOut,src:e.Poster}))}),I=(t(93),t(14)),x=t(33),B=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.movieBlock.map((function(a){return o.a.createElement(I.b,{className:"hvr",to:{pathname:"/"+a.Title,hash:a.Poster}},o.a.createElement(H,{Title:a.Title,Year:a.release_date,imdbID:a.imdbID,Poster:a.Poster,zoomIn:e.props.zoomIn,zoomOut:e.props.zoomOut}))})),t=this.props.movieBlock2.map((function(a){return o.a.createElement(I.b,{className:"hvr",to:{pathname:"/"+a.Title,hash:a.Poster}},o.a.createElement(H,{Title:a.Title,Year:a.release_date,imdbID:a.imdbID,Poster:a.Poster,zoomIn:e.props.zoomIn,zoomOut:e.props.zoomOut}))})),n=o.a.createElement(x.a,{focusOnSelect:!0,itemPadding:[0],itemsToShow:7,itemsToScroll:5},a.map((function(e){return o.a.createElement("div",{key:"carouselHvr"},e)}))),r=o.a.createElement(x.a,{focusOnSelect:!0,itemPadding:[0],itemsToShow:7,itemsToScroll:5},t.map((function(e){return o.a.createElement("div",{key:"carouselHvr"},e)})));return o.a.createElement("div",{className:"row form-group mainContainer"},o.a.createElement("div",{className:"col-sm-12",style:{fontSize:"24px",marginLeft:"32px",fontWeight:"bold",color:"white"}},"Popular on Filmozo"),o.a.createElement("div",{className:"col-sm-12 col-md-12 movie"},n),o.a.createElement("div",{className:"col-sm-12",style:{fontSize:"24px",marginLeft:"32px",marginTop:"-34px",fontWeight:"bold",color:"white"}},"Trending Now"),o.a.createElement("div",{className:"col-sm-12 col-md-12 movie"},r))}}]),t}(n.Component),j=(t(95),t(21)),C=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={movieBlock:[],movieBlock2:[],genre:["Action","Adventure","Animation","Biography","Comedy","Crime","Documentation","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality","Romance","Sci-Fi","Sport","Talk-Show","Thriller"," War","Western"],Year:"",Imdb:[1,2,3,4,5,6,7,8,9,10],name:"",activeItemIndex:0},e.zoomIn=function(e){var a=e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");Object(c.a)(a).map((function(e){e.style.transform="translateX(-25%)"}));for(var t=Object(c.a)(a).indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;t<Object(c.a)(a).length;t++)Object(c.a)(a)[t].style.transform="translateX(25%)";e.target.closest(".rec.rec-swipable-carouselHvr").style.transform="scale(1.5)"},e.zoomOut=function(e){var a=e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");Object(c.a)(a).map((function(e){e.style.transform="translateX(0%)"})),e.target.closest(".rec.rec-swipable-carouselHvr").style.transform="scale(1)"},e.nameChangeHandler=function(a){e.setState({name:a.target.value})},e.searchHandler=function(a){var t="";a.target.text&&""!==a.target.text?(t=a.target.text,e.state.name=""):(t=e.state.name,e.state.name="");var n=[];z.a.get("https://www.omdbapi.com/?s="+t+"&apikey=e0a527f0").then((function(a){for(var t in console.log(a),a.data.Search)n.push(a.data.Search[t]);e.setState({movieBlock:n})}))},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,a=[];console.log(this.state.genre),z.a.get("https://www.omdbapi.com/?s=man&apikey=e0a527f0").then((function(t){for(var n in console.log(t),t.data.Search)a.push(t.data.Search[n]);a.shift(),e.setState({movieBlock:a}),a=[]})),z.a.get("https://www.omdbapi.com/?s=action&apikey=e0a527f0").then((function(t){for(var n in console.log(t),t.data.Search)a.push(t.data.Search[n]);a.shift(),e.setState({movieBlock2:a}),a=[]}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid mainApp"},o.a.createElement("div",{className:"row form-group"},o.a.createElement("div",{className:"col-sm-12 col-md-12 header"},o.a.createElement(k,{nameChangeHandler:this.nameChangeHandler,genre:this.state.genre,searchHandler:this.searchHandler,name:this.state.name,source:"../assets/images/logo.png",imdb:this.state.Imdb}))),o.a.createElement(I.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"filmozomovies/",exact:!0,render:function(){return o.a.createElement(B,{zoomOut:e.zoomOut,zoomIn:e.zoomIn,movieBlock:e.state.movieBlock,movieBlock2:e.state.movieBlock2})}}),o.a.createElement(j.a,{path:"filmozomovies/:title",component:S}))),o.a.createElement("div",{className:"row footer"},o.a.createElement("div",{className:"col-sm-12 col-md-12"},o.a.createElement("div",{className:"brand-logo"}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",null,"Terms and Privacy Notice")),o.a.createElement("li",null,o.a.createElement("a",null,"Send us feedback")),o.a.createElement("li",null,o.a.createElement("a",null,"Help")),o.a.createElement("li",null,"\xa9 2020, Filmozo.com")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(I.a,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.f5c25c9c.chunk.js.map