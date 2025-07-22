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
var hiddenSlide = document.querySelector('.list-wrapper');
var moreButton = document.querySelector('.more__button');
var labelButton = document.querySelector('.more__label');


moreButton.addEventListener('click' , function(evt) {
   evt.preventDefault();

    if (labelButton.textContent === "Скрыть") {
        labelButton.textContent = "Показать все";
        hiddenSlide.style.height = "160px";
        moreButton.classList.toggle('arrow--top');


    } else if (labelButton.textContent === "Показать все") {
        labelButton.textContent = "Скрыть";
        hiddenSlide.style.height = "auto";
        moreButton.classList.toggle('arrow--top');
    }
});




