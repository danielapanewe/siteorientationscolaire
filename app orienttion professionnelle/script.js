const skillsContainer = document.getElementsByClassName('skill__container'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContainer.length; i++) {
        skillsContainer[i].className = 'skill__container skills__close';
    }
    if (itemClass === 'skill__container skills__close') {
        this.parentNode.className = 'skill__container skills__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});
var acc = document.getElementsByClassName('skill__link');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        var skill__sublist = this.nextElementSibling;
        if (skill__sublist.style.display === 'block') {
            skill__sublist.style.display = 'none';
        } else {
            skill__sublist.style.display = 'block';
        }
    });
}

// POUR le menu

let toggle = document.querySelector('.toggle');
let header = document.querySelector('.header');
let body = document.querySelector('body');
let fermer = document.querySelector('.fermer');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
    //body.classList.add('disabledscroll');
});

window.onscroll = () => {
    this.scrollY > 20
        ? header.classList.add('sticky')
        : header.classList.remove('sticky');
};
