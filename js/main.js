$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,
    // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },

    // Navigation arrows
    //   Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // Responsive breakpoints
    // настройки адаптивной версии
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        // spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
        // spaceBetween: 40
      }
    }
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,
    // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },

    // Navigation arrows
    //   Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
  });

  $("#review-1").on('click', function () {

    $.fancybox.open([
      {
        src: './img/reviews/review-1.jpg',
        opts: {
          caption: 'Букет невесты',
          thumb: './img/reviews/review-1.jpg'
        }
      },
      {
        src: './img/reviews/review-2.jpg',
        opts: {
          caption: 'Букет "Весна"',
          thumb: './img/reviews/review-2.jpg'
        }
      },
      {
        src: './img/reviews/review-3.jpg',
        opts: {
          caption: 'Букет на День Учителя',
          thumb: './img/reviews/review-3.jpg'
        }
      }
    ], {
      loop: true,
      thumbs: {
        autoStart: true
      }
    });
  });

  $("#review-2").on('click', function () {

    $.fancybox.open([
      {
        src: './img/reviews/review-2.jpg',
        opts: {
          caption: 'Букет "Весна"',
          thumb: './img/reviews/review-2.jpg'
        }
      },
      {
        src: './img/reviews/review-3.jpg',
        opts: {
          caption: 'Букет на День Учителя',
          thumb: './img/reviews/review-3.jpg'
        }
      },
      {
        src: './img/reviews/review-1.jpg',
        opts: {
          caption: 'Букет невесты',
          thumb: './img/reviews/review-1.jpg'
        }
      }
    ], {
      loop: true,
      thumbs: {
        autoStart: true
      }
    });
  });

  $("#review-3").on('click', function () {

    $.fancybox.open([
      {
        src: './img/reviews/review-3.jpg',
        opts: {
          caption: 'Букет на День Учителя',
          thumb: './img/reviews/review-3.jpg'
        }
      },
      {
        src: './img/reviews/review-1.jpg',
        opts: {
          caption: 'Букет невесты',
          thumb: './img/reviews/review-1.jpg'
        }
      },
      {
        src: './img/reviews/review-2.jpg',
        opts: {
          caption: 'Букет "Весна"',
          thumb: './img/reviews/review-2.jpg'
        }
      }
    ], {
      loop: true,
      thumbs: {
        autoStart: true
      }
    });
  });

  // Показать ещё
  // $('.more').click(function() {
  //   $('show-more').fadeIn();
  //   $(this).fadeOut();
  // });

});
