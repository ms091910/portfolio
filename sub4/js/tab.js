// JavaScript Document

$(document).ready(function(){
    var cnt = $('.cf_content .tab_menu li').size();
    $('.cf_content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.cf_content .tab_menu .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.cf_content .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.cf_content .tab_menu .tab');  // 클릭시 해당 index를 뽑아준다
        //   console.log(ind);

          $(".cf_content .contlist").hide(); //모든 탭내용을 안보이게...
          $(".cf_content .contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
          $('.tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
   

     $('.cf_content .contlist ul li a').click(function(){
           var scroll = 1000;

           $('html,body').stop().animate({'scrollTop':scroll}, 1000); 
     });

  });

