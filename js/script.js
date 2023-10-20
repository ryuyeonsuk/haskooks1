$(function() {
  var swiper = new Swiper(".mainSlide", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//MENU
    let gnb = $('.gnb > li');
    //console.log(gnb)
  $(gnb).on('mouseover', function() {
      $(this).siblings().children('ul').stop().slideUp(100);
      $(this).children('ul').stop().slideDown(250);
      //$('.subMenu').slideDown()
    });
    $('.subMenu').on('mouseleave', function() {
        $(this).slideUp(300)
    }) 

    
  //btnTop  
    let $header = $('header'),
    $txt1 = $('.scrollTop > span'),
    $txt2 =$('.offset > span');

    //.Math.floor - 자바스크립트 내장함수 -정수값을 반환
    //.Offset() - 요소의 위치값
    //.Offset().top / .Offset().left()/.scrollTop()/.scrollLeft() -right/bottom 없음. (늘이는 포인트라서, top left를 기준)
let headerTop = Math.floor($header.offset().top)
//console.log(headerTop) //200
//변수는 $txt2/headerTop //text()메소드

$txt2.text(headerTop)



//스크롤 이벤트
$(window).scroll(function(){
//스크롤 양을 변수에 저장
let i = Math.floor($(this).scrollTop());// 스크롤의 움직임에 따라서 스크롤 증가 값을변수에 저장
//console.log(i)
$txt1.text(i)

if (headerTop < i) { //headerTop 200보다 i(스크롤양)가 더 크면
    $header.addClass('on');
    $('.btnTop').fadeIn() 
} else {
    $header.removeClass('on')
    $('.btnTop').fadeOut() 
}


});

$(function(){
  //delay() 메소드는 실행이 되기까지(글자가 나타나는)지연시간
  $('.container').delay(200).animate({
        opacity: 1,
        bottom: 0
    },800,
    function(){
    $('.issue1 ').delay(200).animate({opacity: 1, top: 0},800) /* css에서 .issueBox ul li:top: 300px; opacity: 0; */
    $('.issue2 ').delay(600).animate({opacity: 1, top: 0},800)
    $('.issue3 ').delay(1000).animate({opacity: 1, top: 0},800)
    $('.issue4 ').delay(1400).animate({opacity: 1, top: 0},800)
    $('.issue5 ').delay(1800).animate({opacity: 1, top: 0},800)
    $('.issue6 ').delay(2200).animate({opacity: 1, top: 0},800)
    $('figure').delay(2400).animate({opacity: 1, bottom: 0},800)
    $('.bottomImg').delay(2600).animate({opacity: 1, bottom: 0},800)
    

    }); 

    /* 회사소개 */
    $(function() {
      let tab = $('.su_tab li');

      tab.on('click', function() {
          let idx = $(this).index();
          let tab_cont = $(this).parents('.su_tab').siblings('.su_tabMenu').eq(idx);

          //console.log(idx);
          //console.log(tab_cont)
          //1. 클릭한 li에 on 클래스 추가-저장된 idx를 li/tab_content에 전달한다음, addClass로 활성화
          $(this).addClass('on');

          //현재 클릭된 li의 형제요소들은 클래스 제거
          $(this).siblings().removeClass('on')
          
           //tab_content에도 add/remove클래스 적용
          tab_cont.addClass('on');
          tab_cont.siblings().removeClass('on');
          
      })

    });
  /* //회사소개 */

  /* 계열사 */
  $(function() {
    let tab = $('.tab li');

    tab.on('click', function() {
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);

        //console.log(idx);
        //console.log(tab_cont)
        //1. 클릭한 li에 on 클래스 추가-저장된 idx를 li/tab_content에 전달한다음, addClass로 활성화
        $(this).addClass('on');

        //현재 클릭된 li의 형제요소들은 클래스 제거
        $(this).siblings().removeClass('on')
        
         //tab_content에도 add/remove클래스 적용
        tab_cont.addClass('on');
        tab_cont.siblings().removeClass('on');
        
    })

});
/* //계열사 */



	$("#inputBox").click(function(){		  
		alert("검색어을(를) 정확히 입력하세요.");
	 });
	





    
});

});