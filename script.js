// openModal 함수를 전역 스코프로 이동
function openModal(imgSrc) {
    const modal = document.querySelector('.modal-gallery');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

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

    // 모달 닫기 이벤트
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.querySelector('.modal-gallery').style.display = 'none';
    });

    // 모달 바깥 클릭시 닫기
    window.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal-gallery');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 