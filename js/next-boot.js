NexT.boot={};NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent();NexT.utils.registerCanIUseTag();document.querySelector(".site-nav-toggle .toggle").addEventListener("click",(()=>{event.currentTarget.classList.toggle("toggle-close");var e=document.querySelector(".site-nav");var t=e.classList.contains("site-nav-on")?"slideUp":"slideDown";if(typeof Velocity==="function"){Velocity(e,t,{duration:200,complete:function(){e.classList.toggle("site-nav-on")}})}else{e.classList.toggle("site-nav-on")}}));var e=200;document.querySelectorAll(".sidebar-nav li").forEach(((t,i)=>{t.addEventListener("click",(t=>{var o=t.currentTarget;var a="sidebar-nav-active";var s="sidebar-panel-active";if(o.classList.contains(a))return;var n=document.querySelectorAll(".sidebar-panel");var r=n[i];var l=n[1-i];window.anime({targets:l,duration:e,easing:"linear",opacity:0,complete:()=>{l.classList.remove(s);r.style.opacity=0;r.classList.add(s);window.anime({targets:r,duration:e,easing:"linear",opacity:1})}});[...o.parentNode.children].forEach((e=>{e.classList.remove(a)}));o.classList.add(a)}))}));window.addEventListener("resize",NexT.utils.initSidebarDimension);window.addEventListener("hashchange",(()=>{var e=location.hash;if(e!==""&&!e.match(/%\S{2}/)){var t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}}))};NexT.boot.refresh=function(){CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img");CONFIG.lazyload&&window.lozad(".post-body img").observe();CONFIG.pangu&&window.pangu.spacingPage();CONFIG.exturl&&NexT.utils.registerExtURL();CONFIG.copycode.enable&&NexT.utils.registerCopyCode();NexT.utils.registerTabsTag();NexT.utils.registerActiveMenuItem();NexT.utils.registerLangSelect();NexT.utils.registerSidebarTOC();NexT.utils.wrapTableWithBox();NexT.utils.registerVideoIframe()};NexT.boot.motion=function(){if(CONFIG.motion.enable){NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap()}NexT.utils.updateSidebarPosition()};document.addEventListener("DOMContentLoaded",(()=>{NexT.boot.registerEvents();NexT.boot.refresh();NexT.boot.motion()}));