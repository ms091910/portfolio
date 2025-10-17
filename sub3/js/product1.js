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
    url: './data/product1.json',
    dataType: 'json',
    success: function(data){
        var useData = data.product1;
        
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
            
           if(value){
                newArray = useData.filter(function(element){
                    return element.Pname.includes(value);   //상품명에 검색어가 포함되어 있는 배열을 return
                });

                if(newArray.length!=0){  //검색된 상품이 배열에 있으면..
                  dataPrint(newArray);
                }else{  //검색된 상품이 배열에 없으면..
                    $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; font-weight: 500; color:var(--font-color-main)">검색된 상품이 없습니다</span>');
                }
                search_on =true;  //검색어가 넘어왔다
           }else{   //다른 페이지에서 검색어가 넘어오지 않았을 때
                dataPrint(useData);   //전체상품을 전부 출력
                search_on =false;     //검색어가 넘어오지 않았음
           }
           

           //검색버튼을 클릭했을때...
           $('#btn').click(function(e){
                e.preventDefault();

                if($('#title').val()){  //검색어가 있으면
                    newArray = useData.filter(function(element){
                        return element.Pname.includes($('#title').val());
                    });

                    if(newArray.length!=0){
                        dataPrint(newArray);
                    }else{
                          $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; font-weight: 500; color:var(--font-color-main)">검색된 상품이 없습니다</span>');  
                    }
                    $('#title').val('');
                    search_on =true;   //검색어를 입력했다
                }else{  //검색어가 없으면
                    alert('검색어를 입력하세요.')
                }  
           });

        $('.btn_all').click(function(e){  //모두보기 클릭시
            e.preventDefault();
            dataPrint(useData);
            $('.content_nav a').removeClass('current');
            $(this).addClass('current');
            search_on =false;  //검색어가 없다
        });


        $('.nav2').click(function(e){  //육가공
           e.preventDefault();

           newArray = useData.filter(function(element){
             //console.log($('#title').val());
             //return element.Name == $('#title').val();
             return element.Type=='육가공';
            });
           dataPrint(newArray);
           $('.content_nav a').removeClass('current');
            $(this).addClass('current');
            search_on =true;  
        });

        $('.nav3').click(function(e){  //누룽지
         e.preventDefault();

         newArray = useData.filter(function(element){
           //console.log($('#title').val());
           //return element.Name == $('#title').val();
           return element.Type=='누룽지';
          });
         dataPrint(newArray);
         $('.content_nav a').removeClass('current');
         $(this).addClass('current');
         search_on =true;  
      });

      $('.nav4').click(function(e){  //즉석밥
         e.preventDefault();

         newArray = useData.filter(function(element){
           //console.log($('#title').val());
           //return element.Name == $('#title').val();
           return element.Type=='즉석밥';
          });
         dataPrint(newArray);
         $('.content_nav a').removeClass('current');
            $(this).addClass('current');
            search_on =true;  
      });

      $('.nav5').click(function(e){  //국탕
         e.preventDefault();

         newArray = useData.filter(function(element){
           //console.log($('#title').val());
           //return element.Name == $('#title').val();
           return element.Type=='국탕';
          });
         dataPrint(newArray);
         $('.content_nav a').removeClass('current');
         $(this).addClass('current');
         search_on =true;  
      });

      $('.nav6').click(function(e){  //냉동밥
         e.preventDefault();

         newArray = useData.filter(function(element){
           //console.log($('#title').val());
           //return element.Name == $('#title').val();
           return element.Type=='냉동밥';
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
            pop_txt+='<dd>'+ obj.Allergy +'</dd>';
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