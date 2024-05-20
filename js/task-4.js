'use strict';

const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    
    if (email && password) {
        const user = {
            email, password,
        };
        console.log(user);
    } else {
        (alert('All form fields must be filled in'))
        return;
    }
    
    formEl.reset();
});
