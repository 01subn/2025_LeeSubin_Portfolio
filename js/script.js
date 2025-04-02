$(function(){

    // // header 메뉴 클래스 'on' 옮기기
    // $('.menu>li>a').click(function(){

    // });
    function updateSectionClass() {
        const scrollValue = $(window).scrollTop();
        let activeSection = null;
    
        $(".menu li a").each(function () {
            const targetId = $(this).attr("href");
            const targetSection = $(targetId);
    
            if (targetSection.length) {
                const sectionTop = targetSection.offset().top;
                const sectionHeight = targetSection.outerHeight();
    
                if (scrollValue >= sectionTop && scrollValue < sectionTop + sectionHeight) {
                    activeSection = targetId;
                }
            }
        });
    
        // 메뉴의 'on' 클래스 업데이트
        $(".menu li a").each(function () {
            $(this).toggleClass("on", $(this).attr("href") === activeSection);
        });
    }

    // ✅ 페이지 로드 시 `.se1`이 활성화되도록 실행
    updateSectionClass();

    // ✅ 스크롤 시 클래스 업데이트
    $(window).on("scroll", updateSectionClass);


    
    $('.menu li a').on('click', function(ev) {
        ev.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        $(this).addClass('on');
        $(this).parent().siblings().find('a').removeClass('on');
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
        if ($(event.target).closest('.pop').length === 0) {
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