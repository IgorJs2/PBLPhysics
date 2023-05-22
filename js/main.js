// $(document).ready(function () {
//   var mySwiper = new Swiper(".swiper", {
//     autoHeight: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     speed: 500,
//     direction: "horizontal",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar"
//     },
//     loop: false,
//     effect: "slide",
//     spaceBetween: 30,
//     on: {
//       init: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
//       },
//       slideChangeTransitionStart: function () {
//         $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//         $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
//       }
//     }
//   });
//   $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
//     mySwiper.slideTo($(this).index());
//     $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
//     $(this).addClass("active");
//   });
// });

const arrowToggle = document.querySelector('.arrow-block');
const arrow = document.querySelector('#arrow-toggle');

arrowToggle.addEventListener('click', () => {

  const questions = [7, 8, 9, 10, 11, 12, 13, 14]

  if (arrow.classList.contains('down')) {
    arrow.classList.remove('down');
    arrow.classList.add('up');

    for(let i = 0; i < questions.length; i++){

      const question = document.querySelector(`#question${questions[i]}_chart`)

      question.classList.toggle("hidden")
    }

  } else {
    arrow.classList.remove('up');
    arrow.classList.add('down');

    for(let i = 0; i < questions.length; i++){
      const question = document.querySelector(`#question${questions[i]}_chart`)

      question.classList.toggle("hidden")
    }
  }
});
