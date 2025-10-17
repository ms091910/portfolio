$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var win_height =$(window).height();
  var header_height =$('header').height();
 
  if(scroll>win_height){ 
      $('.topMove').fadeIn('slow');  
  }else{
      $('.topMove').fadeOut('fast');
  }

  if(scroll>win_height-header_height){ 
      $('header').css('background','#000');  
      $('header ul li a').css('color','#fff')  
  }else{
      $('header').css('background','transparent');
      $('header ul li a').css('color','#fff')
  }
});



 //상단 top이동 코드
 $('.top_move').click(function(e){
  e.preventDefault();

  $('html,body').stop().animate({'scrollTop':0}, 1000);   //상단으로 부드럽게 스크롤을 이동시킨다
});

$(window).on('scroll',function(){   //스크롤 위치의 변화가 생기면
  var scroll = $(window).scrollTop();   //스크롤탑의 위치를 변수에 담는다
  var visual_height = $('.videoBox').height();
  // console.log(scroll);
  if(scroll>visual_height){
     $('.top_move').fadeIn('slow');
  }else{
     $('.top_move').fadeOut('fast');
  }
});



//네비게이션 모양바꾸기
$(document).ready(function() {

  var onoff = false; //false(메뉴닫힘) true(메뉴열림)
  $(".menuOpen").click(function(e){
     e.preventDefault();
     if(onoff == false){
       $("#gnb").slideDown('slow');
       $('#headerArea').addClass('mn_open');//메뉴모양변경
       onoff = true;
     }else{
       $("#gnb").slideUp('fast');
       $('#headerArea').removeClass('mn_open');
       onoff = false;
     }
  });

 //  네비높이 맞추기(페이지 로딩시 1회)
 var screenSize = $(window).width();
 var winh =  $(document).height();

 if( screenSize > 1024){
   $("#gnb").height('auto');
 }else{
   $("#gnb").height(winh);
 }
 
 var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)

  $(window).resize(function(){ 
     var screenSize = $(window).width();  //가로 해상도
     if( screenSize > 1024){ 
       $("#gnb").show();
       $("#gnb").height('auto');
       current=1; 
     }
     if(current==1 && screenSize <= 1024){
       $("#gnb").hide();
       $("#gnb").height(winh);
       $('#headerArea').removeClass('mn_open');
        current=0; //모바일
     }
   }); 
   
 });