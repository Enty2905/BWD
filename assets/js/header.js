//Scroll menu
const header = document.querySelector(".header");
const headerOriginalTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerOriginalTop + 30) {
        header.style.background = "#fff";
        header.style.borderBottom = "1px solid grey"
        header.style.transition = "1s ease-in-out";
    } else {
        header.style.background = "transparent";
        header.style.transition = "1s ease-in-out";
        header.style.borderBottom = "none"
    }
});
//Mobile menu
var menuMbIcon = document.querySelector('.menu-mb-icon');
var menuMb = document.querySelector('.menu-mb');

menuMbIcon.onclick = function () {
    if (menuMb.style.display === 'block') {
        menuMb.style.display = 'none';
    } else {
        menuMb.style.display = 'block';
    }
};
