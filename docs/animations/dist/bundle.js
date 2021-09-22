!function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.apply(this,arguments)}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function i(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++){if(n=r[i],t.indexOf(n)>=0)continue;o[n]=e[n]}return o}var o,r,a,s,u,c,l,d,m,p,f,h,v,k,y,C,A,g,b,S,M,x,D,R,I,F,T,q=["children"],w=["children"],O=["children"];o=Inferno.Component,r=Inferno.createElement,s=(a=Inferno.Animation).AnimatedComponent,u=a.AnimatedMoveComponent,c=a.componentDidAppear,l=a.componentWillDisappear,d=a.componentWillMove,m=a.utils,p=m.addClassName,f=m.removeClassName,h=m.forceReflow,v=m.registerTransitionListener,k={onComponentDidAppear:c,onComponentWillDisappear:l},y={onComponentWillMove:d},C=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.render=function(){var e=this;return r("li",{onClick:function(t){return e.props.onClick(t,e.props.index)}},this.props.children)},n}(s),A=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.render=function(){var e=this;return r("section",{onClick:function(t){return e.props.onClick(t,e.props.index)}},this.props.children)},n}(s),g=function(e){var t=e.children,n=i(e,q);return r("li",{onClick:function(e){return n.onClick(e,n.index)}},t)},b=function(e){var t=e.children,n=i(e,w);return r("section",{onClick:function(e){return n.onClick(e,n.index)}},t)},S=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.render=function(){var e=this;return r("li",{onClick:function(t){return e.props.onClick(t,e.props.index)}},this.props.children)},n}(u),M=function(e){var t=e.children,n=i(e,O);return r("li",{onClick:function(e){return n.onClick(e,n.index)}},t)},x=function(n){function i(){var t;return(t=n.call(this)||this).doRemove=function(e,n){e.preventDefault();var i=t.state.items.concat([]);i.splice(n,1),t.setState({items:i})},t.doAdd=function(e){e.preventDefault();var n=t.state.items.concat([]),i=0===n.length?0:n[n.length-1].key+1;n.push({key:i}),t.setState({items:n})},t.doRemove20=function(e){e.preventDefault();var n=t.state.items.concat([]);n.splice(n.length>=20?n.length-20:0,n.length>=20?20:n.length),t.setState({items:n})},t.doAdd20=function(e){e.preventDefault();for(var n=t.state.items.concat([]),i=0===n.length?0:n[n.length-1].key+1,o=0;o<20;o++)n.push({key:i+o});t.setState({items:n})},t.renderItem=function(n,i){return t.props.useFunctionalComponent?r(g,e({key:n.key,index:i,animation:t.props.animation},k,{onClick:t.doRemove}),n.key+1+"bar"):r(C,{key:n.key,index:i,animation:t.props.animation,onClick:t.doRemove},n.key+1+"bar")},t.state={items:[]},t.items=[],t}t(i,n);var o=i.prototype;return o.componentDidMount=function(){for(var e=0;this.items.length<20;)this.items[this.items.length]={key:e++};this.setState({items:this.items})},o.render=function(){return r("div",null,[r("ul",null,this.state.items.map(this.renderItem)),r("h2",null,this.props.animation),r("p",null,this.props.description),r("button",{onClick:this.doAdd},"Add"),r("button",{onClick:this.doAdd20},"Add 20"),r("button",{onClick:this.doRemove20},"Remove 20")])},i}(o),D=function(n){function i(){var t;(t=n.call(this)||this).componentDidAppear=function(e){var t="fade-enter",n="fade-enter-active",i="fade-enter-end";p(e,t),h(),p(e,n),v([e],(function(){f(e,n),f(e,i)})),requestAnimationFrame((function(){f(e,t),p(e,i)}))},t.componentWillDisappear=function(e,t){var n="fade-leave";p(e,n),p(e,"fade-leave-active"),v([e],(function(){t()})),requestAnimationFrame((function(){p(e,"fade-leave-end"),f(e,n)}))},t.doRemove=function(e,n){e.preventDefault();var i=t.state.items.concat([]);i.splice(n,1),t.setState({items:i})},t.doRemoveSpecial=function(e){e.preventDefault();var n=t.state.items.filter((function(e){return e.isListItem})),i=n[parseInt(Math.round(Math.random()*(n.length-1)))].key,o=t.state.items.filter((function(e){return e.key!==i}));t.setState({items:o}),setTimeout((function(){var e=t.state.items.filter((function(e){return!e.isListItem})),n=parseInt(Math.round(Math.random()*(e.length-1))),i=0,o=t.state.items.filter((function(e){return e.isListItem||i++!==n}));t.setState({items:o})}),100)},t.doAdd=function(e){e.preventDefault();var n=t.state.items.concat([]),i=n.reduce((function(e,t){return t.key>e?t.key:e}),0)+1;n.push({key:i,isListItem:!0}),n.push({key:i+1}),t.setState({items:n})},t.renderItem=function(n,i){return t.props.useFunctionalComponent?r(b,e({key:n.key,index:i,animation:t.props.animation},k,{onClick:t.doRemove}),n.key+1+"bar"):r(A,{key:n.key,index:i,animation:t.props.animation,onClick:t.doRemove},n.key+1+"bar")};for(var i=0,o=[];o.length<40;)o[o.length]={key:i++,isListItem:!0},o[o.length]={key:i++};return t.state={items:o},t}return t(i,n),i.prototype.render=function(){var e=this;return r("div",null,[r("article",null,this.state.items.map((function(t,n){return t.isListItem?e.renderItem(t,n):r("span",{className:"divider"})}))),r("h2",null,"Mixed list"),r("p",null,this.props.description),r("button",{onClick:this.doAdd},"Add"),r("button",{onClick:this.doRemoveSpecial},"Remove")])},i}(o),R=function(n){function i(){var t;return(t=n.call(this)||this).doRemove=function(e,n){e&&e.preventDefault();var i=t.state.items.concat([]);i.splice(n,1),t.setState({items:i})},t.doAdd=function(e){e&&e.preventDefault();var n=t.state.items.concat([]),i=n.reduce((function(e,t){return t.key>e?t.key:e}),0)+1;n.push({key:i,val:i}),t.setState({items:n})},t.doMix=function(e){e&&e.preventDefault();var n=t.state.items.concat([]);I(n),t.setState({items:n})},t.doReassignKeys=function(e){e&&e.preventDefault();var n=t.state.items.concat([]);I(n);var i=t.state.items.map((function(e,t){return Object.assign({},e,{key:n[t].key})}));t.setState({items:i})},t.doRemoveMix=function(e){if(e&&e.preventDefault(),0===t.state.items.length)return;var n=parseInt(Math.round(Math.random()*(t.state.items.length-1))),i=t.state.items[n].key,o=t.state.items.filter((function(e){return e.key!==i}));t.setState({items:o,deleted:i+1}),setTimeout((function(){return t.doMix(e)}),100)},t.removeAndShuffle=function(e){e&&e.preventDefault();for(var n=0;n<20;n++)setTimeout((function(){var e=parseInt(Math.round(Math.random()*(t.state.items.length-1)));t.doRemove(void 0,e),t.doReassignKeys(),t.doMix()}))},t.doAdd20=function(e){e&&e.preventDefault();for(var n=0;n<20;n++)t.doAdd();for(var i=0;i<5;i++)t.doReassignKeys(),t.doMix()},t.doAdd20SeqMix=function(e){e&&e.preventDefault();for(var n=0;n<20;n++)t.doAdd();for(var i=0;i<5;i++)setTimeout((function(){t.doMix()}),500+100*i)},t.renderItem=function(n,i){return t.props.useFunctionalComponent?r(g,e({key:n.key,index:i,animation:t.props.animation},k,{onClick:t.doRemove}),n.val+"bar ("+n.key+")"):r(C,{key:n.key,index:i,animation:t.props.animation,onClick:t.doRemove},n.val+"bar ("+n.key+")")},t.state={items:[]},t.items=[],t}t(i,n);var o=i.prototype;return o.componentDidMount=function(){for(var e=0;this.items.length<20;)this.items[this.items.length]={key:e,val:e},e++;this.setState({items:this.items})},o.render=function(){return r("div",null,[r("ul",null,this.state.items.map(this.renderItem)),r("h2",null,"Shuffle"),r("p",null,this.props.description),r("button",{onClick:this.doAdd},"Add"),r("button",{onClick:this.doMix},"Shuffle"),r("button",{onClick:this.doReassignKeys},"Shuffle keys"),r("button",{onClick:this.doRemoveMix},"Remove"+(this.state.deleted?" ("+this.state.deleted+")":"")),r("button",{onClick:this.doAdd20},"Add and shuffle 20"),r("button",{onClick:this.doAdd20SeqMix},"Add 20 do 5 shuffle"),r("button",{onClick:this.removeAndShuffle},"Remove and shuffle 20")])},i}(o),I=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},F=function(n){function i(){var t;return(t=n.call(this)||this).doRemove=function(e,n){e.preventDefault();var i=t.state.items.concat([]);i.splice(n,1),t.setState({items:i})},t.doAdd=function(e){e.preventDefault();var n=t.state.items.concat([]),i=n.reduce((function(e,t){return t.key>e?t.key:e}),0)+1;n.push({key:i,val:i}),t.setState({items:n})},t.renderItem=function(n,i){return t.props.useFunctionalComponent?r(g,e({key:n.key,index:i,animation:t.props.animation},k,{onClick:t.doRemove}),n.val+"bar ("+n.key+")"):r(C,{key:n.key,index:i,animation:t.props.animation,onClick:t.doRemove},n.val+"bar ("+n.key+")")},t.state={items:[]},t.items=[],t}t(i,n);var o=i.prototype;return o.componentDidMount=function(){this.componentWillReceiveProps(this.props)},o.componentWillReceiveProps=function(e){for(var t=0;this.items.length<e.items;)this.items[this.items.length]={key:t,val:t},t++;this.setState({items:this.items})},o.render=function(){return r("div",null,[r("ul",null,this.state.items.map(this.renderItem)),r("h2",null,"patchKeyedChildren"),r("p",null,this.props.description),r("button",{onClick:this.doAdd},"Add")])},i}(o),T=function(n){function i(){var t;return(t=n.call(this)||this).doMove=function(e,n){e&&e.preventDefault();var i=t.state.items.concat([]),o=i.splice(n,1)[0];i.splice(Math.round(Math.random()*i.length),0,o),t.setState({items:i})},t.doAdd=function(e){e&&e.preventDefault();var n=t.state.items.concat([]),i=n.reduce((function(e,t){return t.key>e?t.key:e}),0)+1;n.push({key:i,val:i}),t.setState({items:n})},t.doMix=function(e){e&&e.preventDefault();var n=t.state.items.concat([]);I(n),console.log("Expected order: "+n.map((function(e){return"("+e.val+")"})).join(",")),t.setState({items:n}),setTimeout((function(){var e=document.querySelector("#App6 ul").textContent.match(/\(\d*\)/g);console.log("Actual order:   "+e.join(","))}),100)},t.doDoubleMix=function(e){e&&e.preventDefault();var n=t.state.items.concat([]);I(n),console.log("Expected order 1: "+n.map((function(e){return"("+e.val+")"})).join(",")),t.setState({items:n}),setTimeout((function(){var e=n.concat([]);I(e),t.setState({items:e}),console.log("Expected order 2: "+e.map((function(e){return"("+e.val+")"})).join(","))}),1),setTimeout((function(){var e=document.querySelector("#App6 ul").textContent.match(/\(\d*\)/g);console.log("Actual order:     "+e.join(","))}),100)},t.doMoveOne=function(e){e&&e.preventDefault();var n=t.state.items.concat([]);n.push(n.shift()),t.setState({items:n})},t.doClearMarkers=function(e){e&&e.preventDefault(),document.querySelectorAll(".debugMarker").forEach((function(e){e.parentNode.removeChild(e)}))},t.renderItem=function(n,i){return t.props.useFunctionalComponent?r(M,e({key:n.key,index:i,animation:t.props.animation},y,{onClick:t.doMove}),n.val+"bar ("+n.key+")"):r(S,{key:n.key,index:i,animation:t.props.animation,onClick:t.doMove},n.val+"bar ("+n.key+")")},t.state={items:[]},t.items=[],t}t(i,n);var o=i.prototype;return o.componentDidMount=function(){for(var e=0;this.items.length<5;)this.items[this.items.length]={key:e,val:e},e++;this.setState({items:this.items})},o.render=function(){return r("div",null,[r("ul",null,this.state.items.map(this.renderItem)),r("h2",null,"Shuffle w. Anim"),r("p",null,this.props.description),r("button",{onClick:this.doAdd},"Add"),r("button",{onClick:this.doMix},"Shuffle"),r("button",{onClick:this.doDoubleMix},"DoubleShuffle"),r("button",{onClick:this.doMoveOne},"Move 1"),r("button",{onClick:this.doRemoveMix},"Remove"+(this.state.deleted?" ("+this.state.deleted+")":"")),r("button",{onClick:this.doClearMarkers},"Clear debug markers")])},i}(o),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#App1"),t=document.querySelector("#App2"),n=document.querySelector("#App3"),i=document.querySelector("#App4"),o=document.querySelector("#App5"),a=document.querySelector("#App6"),s="?functional"===location.search;Inferno.render(r(x,{useFunctionalComponent:s,animation:"HeightAndFade",description:"The children in this container animate opacity and height when added and removed. Click an item to remove it."}),e),Inferno.render(r(x,{useFunctionalComponent:s,animation:"NoTranistionEvent",description:"The children in this container have a broken animation. This is detected by inferno-animation and the animation callback is called immediately. Click an item to remove it."}),t),Inferno.render(r(D,{useFunctionalComponent:s,animation:"HeightAndFade",description:"This container fades in and blocks the children from animating on first render. There is no animation on divider between elements. When you click [Remove] a random row and another random divder will be removed. Click an item to remove it (leaving the divider)."}),n),Inferno.render(r(R,{useFunctionalComponent:s,animation:"HeightAndFade",description:"This container will shuffle keys or items. Click an item to remove it."}),i),document.querySelector("#Rerender > button").addEventListener("click",(function(e){e&&e.preventDefault(),Inferno.render(r(F,{useFunctionalComponent:s,animation:"HeightAndFade",items:5,description:"This container will be filled with 5 rows every time you click the button. Click an item to remove it."}),o)})),Inferno.render(r(T,{useFunctionalComponent:s,animation:"MoveAnim",description:"This container will animate items on shuffle. Click an item to randomly move it."}),a)}))}();
