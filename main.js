
if (window.innerWidth < 768) {
    var scroll = document.querySelector('.list');
    scroll.classList.add('swiper');
    var scrollWriper = document.querySelector('.list-wrapper');
    scrollWriper.classList.add('swiper-wrapper');
    var scrollSlide = document.querySelectorAll('.list-slide');
    scrollSlide.forEach(slide => {
            slide.classList.add('swiper-slide')
    })
}


        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',  // Автоподбор ширины слайдов
            spaceBetween: 8,       // Фиксированный отступ между слайдами (в пикселях)
            freeMode: true,         // Плавное перетаскивание
            mousewheel: true,       // Прокрутка колесиком мыши
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }

        })

var hiddenSlide = document.querySelectorAll('.list-slide--hidde');
var moreButton = document.querySelector('.more__button');
var sectionMore = document.querySelector('.more');
var sectionHidden = document.querySelector('.hidden');
var hiddenButton = document.querySelector('.hidden__button');


moreButton.addEventListener('click', e => {
    hiddenSlide.forEach(slide => {
        slide.classList.remove('--hidden')
    })
    sectionMore.classList.add('--hidden');
    sectionHidden.classList.remove('--hidden');

})

hiddenButton.addEventListener('click', e => {
    hiddenSlide.forEach(slide => {
        slide.classList.add('--hidden')
    })
    sectionMore.classList.remove('--hidden');
    sectionHidden.classList.add('--hidden');
})



