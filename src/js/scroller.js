  let init = false;
  let pagination = document.querySelector('.swiper-pagination');
  function swiperCard() {
    if (window.innerWidth <= 760) {
      if (!init) {

        pagination.classList.remove('hidden');

        init = true;
        
        swiper = new Swiper(".swiper-brands", {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          direction: "horizontal",
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } 
    
    else if (init) {
      pagination.classList.add('hidden');
      swiper.destroy();
      init = false;
    }
  }
  
  swiperCard();
  window.addEventListener("resize", swiperCard);