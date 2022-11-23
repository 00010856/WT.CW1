// getting the input elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email  = document.getElementById('email');
const text = document.getElementById('text');
const phone = document.getElementById('phone');

// event listener for the submit button of the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {

    let u = false;
    let e = false;
    let n = false;
    let t = false;


    // get the values from the inputs in the function
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textValue = text.value.trim();
    const phoneValue = phone.value.trim();

    // user name validation 
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        u = false;
    }
    else { 
        setSuccessFor(username);
        u  = true;
    }

    // email validation
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        e = false;
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
        e = false;
    }
    else {
        setSuccessFor(email);
        e = true;
    }

    // phone number validation
    if (phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank');
        n = false;
    } 
    else if (!isPhoneNumber(phoneValue)) {
        setErrorFor(phone, 'Phone number is not valid');
        n = false;
    }
    else {
        setSuccessFor(phone);
        n = true;
    }


    // textarea validation. 
    if (textValue === '') {
        setErrorFor(text, 'Message cannot be blank');
        t = false;
    }
    else {
        setSuccessFor(text);
        t = true;
    }

    if (u && e && n && t) {
        form.reset();
        

    }
    

}

// error function for showing error message and red border color for each inputs
function setErrorFor(input, message) {
    const inputContainer = input.parentElement; 
    const small = inputContainer.querySelector('small');
    small.innerText = message;
    inputContainer.className = 'input-container error';
}

// success function for verifying user inputs with green border color. 
function setSuccessFor (input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-container success';
}

// email validation with @ symbol 
function isEmail(email) {
    // adapted from stackoverflow this returns true or false based on the email input. 
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// phone validation with proper number 
function isPhoneNumber(input_str) 
{
    // adapted from JavaScriptcoder.com for validating phone number 
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
}