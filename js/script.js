const productSlider = new Swiper('.product__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.product__slider-next',
    prevEl: '.product__slider-prev',
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    960: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
});
