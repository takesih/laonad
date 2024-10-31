// 페이지 로딩 완료 시 실행될 코드
window.addEventListener('load', () => {
    // 최소 1.5초 동안 로딩 화면 표시
    setTimeout(() => {
        // 로딩 화면 숨기기
        document.querySelector('.loading-screen').style.display = 'none';
        // 콘텐츠 표시
        document.querySelector('.content').style.display = 'block';
    }, 1500);  // 1500ms = 1.5초
    
    // Typed.js 초기화
    new Typed('.typed-text', {
        strings: [
            '춘천시 칠전동에 위치한 당구장!',
            '언제든 갈 수 있는 당구장!?',
            '24시간 무인셀프 연중무휴',
            '바로! 라온빌리어즈!'
        ],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
    });
    
    // AOS 설정 개선
    AOS.init({
        duration: 2000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
    
    // 스크롤 다운 클릭 이벤트
    document.querySelector('.scroll-down').addEventListener('click', () => {
        const featuresSection = document.querySelector('.features');
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
}); 