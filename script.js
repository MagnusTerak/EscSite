const phoneMenuButton = document.querySelector(".header__hamburgerMenu");
const phoneMenuCloseButton = document.querySelector(".phoneMenu__close");
const phoneMenuTag = document.querySelector(".phoneMenu__tag");

phoneMenuButton.addEventListener("click", function (e) {
    let phoneMenu = document.querySelector(".phoneMenu__container");
    let visible = document.querySelector(".phoneMenu__visible");
    e.preventDefault();

    visible.style.display = "flex";

    phoneMenu.style.animationName = "transform";
    phoneMenu.style.animationDuration = "0.5s";
    phoneMenu.style.animationFillMode = "forwards";

    disableScroll();
})

phoneMenuCloseButton.addEventListener("click", function (e) {
    closePhoneMenu(e);
})

phoneMenuTag.addEventListener("click", function(e) {
    closePhoneMenu(e);
})

function closePhoneMenu(e) {
    let visibleClass = document.querySelector(".phoneMenu__visible");
    e.preventDefault();

    visibleClass.style.display = "none";
    enableScroll();
}

function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}

console.log("d")