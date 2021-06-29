const btnFilter = document.querySelectorAll(".profesional__filter-item");
const itemFilter = document.querySelectorAll(".profesional__card-item ");

function filter(categori, items) {
    items.forEach(element => {
        filterItems = !element.classList.contains(categori)
        istShow = categori.toLowerCase() === "all"
        if (filterItems && !istShow) {
            element.classList.add("profesional__hide");
        } else {
            element.classList.remove("profesional__hide")

        }
    });
};

for (const index of btnFilter) {
    index.addEventListener("click", function (e) {
        e.preventDefault();
        filterSlides();
        for (const date of btnFilter) {
            date.classList.remove("active")
        };
        index.classList.add("active");
        const btnFilterData = index.dataset.f;
        filter(btnFilterData, itemFilter);
    })
};








var swiper = new Swiper('.cliets__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});


const headerBtn = document.querySelector(".header__btn");
const formReserv = document.querySelector(".form_modal");
const btnCloseModalReserv = document.querySelector(".form__modal-close-item");
headerBtn.addEventListener("click", function () {
    formReserv.classList.add("active");
    document.body.style.overflow = 'hidden';
});
btnCloseModalReserv.addEventListener("click", () => {
    formReserv.classList.remove("active");
    document.body.style.overflow = '';
});



const headerBurger = document.querySelector(".header__burger");
const headerMenuLink = document.querySelectorAll(".header__menu-link");
headerBurger.addEventListener("click", () => {
    document.querySelector(".header__burger-line").classList.toggle("active");
    document.querySelector(".header__top-menu").classList.toggle("active");
});
for (const iterator of headerMenuLink) {
    iterator.addEventListener("click", () => {
        headerBurger.classList.remove("active");
        document.querySelector(".header__top-menu").classList.toggle("active");
        document.querySelector(".header__burger-line").classList.toggle("active");
    });
};


const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerColumn: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observerPattern: true,
    initialSlide: 0,
    watchOverflow: true,

    breakpoints: {
        400: {
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        730: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },

    }
});



const galleryTop = new Swiper('.gallery-top', {
    navigation: {
        nextEl: '.profesional__arrow-next',
        prevEl: '.profesional__arrow-prew',
    },
    observer: true,

    thumbs: {
        swiper: galleryThumbs
    }
});





