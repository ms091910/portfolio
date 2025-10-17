//회사소개 script

  $('.company_right').css('opacity',1);   //이미지에 투명도 효과
  $('.company_introduction .company_left li:eq(0) a').children().css('filter','grayscale(70%)').css('border-radius','25px');

  $('.company_introduction .company_left li a').click(function(e){
      e.preventDefault();
      var ind = $(this).index('.company_introduction .company_left li a');
      // console.log(ind);

      $('.company_right').attr('src','./main_images/company_introduction_'+(ind+1)+'_big.jpg');  //이미지태그의 경로를 해당 이미지로 교체
      $('.company_right').hide().fadeIn('slow');  //스르륵 나타나게

      $('.company_introduction .company_left li a').children().css('filter','grayscale(0)').css('border-radius','0');  //모든 버튼 비활성화
      $(this).children().css('filter','grayscale(70%)').css('border-radius','25px');  //자신의 버튼만 활성화
  });


//제품 script

//제품 검색 
$('#total_btn').click(function(e){
    e.preventDefault();

    var pname = $('#total_title').val();  //입력된 검색어

    console.log(pname);
    if(pname){  //검색어를 입력했으면...
        if($('#pro').val()==1){
            location.href = './sub3/sub3_1.html?pname='+  pname;
        }else if($('#pro').val()==2){
            location.href = './sub3/sub3_2.html?pname='+  pname;
        }else if($('#pro').val()==3){
            location.href = './sub3/sub3_3.html?pname='+  pname;
        }else if($('#pro').val()==4){
            location.href = './sub3/sub3_4.html?pname='+  pname;
        }
    }else{   //검색어를 입력하지 않았다면...
      alert('검색어를 입력하세요');
    }
 });


//제품 이미지 이동
var position1=0;  //최초위치 - left값
var timeonoff1;  //타이머의 정보를 담는 변수

var position2=-2520;  //최초위치 - left값
var timeonoff2;  //타이머의 정보를 담는 변수

var movesize=2; //이동 크기 , 속도

$('.product1 ul').after($('.product1 ul').clone()); //복재
$('.product2 ul').after($('.product2 ul').clone()); //복재
// $('가져다 놓을 태그').after('기준태그');

function partnerMove1(){
         position1-=movesize;  // 150씩 감소
     $('.product1').css('top',position1);
     
      if(position1 < -2520){
            $('.product1').css('top',-840);   //left값의 초기화
            position1=-840;    //변수도 초기화 / 너비보다 이미지가 더 많으면 돌아갈때 마지막에 끝나는 이미지와 동일한 이미값의 좌표로 설정
      } 
};

 timeonoff1= setInterval(partnerMove1, 50);  //0.1초 마다 호출  -> 속도를 빠르게 줘야 부드럽게 슬라이드 하는것 처럼 보임
 
 $('.product1').hover(function(){
     clearInterval(timeonoff1);
 },function(){
         timeonoff1= setInterval(partnerMove1, 50);	
 });


function partnerMove2(){
    position2+=movesize;  // 150씩 감소
$('.product2').css('top',position2);

 if(position2 > 0){
       $('.product2').css('top',-1680);   //left값의 초기화
       position2=-1680;    //변수도 초기화 / 너비보다 이미지가 더 많으면 돌아갈때 마지막에 끝나는 이미지와 동일한 이미값의 좌표로 설정
 } 
};

timeonoff2= setInterval(partnerMove2, 50);  //0.1초 마다 호출  -> 속도를 빠르게 줘야 부드럽게 슬라이드 하는것 처럼 보임

$('.product2').hover(function(){
clearInterval(timeonoff2);
},function(){
    timeonoff2= setInterval(partnerMove2, 50);	
});



//사업경영 script




//인재채용 script
var origin=460;     //최초 각각의 너비
var min_width=335;  //마우스 오버 되지 않은 li의 너비
var max_width=710;  //마우스 오버 된 li의 너비

$('.employment_inner li').hover(function(){  //마우스 엔터시 -> 딜레이도 추가하기
    $('.employment_inner li').animate({width:min_width}, 300).clearQueue();  
    $(this).animate({width:max_width}, 300).clearQueue(); 
    $(this).find('h4').css({'margin-top':'100px','font-size':'3rem','color':'#ffc20e'});
    $(this).find('h4 span').css({'color':'#ffc20e'});
    $(this).find('p').css({'opacity':'1','transition':'all .3s','transition-delay':'.3s'});
    $(this).find('div').css('background','rgba(0,0,0,.5)');
},
function(){   //마우스 리브시
    $('.employment_inner li').animate({width:origin},300).clearQueue(); 
    $(this).find('h4').css({'margin-top':'350px','color':'#fff','font-size':'2.3rem'});  //최초의 상태
    $(this).find('h4 span').css({'color':'#fff'});  
    $(this).find('p').css({'opacity':'0','transition':'none'});
    $(this).find('div').css('background','none');
});





//공지사항 script
var swiper = new Swiper('.swiper-container',{
    slidesPerView: 'auto',  //단수  , 'auto'(내가 원하는 단의 너비) 
    loop: true,  //무한 loop
  });