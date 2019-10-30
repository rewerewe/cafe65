const MOBILE_BTN_GRP_MENU = document.querySelector('#mBtnGrpMenu');
const MOBILE_BTN_MENU = document.querySelector('#mBtnMenu');
const DESKTOP_BTN_HOME = document.querySelector('#dBtnHome');

function mBtnMenuClickHandler() {
    if(MOBILE_BTN_GRP_MENU.classList.contains('dspn')) {
        MOBILE_BTN_GRP_MENU.classList.remove('dspn');
        MOBILE_BTN_GRP_MENU.classList.add('dspb');
    } else {
        MOBILE_BTN_GRP_MENU.classList.add('dspn');
        MOBILE_BTN_GRP_MENU.classList.remove('dspb');
    }
}

function dBtnHomeClickHandler() {
    location.href = 'index.html';
}

function init() {
    MOBILE_BTN_MENU.addEventListener('click', mBtnMenuClickHandler);
    DESKTOP_BTN_HOME.addEventListener('click', dBtnHomeClickHandler);
}

init();