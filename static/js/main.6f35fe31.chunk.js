(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),s=a(6),c=a(5),o=a(0),i=a(8),u=a(1),l=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={imgName:""},e.handleImgNameChange=function(t){e.setState({imgName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imgName.trim()?(e.props.onSearch(e.state.imgName),e.setState({imgName:""})):i.b.error("Enter search request")},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",onClick:this.handleSubmit,children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleImgNameChange,value:this.state.imgName})]})})}}]),a}(o.Component),h=a(12),m=a(7),p=a.n(m),d=a(9),j=a(13),g=a.n(j);function b(e,t){return f.apply(this,arguments)}function f(){return(f=Object(d.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"22764492-08543241292e25caceb14f7aa",e.next=3,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("22764492-08543241292e25caceb14f7aa","&image_type=photo&orientation=horizontal&per_page=12\n    "));case 3:if(!(n=e.sent).ok){e.next=6;break}return e.abrupt("return",n.json());case 6:return e.next=8,Promise.reject(new Error("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){var t=e.images,a=e.onClick;return t.map((function(e){var t=e.webformatURL,n=e.tags,r=e.id;return Object(u.jsx)("li",{className:"ImageGalleryItem",children:Object(u.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:function(){a(e)}})},r)}))};var v=function(e){var t=e.onClick;return Object(u.jsx)("div",{className:"Conteiner",children:Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})},x=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.onClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.onClick)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"Overlay",onClick:this.props.onClick,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:this.props.showImg.largeImageURL,alt:this.props.showImg.tags})})})}}]),a}(o.Component),k=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={images:[],error:null,page:1,isModalOpen:!1,onImgClick:"",status:"idle"},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.autoScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onModalOpen=function(t){e.setState({isModalOpen:!0,onImgClick:t})},e.onModalClose=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.setState({isModalOpen:!1})},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.searchRequest,r=this.props.searchRequest,s=t.page,c=this.state.page;n!==r&&(this.setState({images:[],page:1,status:"pending"}),setTimeout((function(){a.loadImages()}),100)),s!==c&&this.loadMoreImages()}},{key:"loadImages",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(this.props.searchRequest,this.state.page).then((function(e){return t.setState({images:e.hits,status:"resolved"})}));case 2:this.autoScroll();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadMoreImages",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(this.props.searchRequest,this.state.page).then((function(e){t.setState((function(t){return{images:[].concat(Object(h.a)(t.images),Object(h.a)(e.hits)),status:"resolved"}}))}));case 2:this.autoScroll();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"idle"===this.state.status?Object(u.jsx)("div",{className:"Conteiner",children:Object(u.jsx)("p",{children:"Please enter search request"})}):"pending"===this.state.status?Object(u.jsx)(g.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}):"resolved"===this.state.status?Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:Object(u.jsx)(O,{images:this.state.images,onClick:this.onModalOpen})}),0!==this.state.images.length?Object(u.jsx)(v,{onClick:this.onLoadMore}):"",this.state.isModalOpen&&Object(u.jsx)(x,{showImg:this.state.onImgClick,onClick:this.onModalClose})]}):void 0}}]),a}(o.Component),y=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={imgName:""},e.handleFormSubmit=function(t){console.log(t),e.setState({imgName:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{}),Object(u.jsx)(l,{onSearch:this.handleFormSubmit}),Object(u.jsx)(k,{searchRequest:this.state.imgName})]})}}]),a}(o.Component),w=a(10),C=a.n(w);a(40);C.a.render(Object(u.jsx)(y,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6f35fe31.chunk.js.map