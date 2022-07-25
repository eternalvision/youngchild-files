import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('#home-bg-image', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -500,
});
gsap.to('#photo-title', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -600,
});
gsap.to('#bg-second', {
    scrollTrigger: {
        scrub: 1,
    },
    x: 500,
});
gsap.to('#main-text', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -800,
});
gsap.to('#video-frame', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -100,
});
gsap.to('#main-second-text', {
    scrollTrigger: {
        scrub: 1,
    },
    y: 500,
});
gsap.to('#main-second-logo', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -300,
});
gsap.to('#img-first', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -1200,
});
gsap.to('#iframe-home', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -200,
});
gsap.to('#video-title', {
    scrollTrigger: {
        scrub: 1,
    },
    y: -250,
});