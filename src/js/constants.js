//! API
export const API_KEY = '22714133-87c7cc427dfc460d08f350db1';
export const API_URL = 'https://pixabay.com/api/';
export let HREF = document.URL.split('?');
if (HREF[1]) {
    let string = decodeURI(HREF[1].split('=')[1]).trim();
    HREF[1] = string.split('#')[0];
    HREF[2] = HREF[1].split('+').join(' ');
}
//
// !
export const getRefs = () => {
    return {
        searchBox: document.querySelector('#search'),
        searchButton: document.querySelector('#searchPhotos'),
        gallerySection: document.querySelector('.gallery'),
        nextBtn: document.querySelector('.sl-next'),
    };
};
//
//! burger menu
export const search = document.querySelector('#search');
export const searchPhotos = document.querySelector('#searchPhotos');
export const actionBtn = document.querySelector('.nav-btn-js');
//
//! lang
export const countryChangeFirst = document.querySelector('.first-country-change');
export const countryChangeSecond = document.querySelector('.second-country-change');
export const countryChangeThird = document.querySelector('.third-country-change');
export const HIDEEL = document.querySelector('#authors-hide');
export const OPENEL = document.querySelector('#authors-open');
export const AUTHORSCLOSE = document.querySelector('.authors');
//
// ! text ID's
export const footerTitle = document.querySelector('#footer-title');
//
export const menu = document.querySelector('#menu');
export const menuAbout = document.querySelector('#menuAbout');
export const menuHome = document.querySelector('#menuHome');
export const menuHelp = document.querySelector('#menuHelp');
//
export const artDr = document.querySelector('#artDir');
export const creatDr = document.querySelector('#creatDir');
export const designer = document.querySelector('#Design');
export const fAuthor = document.querySelector('#FirsAuthor');
export const sAuthor = document.querySelector('#SecAuthor');
export const tAuthor = document.querySelector('#ThrAuthor');
//
// !
export const aboutSite = document.querySelector('#aboutSite');
//
// !
export const langChange = document.querySelector('#langChange');
//
// !
export const name = document.querySelector('#nameLabel');
export const number = document.querySelector('#numberLabel');
export const email = document.querySelector('#emailLabel');
export const submit = document.querySelector('#submit');
export const textarea = document.querySelector('#textareaLabel');