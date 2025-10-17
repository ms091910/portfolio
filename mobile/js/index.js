// 비주얼 스와이퍼 영역
var swiper1 = new Swiper('.swiper1', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1,  //단수
  spaceBetween: 0,  //단사이 여백
  loop: true,  //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  // navigation: {    //이전/다음 버튼
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: {   //페이지 네이션
    el: '.swiper-pagination',
    //dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  autoplay: {  //자동
    delay: 4000,
    disableOnInteraction: false
  },
  // scrollbar: {  //하단 스크롤바
  //   el: '.swiper-scrollbar',
  //   hide: true
  // }
});


// 회사소개 스와이퍼
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 5,
  slidesPerView: 4,
  // freeMode: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


//제품소개 스와이퍼
var swiper2 = new Swiper('.swiper2', {
  autoHeight: true,
  slidesPerView: 1.2,
  //centeredSlides: true,
  spaceBetween: 15,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


//사업경영 스와이퍼
var swiper3 = new Swiper('.swiper3', {
  effect: 'flip',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  }
});