//интерактивные элементы
const backgroundMenu = document.querySelector(".navigation__background");
const navMenuLinkList = document.querySelector(".navigation__nav");

//  содержимое гамбургера
const hamburgerSpan = document.querySelector(".navigation__button")

//элемент для клика
const navhabburger = document.querySelector(".navigation__button");
const linkElement = document.querySelectorAll(".navigation__link");

// навешиваем обработчики клика

//обработчик клика на гамбургере
navhabburger.addEventListener("click", function () {
    backgroundMenu.classList.toggle("navigation__backgroundActive");
    navMenuLinkList.classList.toggle("navigation__navActive");
    hamburgerSpan.classList.toggle("hamburger_active");

})

//обработчик на ссылках меню
for (let i = 0; i < linkElement.length; i++) {
    linkElement[i].addEventListener("click", function () {
        backgroundMenu.classList.toggle("navigation__backgroundActive");
        navMenuLinkList.classList.toggle("navigation__navActive");
        hamburgerSpan.classList.toggle("hamburger_active");

    })

}







