(function(){
  document.documentElement.classList.add('js');
  function iniciar(){
    var items=document.querySelectorAll('.hero,.bienvenida,.bloque,.tarjeta');
    items.forEach(function(el){el.classList.add('aparece');});
    if(!('IntersectionObserver' in window)){
      items.forEach(function(el){el.classList.add('visible');});
      return;
    }
    var obs=new IntersectionObserver(function(entradas){
      entradas.forEach(function(e){
        if(e.isIntersecting){
          var el=e.target;
          var pos=Array.prototype.indexOf.call(el.parentNode.children,el);
          el.style.animationDelay=(pos*80)+'ms';
          el.classList.add('visible');
          obs.unobserve(el);
        }
      });
    },{threshold:0.12});
    items.forEach(function(el){obs.observe(el);});
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',iniciar);
  }else{
    iniciar();
  }
})();
