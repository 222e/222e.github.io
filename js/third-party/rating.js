(function(){const i=[{widget:"Rating",id:CONFIG.rating.id,el:"wpac-rating",color:CONFIG.rating.color}];document.addEventListener("page:loaded",(()=>{if(!CONFIG.page.isPost)return;const n=i.map((i=>({...i})));if(window.WPac){WPac.init(n)}else{window.wpac_init=n}}))})();