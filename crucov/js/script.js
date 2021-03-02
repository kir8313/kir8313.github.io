

new Swiper('.swiper1', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 800,
  grabCursor: true,
  loop: true,
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      }, 
});

new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,
  grabCursor: true,
  watchOverflow: true,  
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
      }, 
  breakpoints: {
        // when window width is >= 320px
        // 1600: {
       
        // }
      },
})



