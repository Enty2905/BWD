var slideImages = document.querySelectorAll('.slide-img');
var mainImage = document.getElementById('main-image');
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var slideContainer = document.querySelector('.slide');
slideImages.forEach(img => {
    img.addEventListener('click', function () {
        mainImage.src = this.src;
    });
});

btnLeft.onclick = function () {
    slideContainer.scrollTop -= 177;
};

btnRight.onclick = function () {
    slideContainer.scrollTop += 177;
};
function checkScreenSize() {
    if (window.innerWidth <= 767) {
        btnLeft.onclick = function () {
            slideContainer.scrollTop -= 227;
        };
        
        btnRight.onclick = function () {
            slideContainer.scrollTop += 227;
        };
    }
}

checkScreenSize();