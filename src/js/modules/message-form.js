'use strict';

import {PopupMessage} from '../classes/PopupMessage.js';

aSendTheForm();
function aSendTheForm() {
    const form = document.querySelector('.footer-contacts__form');
    // In this listener we send data, show the message about the success and so on
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const messageText = 'The message was sent successfully <br> You will get the answer soon';
        const createdMessage = new PopupMessage(messageText);
        createdMessage.initialization();
    });
}
