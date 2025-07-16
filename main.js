// Функция для адаптивной работы страницы
function pageStart() {
    // Объявление основных переменных и запросов
    var swiper = null;
    var currentWidth = window.innerWidth;
    var timeoutId = null;
    var scroll = document.querySelector('.list');
    var scrollWriper = document.querySelector('.list-wrapper');
    var scrollSlide = document.querySelectorAll('.list-slide');

    //Функция инициализации Swiper
    function swiperInit() {
        if (window.innerWidth < 768) {
            scroll.classList.add('swiper');
            scrollWriper.classList.add('swiper-wrapper');
            scrollSlide.forEach(slide => {
                slide.classList.add('swiper-slide')
            })
            swiper = new Swiper('.swiper', {
                slidesPerView: 'auto',  // Автоподбор ширины слайдов
                spaceBetween: 8,       // Фиксированный отступ между слайдами (в пикселях)
                freeMode: true,         // Плавное перетаскивание
                mousewheel: true,       // Прокрутка колесиком мыши
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }

            })
        } else {
            swiperDestroy()
        }
    }

    //Функция удаления Swiper
    function swiperDestroy() {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;

            scroll.classList.remove('swiper');
            scrollWriper.classList.remove('swiper-wrapper');
            scrollSlide.forEach(slide => {
                slide.classList.remove('swiper-slide')
            })

        }
    }
    //Функция отслеживания текущего разрешения окна
    const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (window.innerWidth !== currentWidth) {
                currentWidth = window.innerWidth;
                swiperDestroy();
                swiperInit();
            }
        }, 1);
    };

    return {
        init: () => {
            swiperInit();
            window.addEventListener('resize', handleResize);
        },
        destroy: () => {
            window.removeEventListener('resize', handleResize);
            swiperDestroy();
        }
    };

}
const pageControl = pageStart();
pageControl.init();
// Обработка нажатий кнопок
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

// Откат к изначальному состоянию при изменении размера окна
addEventListener("resize", e => {
    hiddenSlide.forEach(slide => {
        slide.classList.add('--hidden')
    })
    sectionMore.classList.remove('--hidden');
    sectionHidden.classList.add('--hidden');
})



