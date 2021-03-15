(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(18),i=a.n(r),s=(a(25),a(9)),c=a(4),l=a(5),u=a(7),d=a(6),m=a(0),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onSubmitForm=function(t){t.preventDefault(),e.props.onSubmitForm(e.state.value)},e.inputChange=function(t){var a=t.currentTarget;e.setState({value:a.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitForm,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{onChange:this.inputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),p=a(1),g=a.n(p),b=function(e){var t=e.img,a=e.openModal,n=t.webformatURL,o=t.tags;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{onClick:function(){return a(t)},src:n,alt:o,className:"ImageGalleryItem-image"})})},j=b;b.propTipes={img:g.a.node,openModal:g.a.func.isRequired};var f=function(e){var t=e.images,a=e.openModal;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(m.jsx)(j,{openModal:a,img:e},e.id)}))})},v=f;f.propTipes={images:g.a.array.isRequired,openModal:g.a.func.isRequired};var O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).hendlKeyDown=function(t){"Escape"===t.code&&e.props.showModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendlKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendlKeyDown)}},{key:"render",value:function(){var e=this.props.img;return Object(m.jsx)("div",{onClick:this.props.clouseModal,className:"Overlay",children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:e.largeImageURL,alt:e.tags})})})}}]),a}(n.Component),y=function(e){var t=e.loadMore;return console.log(t),Object(m.jsx)("button",{onClick:t,className:"Button",children:"Load more"})},M=y;y.propTipes={loadMore:g.a.func.isRequired};var w=a(19),x=a.n(w),S=function(){return Object(m.jsx)(x.a,{className:"loader",type:"Puff",color:"#00BFFF",height:100,width:100})},k=a(20),F=a.n(k),N=function(e,t){return F.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19922500-0aa846c7df203c993f2ecb489&image_type=photo&orientation=horizontal&per_page=12"))},L=N;N.propTipes={value:g.a.string,page:g.a.number};var C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],value:"",modal:!1,isLoading:!1,linkModal:{},page:1,button:!0},e.onSubmitForm=function(t){t?(e.setState({isLoading:!0}),L(t,1).then((function(e){return e.data.hits})).then((function(a){return e.setState({images:a,value:t,page:2,isLoading:!1,button:12===a.length})})).catch((function(e){return console.error({error:e})}))):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")},e.loadMore=function(){var t=e.state,a=t.value,n=t.page,o=t.images;e.setState({isLoading:!0}),L(a,n).then((function(e){return e.data.hits})).then((function(t){return e.setState({images:[].concat(Object(s.a)(o),Object(s.a)(t)),isLoading:!1,button:12===t.length})})),e.setState((function(e){return{page:e.page+1}}))},e.showModal=function(t){var a=e.state.modal;t?e.setState({linkModal:t,modal:!a}):e.setState({modal:!a})},e.closeModal=function(t){var a=e.state.modal;"DIV"===t.target.nodeName&&e.setState({modal:!a})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollTop+document.documentElement.clientHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{onSubmitForm:this.onSubmitForm}),0===this.state.images.length?Object(m.jsx)("h1",{children:"Please enter your search term"}):Object(m.jsx)(v,{images:this.state.images,openModal:this.showModal}),this.state.modal&&Object(m.jsx)(O,{showModal:this.showModal,clouseModal:this.closeModal,img:this.state.linkModal}),0!==this.state.images.length&&this.state.button&&Object(m.jsx)(M,{loadMore:this.loadMore}),this.state.isLoading&&Object(m.jsx)(S,{})]})}}]),a}(n.Component);i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.29ea4491.chunk.js.map