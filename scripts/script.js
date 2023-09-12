// for handling mouse scroll navbar background  color change

const navbar = document.getElementById('navbar');

function toggleNavbarBackground() {
    if (window.scrollY > 0) {
        navbar.classList.remove('fixed-navbar');
        navbar.classList.add('scrolled-navbar');
    } else {
        navbar.classList.add('fixed-navbar');
        navbar.classList.remove('scrolled-navbar');
    }
}

window.addEventListener('scroll', toggleNavbarBackground);

function setInitialNavbarBackground() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-navbar');
    } else {
        navbar.classList.add('fixed-navbar');
    }
}

setInitialNavbarBackground();

// handle video playback
function playVideoWhenInView(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.play();
        } else {
            const video = entry.target;
            video.pause();
        }
    });
}

// Set up the Intersection Observer for each video
const videos = document.querySelectorAll('.video-file');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.45,
};

videos.forEach(video => {
    const observer = new IntersectionObserver(playVideoWhenInView, observerOptions);
    observer.observe(video);
});



// for hamburger menu
const hamburger = document.getElementById('hamburger-btn');
const hamburgerContainer = document.getElementById('hamburger-container');
const closeHamburger = document.getElementById('close-btn');
const hamburgerLinks = document.querySelectorAll('.hamburger-link');

hamburger.addEventListener('click', () => {
    hamburgerContainer.classList.add('show-container');
    closeHamburger.style.display = 'block';
    hamburger.style.display = 'none';
});


closeHamburger.addEventListener('click', () => {
    hamburgerContainer.classList.remove('show-container');
    hamburger.style.display = 'block';
    closeHamburger.style.display = 'none';
});

hamburgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerContainer.classList.remove('show-container');
        hamburger.style.display = 'block';
        closeHamburger.style.display = 'none';
    });
});