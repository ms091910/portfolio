$(function(){
  //'./product.html?pname=베이스'
  var key, value;

  function getParams() {
 
  // 현재 페이지의 url   ./product.html?pname=베이스
  var url = decodeURIComponent(location.href);
  // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
  url = decodeURIComponent(url);  //  'ex2.html?num=1'

  var params='';
  // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
  params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
  // '문자열'.substring(시작인덱스 , 자를개수) 
  // 'abcdefg'.substring(2 , 3) ->  'cde'
  // params = 'pname=베이스' 
  
  key = params.split("=")[0];  //'pname'
  value = params.split("=")[1];  // '베이스'
  }   
  getParams();  //함수호출



 //ajax 처리

 $.ajax({
  url: './data/product2.json',
  dataType: 'json',
  success: function(data){
      var useData = data.product2;
      
      function dataPrint(arr){
          
              var txt = '<ul>';
              
              for(var i in arr){
                  
                  var $Pname = arr[i].Pname;
                  var $Image = arr[i].Image;
                  var $Type = arr[i].Type;

                  txt+='<li>';
                  txt+='<img src="'+ $Image +'" alt="'+ $Pname +'">';
                  txt+='<p>'+ $Pname +'</p>';
                  txt+='<span>';
                  txt+='<a class="pop_open" href="#">상세정보</a>';
                  txt+='</span>';
                  txt +='</li>';
              }

              txt += '</ul>';

              $('.product_list').html(txt);
         
      };

      var newArray = [];    //검색된 상품을 담기위한 배열
      var search_on =false;  //검색어가 넘어오지 않았을 때 false , 검색어가 넘어왔을 때 true
         
      dataPrint(useData);   //전체상품을 전부 출력

      $('.btn_all').click(function(e){  //모두보기 클릭시
          e.preventDefault();
          dataPrint(useData);
          $('.content_nav a').removeClass('current');
          $(this).addClass('current');
          search_on =false;  //검색어가 없다
      });


      $('.nav2').click(function(e){  //포장김치
         e.preventDefault();

         newArray = useData.filter(function(element){
           //console.log($('#title').val());
           //return element.Name == $('#title').val();
           return element.Type=='포장김치';
          });
         dataPrint(newArray);
         $('.content_nav a').removeClass('current');
          $(this).addClass('current');
          search_on =true;  
      });

      $('.nav3').click(function(e){  //김류
       e.preventDefault();

       newArray = useData.filter(function(element){
         //console.log($('#title').val());
         //return element.Name == $('#title').val();
         return element.Type=='김류';
        });
       dataPrint(newArray);
       $('.content_nav a').removeClass('current');
       $(this).addClass('current');
       search_on =true;  
    });

    $('.nav4').click(function(e){  //젓갈
       e.preventDefault();

       newArray = useData.filter(function(element){
         //console.log($('#title').val());
         //return element.Name == $('#title').val();
         return element.Type=='젓갈';
        });
       dataPrint(newArray);
       $('.content_nav a').removeClass('current');
       $(this).addClass('current');
       search_on =true;  
    });



      //팝업처리 함수
      var pop_txt="";   //팝업에 삽입할 태그를 만드는 변수

      function popchange(obj){
          pop_txt="";   
          pop_txt+='<img src="'+ obj.Popimg +'" alt="">';
          pop_txt+= '<div class="pop_bg"></div>';
          pop_txt+='<dl>';
          pop_txt+='<dt>'+ obj.Pop_tit +'</dt>';
          pop_txt+='<dd>'+ obj.Desc +'</dd>';
          pop_txt+='<dd>'+ obj.Kacl +'</dd>';
          pop_txt+='</dl>';

          $('.modal_box .pop_con').html(pop_txt);
      }
    
      //팝업창 열기
      $(document).on('click', '.pop_open', function(e) {
          e.preventDefault();
          $('.modal_box').fadeIn('fadt'); //팝업창 열기
          ind = $(this).index('.pop_open');  // 0 1 2 3 4 5 6 7
    
          if(search_on==false){//검색 안되었을때
              popchange(useData[ind]); //전체 객체배열에서 클릭한 인덱스에 해당하는 객체를 전달
          }else if(search_on==true){//검색 되었을때
              popchange(newArray[ind]);   //검색된 객체배열에서 클릭한 인덱스에 해당하는 객체를 전달
          }
      });

      //팝업창 닫기
      $('.close_pop, .modal_box').click(function(e){  //모두보기 클릭시
          e.preventDefault();
          $('.modal_box').fadeOut('fast');
      });

     } 
 });
  
});