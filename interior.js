//Selected elements
const menuBtn = document.querySelector('.navbar__mobile .mobileMenu__open');
const logo = document.querySelector('.logo');
const exitBtn = document.querySelector('.mobileMenu__exit');
const openMenu = document.querySelector('.navbar__mobileMenu');
const contentOfPage = document.querySelector('.interior__homepage');
const footer = document.querySelector('footer');



//click on menu button
menuBtn.addEventListener('click', function () {

    openMenu.classList.remove('hidden');
    // contentOfPage.classList.add('invisible');

});

//click on exit button
exitBtn.addEventListener('click', function () {
    openMenu.classList.add('hidden');
    // contentOfPage.classList.remove('invisible');
});