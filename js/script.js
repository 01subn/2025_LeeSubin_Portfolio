$(function(){

    $('.menu>li>a').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    // 모달 숨기기
    $('.modal').hide();

    //파동 앱
    $('.p-a-btn').click(function(ev){
        ev.preventDefault();
        $('.pa-a-modal').fadeIn(300);
    })

    // 파동 웹
    $('.p-w-btn').click(function(ev){
        ev.preventDefault();
        $('.pa-w-modal').fadeIn(300);
    })

    // 아마스빈
    $('.ama-btn').click(function(ev){
        ev.preventDefault();
        $('.ama-modal').fadeIn(300);
    })

    // 타고온
    $('.ta-btn').click(function(ev){
        ev.preventDefault();
        $('.ta-modal').fadeIn(300);
    })

    // 닫기버튼 공통
    $('.close').click(function(){
        $('.modal').fadeOut(300);
    })

    // 모달이 아닌 부분을 클릭했을때 modal 닫힘
    $('.modal').click(function(event){
        if ($(event.target).closet('.pop').length === 0) {
            $('.modal').fadeOut(200); //모달 숨김 처리
        }
    });


    //누르면 이메일 복사
    // 함수가 전역에서 실행되도록 보장
        window.copyCode = function() {
            const code = document.querySelector(".c-mail").textContent.trim(); // 공백 제거

            window.navigator.clipboard.writeText(code).then(() => {
                alert("이메일이 복사되었습니다.");
            }).catch(err => {
                console.error("복사 실패:", err);
            });
        };
})