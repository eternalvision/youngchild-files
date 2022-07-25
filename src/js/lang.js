import Vue from 'vue/dist/vue.js';
import { gsap } from 'gsap';
import lang from '../json/localization.json';
import {
    countryChangeFirst,
    countryChangeSecond,
    countryChangeThird,
    OPENEL,
    AUTHORSCLOSE,
    HIDEEL,
    footerTitle,
    menu,
    menuAbout,
    menuHelp,
    menuHome,
    artDr,
    creatDr,
    designer,
    fAuthor,
    sAuthor,
    tAuthor,
    name,
    number,
    email,
    submit,
    textarea,
} from './constants';

var eng = lang.eng;
var rus = lang.rus;
var uk = lang.uk;

const LayoutBox = Vue.component('layout-box', {
    template: '#layout-box',
    props: ['angle'],
});

const LayoutBoxMain = Vue.component('layout-box-main', {
    template: '#layout-box-main',
    props: ['angle'],
});

const CancelIcon = Vue.component('cancel-icon', {
    template: '#cancel-icon',
});

new Vue({
    el: '#app',

    data() {
        return {
            menuOpen: false,
            tl: null,
            boxAngle: localStorage.getItem('boxAngle'),
            choice: localStorage.getItem('lang'),
        };
    },

    components: { LayoutBox, LayoutBoxMain, CancelIcon },

    methods: {
        mainTimeline: function() {
            this.tl = gsap.timeline({
                defaults: {
                    ease: 'back.out',
                    duration: 0.3,
                },
            });
            this.tl
                .to('.lb', { y: -25, x: -45 })
                .to('.tb', { y: -50 }, '-=0.3')
                .to('.rb', { y: -25, x: 45 }, '-=0.3');

            this.tl.pause();
        },
        showMenu: function() {
            this.menuOpen = !this.menuOpen;
            AUTHORSCLOSE.style.opacity = '0';
            AUTHORSCLOSE.style.visibility = 'hidden';
            OPENEL.style.opacity = '1';
            OPENEL.style.visibility = 'visible';
            if (!this.menuOpen) {
                this.tl.reverse();
                gsap.to('.grid-main', 0.3, {
                    y: 0,
                    ease: 'back.out',
                    delay: 0.3,
                    opacity: 1,
                });
                gsap.to('.cancel', 0.3, { y: 40, ease: 'back.in' });
            } else {
                this.tl.play();
                gsap.to('.grid-main', 0.3, { y: -40, ease: 'back.in', opacity: 0 });
                gsap.to('.cancel', 0.3, { y: 5, ease: 'back.out', delay: 0.3 });
            }
        },
        setLayout: function(angle) {
            this.boxAngle = angle;
            this.menuOpen = false;

            let ntl = gsap.timeline({
                defaults: {
                    ease: 'back.in',
                    duration: 0.3,
                },
            });

            switch (angle) {
                case 180:
                    ntl
                        .to('.lb', { y: 0, x: 0 })
                        .to('.tb', { y: 0 }, '-=0.3')
                        .to('.rb', { y: 0, x: 0 }, '-=0.3');
                    gsap.fromTo(
                        '.grid-main', { y: -25, x: -45, rotation: angle }, { y: 0, x: 0, opacity: 1, delay: 0.2 },
                    );
                    gsap.to('.cancel', 0.3, { y: 40, ease: 'back.in' });
                    this.choice = 'RU';
                    localStorage.setItem('lang', 'RU');
                    localStorage.setItem('boxAngle', '180');
                    console.log('RU ' + countryChangeFirst.src);
                    //
                    var r = $('.localization').each(function() {
                        var el = $(this);
                        var key = el.attr('caption');
                        el.text(rus[key]);
                        $('.authors').css('border-top-right-radius', '10%');
                        // $('.authors').css('padding-left', '1px');
                    });
                    break;
                case -90:
                    ntl
                        .to('.tb', { y: 0 })
                        .to('.rb', { y: 0, x: 0 }, '-=0.3')
                        .to('.lb', { y: 0, x: 0 }, '-=0.3');
                    gsap.fromTo('.grid-main', { y: -50, rotation: angle }, { y: 0, opacity: 1, delay: 0.2 });
                    gsap.to('.cancel', 0.3, { y: 40, ease: 'back.in' });
                    this.choice = 'EN';
                    localStorage.setItem('lang', 'EN');
                    localStorage.setItem('boxAngle', '-90');
                    console.log('EN ' + countryChangeSecond.src);
                    //
                    var r = $('.localization').each(function() {
                        var el = $(this);
                        var key = el.attr('caption');
                        el.text(eng[key]);
                        $('.authors').css('border-top-right-radius', '50%');
                    });

                    break;
                case 0:
                    ntl
                        .to('.rb', { y: 0, x: 0 })
                        .to('.lb', { y: 0, x: 0 }, '-=0.3')
                        .to('.tb', { y: 0 }, '-=0.3');
                    gsap.fromTo(
                        '.grid-main', { y: -25, x: 45, rotation: angle }, { y: 0, x: 0, opacity: 1, delay: 0.2 },
                    );
                    gsap.to('.cancel', 0.3, { y: 40, ease: 'back.in' });
                    this.choice = 'UK';
                    localStorage.setItem('lang', 'UK');
                    localStorage.setItem('boxAngle', '0');
                    console.log('UK ' + countryChangeThird.src);
                    //
                    var r = $('.localization').each(function() {
                        var el = $(this);
                        var key = el.attr('caption');
                        el.text(uk[key]);
                    });

                    break;
            }
            this.mainTimeline();
        },
    },

    mounted() {
        this.mainTimeline();
        gsap.set('.cancel', { y: 40 });
    },
});

