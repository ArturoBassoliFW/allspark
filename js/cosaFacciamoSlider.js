var autoSwiper = new Swiper(".swiperCosaOffriamo", {
  slidesPerView: "auto",
  spaceBetween: 64,
  freeMode: true,
  loop: true,
  grabCursor: true,
  speed: 8000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});

var newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 64,
  freeMode: true,
  grabCursor: true,
});
