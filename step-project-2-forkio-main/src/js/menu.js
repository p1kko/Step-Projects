
let burgerBtn = document.querySelector('.header__burger');
let navBar = document.querySelector('.navbar')

burgerBtn.addEventListener('click', function() {
    navBar.classList.toggle('hidden')
});

