'use strict';

scrollIntoServices();
export function scrollIntoServices() {
    const scrollBtn = document.querySelector('#scroll-to-services-btn');
    const targetScrollElement = document.querySelector('#scroll-to');
    scrollToElement(scrollBtn, targetScrollElement);
}
scrollIntoForm();
export function scrollIntoForm() {
    const scrollBtn = document.querySelector('#scroll-to-form-btn');
    const targetScrollElement = document.querySelector('#scroll-form');
    scrollToElement(scrollBtn, targetScrollElement);
}

function scrollToElement(el, targetEl) {
    el.addEventListener('click', () => {
        targetEl.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
    });
}