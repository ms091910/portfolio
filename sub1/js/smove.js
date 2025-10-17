//해당 년도로 부드럽게 이동하는 코드

$('.history_menu li a').click(function(e){  //각각의 년도 버튼을 클릭하면 
  e.preventDefault();

  var target_value = 0;

  if($(this).hasClass('list1')){  //첫번째 버튼 클릭시
    target_value = 1000;
  }else if($(this).hasClass('list2')){
    target_value = 4100;
  }else if($(this).hasClass('list3')){
    target_value = 6600;
  }

  $('html,body').stop().animate({'scrollTop':target_value}, 1000);
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();

  // console.log(scroll);
  // 1000
  // 4100
  // 6600
});


//sticky 메뉴 , spy 메뉴
var hmench = $('.content_navbox').height();
var h2025 = $('.h2025').offset().top - hmench -100;
var h2017 = $('.h2017').offset().top - hmench -100;
var h1990 = $('.h1990').offset().top - hmench -100;

$('.content_navbox li a').click(function(e){
  e.preventDefault();
  var htarget =0;

  if($(this).hasClass('list1')){
    htarget = h2025;
  }else if($(this).hasClass('list2')){
    htarget = h2017;
  }else if($(this).hasClass('list3')){
    htarget = h1990;
  }

  $('html,body').stop().animate({'scrollTop':htarget},'slow');
});


$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);

  if(scroll>=845){
    $('header').hide();
    $('#content .content_area .content_inner .content_navbox').addClass('fix').css;
  }else{
    $('header').show();
    $('#content .content_area .content_inner .content_navbox').removeClass('fix');
  }


  $('.history_menu li a').removeClass('spy');

  if(scroll>=h2025 && scroll<h2017){
    $('.content_navbox li:eq(0) a').addClass('spy');
  }else if(scroll>=h2017 && scroll<h1990){
    $('.content_navbox li:eq(1) a').addClass('spy');
  }else if(scroll>=h1990){
    $('.content_navbox li:eq(2) a').addClass('spy');
  }
});