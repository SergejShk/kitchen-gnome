import Swiper from "swiper";
import "swiper/css";
import 'swiper/css/pagination';

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper1 = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  controller: {
    control: swiper2,
  }
});

swiper1.controller.control = swiper2
swiper2.controller.control = swiper1