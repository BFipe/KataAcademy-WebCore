  var init = false;
  var pagination = document.querySelector('.swiper-pagination');
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        pagination.classList.remove('hided');

        init = true;
        
        swiper = new Swiper(".swiper-brands", {
          // autoplay: {
          //   delay: 2500,
          //   disableOnInteraction: true,
          // },
          direction: "horizontal",
          slidesPerView: 1,
          freeMode: true,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      pagination.classList.add('hided');
      swiper.destroy();
      init = false;
    }
  }
  
  swiperCard();
  window.addEventListener("resize", swiperCard);