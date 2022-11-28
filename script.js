const passInput = document.querySelector('#password');
const confPassInput = document.querySelector('#confirm_password');
const confErrorText = document.querySelector('#conf-pass-error');

confPassInput.addEventListener('focusout', () => {
    setConfPassField();
});

passInput.addEventListener('focusout', () => {
    setConfPassField();
})

confPassInput.addEventListener('focus', () => {
    confPassInput.setAttribute(
        'style',
            'border: 1px solid rgb(255, 255, 255); outline: 2px solid rgb(206, 110, 0);'
    )
});

function setConfPassField () {
    if (!passMatch() || confPassInput.value.length < 6) {
        console.log('Passwords do not match');
        confPassInput.setCustomValidity('Passwords do not match');
        confPassInput.setAttribute(
            'style', 
                'border-color: var(--color-invalid); background-image: none'
        );
    }
    else {
        console.log('Passwords match');
        confPassInput.setCustomValidity('');
        confPassInput.setAttribute(
            'style', 
                'border-color: var(--color-valid); background: rgb(255, 255, 255) url(images/check.svg) right no-repeat; background-size: 25px;'
        );
        // confPassInput.setAttribute('style', 'background: rgb(255, 255, 255) url(images/check.svg) right no-repeat;');
        // confPassInput.setAttribute('style', 'background-size: 25px;');
    }
}

function passMatch() {
    return passInput.value === confPassInput.value;
}