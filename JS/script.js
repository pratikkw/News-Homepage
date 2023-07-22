const checkbox = document.querySelector(".header__input");
const btn = document.querySelector(".header__label");
const slider = document.querySelector(".header__nav");
const bk = document.querySelector(".bk");

btn.addEventListener("click", function () {
  slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  document.body.classList.toggle("scroll-lock");
});

bk.addEventListener("click", function () {
  slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  checkbox.checked = false;
});
