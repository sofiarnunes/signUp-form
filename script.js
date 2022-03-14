// Variables
const firstName = document.getElementById('first-name');
const errorFN = document.getElementById('error-fn');
const lastName = document.getElementById('last-name');
const errorLN = document.getElementById('error-ln');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error-email');
const pwd = document.getElementById('password');
const errorPwd = document.getElementById('error-pwd');
const submit = document.getElementById('submit');


// Errors hidden

errorFN.hidden = true;
errorLN.hidden = true;
errorEmail.hidden = true;
errorPwd.hidden = true;


// Form submition validation

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if(!firstName.value.length){
        errorFN.hidden = false;
        firstName.classList.add('error-input');
    } else{
        errorFN.hidden = true;
        firstName.classList.remove('error-input');
    }

    if(!lastName.value.length){
        errorLN.hidden = false;
        lastName.classList.add('error-input');
    } else{
        errorLN.hidden = true;
        lastName.classList.remove('error-input');
    }

    if(!(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) || !email.value.length){
        errorEmail.hidden = false;
        email.classList.add('error-input');
    } else{
        errorEmail.hidden = true;
        email.classList.remove('error-input');
    }

    if(!pwd.value.length){
        errorPwd.hidden = false;
        pwd.classList.add('error-input');
    } else{
        errorPwd.hidden = true;
        pwd.classList.remove('error-input');
    }
})

