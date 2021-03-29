let wrap = document.querySelector('.wrap');
let slider = new Swiper('.main', {
  wrapperClass: "main__wrap",
  slideClass: "main__block",

  direction: 'vertical',
  slidesPerView: 'auto',
  parallax: true,  

  keyboard: {
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  watchOverFlow: true,
  speed: 800,
  // обновить свайпер, при изменении элементов слайдера
  observer: true,
  // обновить свайпер, при изменении дочерних элементов слайдера
  observeSlideChildren: true,
  // обновить свайпер, при изменении родительских элементов слайдера
  observeParents: true,

  pagination: {
    el: '.main__pagination',
    type: 'bullets',
    bulletClass: 'main__bullet',
    bulletActiveClass: 'main__bullet--active',
    clickable: true,
  },

  scrollbar: {
    el: '.main__scroll',
    dragClass: 'main__drag-scroll',
    // возможность перетаскивать скролл
    draggable: true
  },
  // откл автоинициализацию
  init: false,

  on: {
    init: function () {
      menuSlider();
      hiddenBullets();
      wrap.classList.add('--loaded');
      
    },
    slideChange: function () {
      removeClass();
      menuLinks[slider.realIndex].classList.add('--active');
    },
    resize: function () {
      hiddenBullets();
    }
  }
});



let menuLinks = document.querySelectorAll('.menu__link');
// активация навигационных ссылок
function menuSlider() {
  if (menuLinks.length){
    menuLinks[slider.realIndex].classList.add('--active');
    
      for(let index = 0; index < menuLinks.length; index++) {
        let menuLink = menuLinks[index];      
        menuLink.addEventListener('click', (e) => {
          removeClass();
          slider.slideTo(index, 800);
          menuLink.classList.add('--active');
          e.preventDefault();   
        })
      }   
  }
}

function removeClass() {
  let menuLinkActive = document.querySelector('.menu__link.--active');

  if(menuLinkActive) {
    menuLinkActive.classList.remove('--active');
  }
}


// если контент больше высоты экрана
function hiddenBullets() {
  if(wrap.classList.contains('--bigContent')){
    wrap.classList.remove('--bigContent');
    slider.params.freeMode = false;
  }
  for(let index = 0; index < slider.slides.length; index++) {
      let slide = slider.slides[index];
      const slideContent = slide.querySelector('.block__content');
      if(slideContent){
        const slideContentHeight = slideContent.offsetHeight;
        if(slideContentHeight > window.innerHeight){
          wrap.classList.add('--bigContent');
          slider.params.freeMode = true;
          break;
        }
      }
  }
}


slider.init();


