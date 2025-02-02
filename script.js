import "./css/style.sass";
import Choices from "choices.js";
import Swiper from 'swiper';
import 'swiper/css';

const form = document.querySelector(".subscribe__form");
let input = "";
if(form){
    input = form.querySelector(".subscribe__input");
}


function formSubmit(e){
    let inputValue = input.value
    
    e.preventDefault();
    console.log("Submit form");
    console.log(inputValue);
    
}
if(form && input){
    form.addEventListener("submit", formSubmit);
}

const element = document.querySelector('#jsSelectLocation');
if(element){
    const choices = new Choices(element, {});
    console.log(choices)
}
const datepicker = new Datepicker('#jsDataPicker');


// window.addEventListener("resize",()=>{
//     console.log("aaaoaoooooo")
//     if (window.innerWidth >= 768) {
//         popularCardsSwiper.destroy();
//     } else {
//         if(swiper) {

//         }
//     }
// })



let popularCardsSwiper;
let galleryImagesSwiper;

function initSwiper() {
    if (window.innerWidth < 1200 && (!popularCardsSwiper || !popularCardsSwiper.initialized)) {
        popularCardsSwiper = new Swiper('#popularCardsSwiper', {
            // Ваши параметры Swiper
            loop: false,
            slidesPerView: 1.1,
            spaceBetween: 20,
            breakpoints: {
        // when window width is >= 640px
                690: {
                slidesPerView: 1.5,
                spaceBetween: 10
                }
            }
        });
    }
    if (window.innerWidth < 1250 && (!galleryImagesSwiper || !galleryImagesSwiper.initialized)) {
        galleryImagesSwiper = new Swiper('#galleryImagesSwiper', {
            // Ваши параметры Swiper
            loop: false,
            slidesPerView: 1.1,
            spaceBetween: 20,
            breakpoints: {
        // when window width is >= 640px
                690: {
                slidesPerView: 2,
                spaceBetween: 10
                }
            }
        });
    }
}

// function destroySwiper() {
//     if (popularCardsSwiper && popularCardsSwiper.initialized) {
//         popularCardsSwiper.destroy(true, true);
//         popularCardsSwiper = null;
//     }
// }

function destroySwiper(swiper) {
    console.log(swiper)
    if (swiper && swiper.initialized) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

function handleResize() {
    if (window.innerWidth >= 1200) {
        destroySwiper(popularCardsSwiper);
    } else {
        initSwiper();
    }
    if (window.innerWidth >= 1250) {
        destroySwiper(galleryImagesSwiper);
    } else {
        initSwiper();
    }
}

window.addEventListener('resize', handleResize);

// Инициализация Swiper при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log("aaaaaaa")
    initSwiper();
    handleResize();
});

