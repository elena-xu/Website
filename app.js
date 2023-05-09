const scroll__up = document.querySelector(".top__btn");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        scroll__up.classList.add("active");      
    }

    else {
        scroll__up.classList.remove("active");
    }
})

scroll__up.addEventListener("click", function () {
    window.scrollTo(0,0);
})

const navbar__colour = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navbar__colour.classList.add("active");
    }

    else {
        navbar__colour.classList.remove("active");
    }
})

const displaytext = document.querySelector(".")

const learn_more = document.querySelector(".more");

window.addEventListener("hover", function () {
    learn_more.classList.add("active");
})



const navbarlinks__colour = document.querySelector(".navbar__links");
const collapsed_navbar = document.querySelector(".toggle__button");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navbarlinks__colour.classList.add("active");
    }

    else {
        navbarlinks__colour.classList.remove("active");
    }
})


// var i = 0;
// var str = "<h2>Hi, I'm Elena Xu. <img src='images/emoji_waving.svg'> </h2>"; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */
// var text, isTag;

// (function type() {
//     text = str.slice(0, ++i);
//     if (text === str) return;

//     document.getElementById('typewriter').innerHTML = text;

//     var char = text.slice(-1);
//     if( char === '<' ) isTag = true;
//     if( char === '>' ) isTag = false;

//     if (isTag) return type();
//     setTimeout(type, 80);
// }());
