/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

/*==================== GENERAL CHOI ACCORDION ====================*/
const generalChoiContent = document.querySelectorAll('.general-choi__content'),
    generalChoiHeader = document.querySelectorAll('.general-choi__header');

function toggleGeneralChoi() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < generalChoiContent.length; i++) {
        generalChoiContent[i].className = 'general-choi__content general-choi__close';
    };

    if (itemClass === 'general-choi__content general-choi__close') {
        this.parentNode.className = 'general-choi__content general-choi__open';
    } else {
        this.parentNode.className = 'general-choi__content general-choi__close';
    }
};

generalChoiHeader.forEach((el) => {
    el.addEventListener('click', toggleGeneralChoi);
});

/*==================== THEORY ACCORDION ====================*/
const theoryContent = document.querySelectorAll('.theory__content'),
    theoryHeader = document.querySelectorAll('.theory__header');

function toggleTheory() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < theoryContent.length; i++) {
        theoryContent[i].className = 'theory__content theory__close';
    };

    if (itemClass === 'theory__content theory__close') {
        this.parentNode.className = 'theory__content theory__open';
    } else {
        this.parentNode.className = 'theory__content theory__close';
    }
};

theoryHeader.forEach((el) => {
    el.addEventListener('click', toggleTheory);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
};

const form = document.querySelector(".contact__form");

window.addEventListener('scroll', scrollActive);

/*==================== UPDATE COPYRIGHT YEAR ====================*/
let currentYear = new Date().getFullYear();

document.querySelector(".footer__copy").innerHTML = "&copy; " + currentYear + " | InfoTkd | Todos los derechos reservados.";