setTimeout(function() {
    AUTHORSCLOSE.style.opacity = '0';
    AUTHORSCLOSE.style.visibility = 'hidden';
    OPENEL.style.opacity = '1';
    OPENEL.style.visibility = 'visible';
}, 2000);

HIDEEL.onclick = function() {
    setTimeout(function() {
        AUTHORSCLOSE.style.opacity = '0';
        AUTHORSCLOSE.style.visibility = 'hidden';
        OPENEL.style.opacity = '1';
        OPENEL.style.visibility = 'visible';
    }, 150);
};
OPENEL.onclick = function() {
    setTimeout(function() {
        AUTHORSCLOSE.style.opacity = '1';
        AUTHORSCLOSE.style.visibility = 'visible';
        OPENEL.style.opacity = '0';
        OPENEL.style.visibility = 'hidden';
    }, 150);
};
//
const localValue = localStorage.getItem('lang');
if (localValue == 'EN') {
    footerTitle.textContent = eng.Footer;
    menu.textContent = eng.Menu;
    menuAbout.textContent = eng.About;
    menuHelp.textContent = eng.Help;
    menuHome.textContent = eng.Home;
    artDr.textContent = eng.firstSpec;
    creatDr.textContent = eng.secondSpec;
    designer.textContent = eng.thirdSpec;
    fAuthor.textContent = eng.firstName;
    sAuthor.textContent = eng.secondName;
    tAuthor.textContent = eng.thirdName;
    HIDEEL.textContent = eng.Hide;
    name.textContent = eng.Name;
    number.textContent = eng.Number;
    email.textContent = eng.Email;
    submit.textContent = eng.Submit;
    textarea.textContent = eng.Question;
} else if (localValue == 'RU') {
    footerTitle.textContent = rus.Footer;
    menu.textContent = rus.Menu;
    menuAbout.textContent = rus.About;
    menuHelp.textContent = rus.Help;
    menuHome.textContent = rus.Home;
    artDr.textContent = rus.firstSpec;
    creatDr.textContent = rus.secondSpec;
    designer.textContent = rus.thirdSpec;
    fAuthor.textContent = rus.firstName;
    sAuthor.textContent = rus.secondName;
    tAuthor.textContent = rus.thirdName;
    HIDEEL.textContent = rus.Hide;
    name.textContent = rus.Name;
    number.textContent = rus.Number;
    email.textContent = rus.Email;
    submit.textContent = rus.Submit;
    textarea.textContent = rus.Question;
} else if (localValue == 'UK') {
    footerTitle.textContent = uk.Footer;
    menu.textContent = uk.Menu;
    menuAbout.textContent = uk.About;
    menuHelp.textContent = uk.Help;
    menuHome.textContent = uk.Home;
    artDr.textContent = uk.firstSpec;
    creatDr.textContent = uk.secondSpec;
    designer.textContent = uk.thirdSpec;
    fAuthor.textContent = uk.firstName;
    sAuthor.textContent = uk.secondName;
    tAuthor.textContent = uk.thirdName;
    HIDEEL.textContent = uk.Hide;
    name.textContent = uk.Name;
    number.textContent = uk.Number;
    email.textContent = uk.Email;
    submit.textContent = uk.Submit;
    textarea.textContent = uk.Question;
} else {
    footerTitle.textContent = eng.Footer;
    menu.textContent = eng.Menu;
    menuAbout.textContent = eng.About;
    menuHelp.textContent = eng.Help;
    menuHome.textContent = eng.Home;
    artDr.textContent = eng.firstSpec;
    creatDr.textContent = eng.secondSpec;
    designer.textContent = eng.thirdSpec;
    fAuthor.textContent = eng.firstName;
    sAuthor.textContent = eng.secondName;
    tAuthor.textContent = eng.thirdName;
    HIDEEL.textContent = eng.Hide;
    name.textContent = eng.Name;
    number.textContent = eng.Number;
    email.textContent = eng.Email;
    submit.textContent = eng.Submit;
    textarea.textContent = eng.Question;
}