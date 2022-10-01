////////////////////////////////////////////
// init the func when document loaded
////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.loader-container').style.display = "none";
});


////////////////////////////////////////////
// back to top
////////////////////////////////////////////
const scrollBtnX = document.querySelector(".back-to-top");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtnX.style.visibility = "visible";
    } else {
        scrollBtnX.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtnX.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


////////////////////////////////////////////
// Animation AOs Init Scrolling
////////////////////////////////////////////

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

// For reverse animation 
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.1)) {
            displayScrollElement(el);
        }
        //comment this else if you want animation run once
        // else if (elementOutofView(el)) {
        //     hideScrollElement(el)
        // }
    })
}

// execute  the func when scrolling
window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// init the func when document loaded
document.addEventListener("DOMContentLoaded", function () {
    handleScrollAnimation();
});


////////////////////////////////////////////
// Swiper  Init 
////////////////////////////////////////////
// Hero

var practicalCarousel = new Swiper(".practical-exp-carousel", {
    spaceBetween: 0,
    slidesPerView: "auto",
    freeMode: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.practical-experiences .button-next',
        prevEl: '.practical-experiences .button-prev',
    },

});

