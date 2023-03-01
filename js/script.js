$(document).ready(function () {
    $(".srch_open").click(function () {
        $(".srch_cls").addClass("active");
        $(".searchBox").addClass("active");
    });
});

$(document).ready(function () {
    $(".srch_cls").click(function () {
        $(".srch_cls").removeClass("active");
        $(".searchBox").removeClass("active");
    });
});


$(".srch_open").click(function () {
    $(".srch_open").hide();
    $(".srch_cls").css("display", "flex");
});

$(".srch_cls").click(function () {
    $(".srch_open").show();
    $(".srch_cls").hide();
});

//! Hamburger

$(document).ready(function () {
    $(".icon").click(function () {
        $(this).toggleClass("open");
        $(".lft_nav").toggleClass("active");
        $(".rght_nav").toggleClass("active");
    });
});




//! Modal

let login = document.querySelector(".form .login");
let create = document.querySelector(".form .create");
let main_form_outr = document.querySelector(".main_form_outr");

login.onclick = function () {
    main_form_outr.classList.add("sign_in_form")
}

create.onclick = function () {
    main_form_outr.classList.remove("sign_in_form")
}

$(".modal_close_btn").click(function () {
    $(".main_form_outr").css("display", "none");
});

$(".usr_drp_dwn").click(function () {
    $(".main_form_outr").css("display", "block");
});


// Banner Swiper

// Customer Swiper

var swiper = new Swiper('.bnr_swpr', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },

});


// Customer Swiper

var swiper = new Swiper('.prtct_swpr', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 35,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
    breakpoints: {

        320: {
            slidesPerView: 1

        },

        484: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: false,
        },

        767: {
            slidesPerView: 2,
            spaceBetween: 15,

        },


        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
    }

});


//! Back To Top

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//! Custom Fixed NavBar


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".main_header").addClass("active");
        } else {
            $(".main_header").removeClass("active");
        }
    });
});