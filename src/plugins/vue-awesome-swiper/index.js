import {Swiper as _swiper, SwiperSlide as _swiperSlide} from 'vue-awesome-swiper'
// import aSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css';
// export default aSwiper;
export const swiper = _swiper;
export const swiperSlide = _swiperSlide;

export const getQuickSett = function () {
    return {
        speed: 650
        , loop: true
        , loopAdditionalSlides: 0
        , pagination: {
            el: '.swiper-pagination'
            , clickable: true
        }
        , autoplay: {
            disableOnInteraction: false
            , delay: 3600
        }
        , watchSlidesProgress: true
        , on: {
            transitionEnd: function () {

            }
            , progress: function (p) {
                var m = this;
                // debugger;
            }
        }
    }
}