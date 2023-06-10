/*==================== MENU SHOW & HIDDEN ====================*/
// Get the elements for menu show and hide
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
// Add an event listener to the toggle button to show the menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

/*===== MENU HIDDEN =====*/
// Add an event listener to the close button to hide the menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

// Function to remove the show-menu class when a nav__link is clicked
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== CHANGE BACKGROUND HEADER ====================*/
// Function to change the header background when scrolling
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== THEORY ACCORDION ====================*/
// Toggle theory content when theory header is clicked
const theoryContent = document.querySelectorAll('.theory__content'),
    theoryHeader = document.querySelectorAll('.theory__header');

function toggleTheory() {
    let itemClass = this.parentNode.className;

    if (itemClass === 'theory__content theory__open') {
        this.parentNode.className = 'theory__content theory__close';
    } else {
        this.parentNode.className = 'theory__content theory__open';
    }
}

theoryHeader.forEach((el) => {
    el.addEventListener('click', toggleTheory);
});

// Set the initial state of all theory__content elements to theory__open
for (i = 0; i < theoryContent.length; i++) {
    theoryContent[i].className = 'theory__content theory__open';
}


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Add active class to nav__menu links based on section scroll position
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
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*==================== UPDATE COPYRIGHT YEAR ====================*/
// Update the footer copyright year dynamically
let currentYear = new Date().getFullYear();

document.querySelector(".footer__copy").innerHTML = "&copy; " + currentYear + " | InfoTkd | All rights reserved.";
