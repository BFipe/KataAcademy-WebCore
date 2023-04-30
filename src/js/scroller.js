let init = false;
const pagination = document.querySelector('.swiper-pagination');
function swiperCard() {
  if (window.innerWidth <= 760) {
    if (!init) {
      pagination.classList.remove('hidden');

      init = true;

      swiper = new Swiper('.swiper-brands', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        direction: 'horizontal',
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 195,
          },
          // when window width is >= 560px
          560: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        },
      });
    }
  } else if (init) {
    pagination.classList.add('hidden');
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener('resize', swiperCard);
