$(document).ready(function() {
  var swiper_tab = new Swiper('.swiper_tab', {
    autoHeight: true,
    speed : 500
  });

  swiper_tab.on('slideChange', function () {
    $(".tabs .active").removeClass('active');
    $(".tabs a").eq(swiper_tab.activeIndex).addClass('active');
  });
  
  $(".tabs a").on('touchstart mousedown', function(e) {
    e.preventDefault();
    $(".tabs .active").removeClass('active');
    
    $(this).addClass('active');

    //swiper.swipeTo($(this).index());					
    swiper_tab.slideTo($(this).index());
  });
  
  $(".tabs a").click(function(e) {
  
    e.preventDefault();
  
  });
});




//하단 이미지 슬라이드
var swiper = new Swiper('.swiper2', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView:1,  //단수 (breakpoints: 의 포인트는 먼저 초기값을 모바일로 두어야 한다.640보다 작을 때)
  spaceBetween: 30, 
  pagination: { 
    el: '.swiper-pagination',
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  
  breakpoints:{
    380 : {
      slidesPerView: 1.3
    },
    640 : {   //브라우저가 640이상
      slidesPerView: 1.5
    },
    768 : {   //브라우저가 768이상
      slidesPerView: 2.3
    },
    1024 : {  //브라우저가 1024이상
      slidesPerView: 2.6
    },
    1280 : {  //브라우저가 1280이상
      slidesPerView: 3.3
    }
  }
});
