NexT.motion={};NexT.motion.integrator={queue:[],init:function(){this.queue=[];return this},add:function(e){const t=e();if(CONFIG.motion.async)this.queue.push(t);else this.queue=this.queue.concat(t);return this},bootstrap:function(){if(!CONFIG.motion.async)this.queue=[this.queue];this.queue.forEach((e=>{const t=window.anime.timeline({duration:0,easing:"linear"});e.forEach((e=>{if(e.deltaT)t.add(e,e.deltaT);else t.add(e)}))}))}};NexT.motion.middleWares={header:function(){const e=[];function t(t){e.push({targets:t,scaleX:[0,1],duration:500,deltaT:"-=200"})}function o(t,o=false){e.push({targets:t,opacity:1,top:0,deltaT:o?"-=200":"-=0"})}o(".header");CONFIG.scheme==="Mist"&&t(".logo-line");CONFIG.scheme==="Muse"&&o(".custom-logo-image");o(".site-title");o(".site-brand-container .toggle",true);o(".site-subtitle");(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")&&o(".custom-logo-image");document.querySelectorAll(".menu-item").forEach((t=>{e.push({targets:t,complete:()=>t.classList.add("animated","fadeInDown"),deltaT:"-=200"})}));return e},subMenu:function(){const e=document.querySelectorAll(".sub-menu .menu-item");if(e.length>0){e.forEach((e=>{e.classList.add("animated")}))}return[]},postList:function(){const e=[];const{post_block:t,post_header:o,post_body:n,coll_header:i}=CONFIG.motion.transition;function s(t,o){if(!t)return;document.querySelectorAll(o).forEach((o=>{e.push({targets:o,complete:()=>o.classList.add("animated",t),deltaT:"-=100"})}))}s(t,".post-block, .pagination, .comments");s(i,".collection-header");s(o,".post-header");s(n,".post-body");return e},sidebar:function(){const e=document.querySelector(".sidebar");const t=CONFIG.motion.transition.sidebar;if(t&&(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")){return[{targets:e,complete:()=>e.classList.add("animated",t)}]}return[]},footer:function(){return[{targets:document.querySelector(".footer"),opacity:1}]}};