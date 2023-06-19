const productSlider = new Swiper('.product__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // breakpoints: {
  //   970: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   770: {
  //     slidesPerView: 2.5,
  //   },
  //   620: {
  //     slidesPerView: 2,
  //   },
  //   300: {
  //     slidesPerView: 1,
  //   },
  // },
  navigation: {
    nextEl: '.product__slider-next',
    prevEl: '.product__slider-prev',
  },
});
