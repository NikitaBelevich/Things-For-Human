'use strict';
 
labelFocusEffect();
function labelFocusEffect() {
    const form = document.querySelector('.footer-contacts__form');
    form.addEventListener('click', event => {
        const targetInput = event.target.closest('input');
        if (targetInput == null) return;

        const targetLabel = targetInput.previousElementSibling;
        targetLabel.classList.add('footer-contacts__label_focus');

        targetInput.addEventListener('blur', () => {
            targetLabel.classList.remove('footer-contacts__label_focus')
        });
    });
};