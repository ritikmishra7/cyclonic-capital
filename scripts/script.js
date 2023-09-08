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


// for video playback
const videos = document.querySelectorAll(".video-file");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleVideoPlayPause() {
    videos.forEach(video => {
        if (isElementInViewport(video)) {
            video.play();
        } else {
            video.pause();
        }
    });
}

window.addEventListener("scroll", handleVideoPlayPause);

handleVideoPlayPause();
