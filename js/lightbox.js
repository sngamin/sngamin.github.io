/* =========================================
   이미지 크게 보기 (라이트박스)
   - .case-image 안의 이미지를 클릭하면 화면 전체에 크게 띄움
   - 배경 클릭, 닫기 버튼, ESC 키로 닫기
   ========================================= */

// 1. 라이트박스 틀을 한 번만 만들어서 body 맨 끝에 붙여 둠
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="닫기">✕</button>
  <img class="lightbox-img" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.lightbox-close');

// 2. 열기: 클릭한 이미지의 주소와 설명을 라이트박스 이미지에 복사
function openLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('is-open');       // CSS에서 .is-open일 때 보이게 함
  document.body.style.overflow = 'hidden'; // 뒤쪽 페이지 스크롤 막기
  lightbox.scrollTop = 0;                  // 항상 이미지 맨 위부터 보이게
}

// 3. 닫기
function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';       // 스크롤 다시 허용
}

// 4. 페이지의 모든 케이스 이미지에 클릭 이벤트 연결
document.querySelectorAll('.case-image img').forEach(function (img) {
  img.addEventListener('click', function () {
    openLightbox(img);
  });
});

// 5. 닫는 방법 세 가지
closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (event) {
  // 이미지 바깥(어두운 배경)을 눌렀을 때만 닫기
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeLightbox();
});
