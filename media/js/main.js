//장소 스크립트
var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   coverflowEffect: {
     rotate: -15,
     stretch: 0,
     depth: 300,
     modifier: 1,
     slideShadows : true,
   },
   pagination: {
     el: '.swiper-pagination',
   },
 });

 var gdata = [
   {'title':'Room of the Segnatura', 'desc':"The Room of the Segnatura contains Raphael's frescoes"},
   {'title':'The Last Judgement', 'desc':'Before the final judgment, we are dazzled by splendor and fear'},
   {'title':'Laocoön', 'desc':"Don't trust the Greeks! They might be a trap"},
   {'title':'Cortile de la Pigna', 'desc':'Garden with ancient pine cone carvings'},
   {'title':'Secret Garden of Castel Gandolfo', 'desc':"The Pope's Summer Palace"},
   {'title':'The Belvedere Torso', 'desc':'The perfected imperfection of Renaissance art'},
   {'title':'Sistine Chapel', 'desc':'into the world of the Book of Revelation'},
 ];
 var text = document.getElementById('text');
 var output ='';

 output +='<dl>';
 output +='<dt>'+ gdata[0].title +'</dt>';
 output +='<dd>'+ gdata[0].desc +'</dd>';
 output +='</dt>';  
 text.innerHTML = output;

 swiper.on('transitionEnd', function() {
     //console.log(swiper.realIndex);
     var sind = swiper.realIndex;  // 0~9
     
     output ='<dl>';
     output +='<dt>'+ gdata[sind].title +'</dt>';
     output +='<dd>'+ gdata[sind].desc +'</dd>';
     output +='</dt>';  
     text.innerHTML = output;
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
