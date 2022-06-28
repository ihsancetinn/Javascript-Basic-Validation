const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerHTML = message;
    div.className = 'invalid-feedback';

}
function success(input) {
    input.className = 'form-control is-valid';
}
const checkEmail = (input) => {
    return String(input)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value === '') {
            error(input, `${input.id} is Required !`);
        } else {
            success(input);
        }
    }
    )
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    }else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
    }else {
        success(input);
    }
}


function checkPasswords(input1,input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Parolalar eşleşmiyor');
    }
}
function checkPhone(input) {
    var exp = /^\d{10}$/;   
    if(!exp.test(input.value)) 
        error(input, 'Telefon 10 karakterli olmalıdır.');
}
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // if (username.value === '') {
    //     error(username, 'Please enter a username');
    // } else {
    //     success(username);
    // }
    // if (email.value === '') {
    //     error(email, 'Please enter a email');
    // } else if (!validateEmail(email.value)) {
    //     error(email);
    // } else {
    //     success(email);
    // }
    // if (password.value === '') {
    //     error(password, 'Please enter a password');
    // } else {
    //     success(password);
    // }
    // if (repassword.value === '') {
    //     error(repassword, 'Please enter a repassword');
    // } else {
    //     success(repassword);
    // }
    checkRequired([username, email, password, repassword]);
    checkLength(username, 3, 15);
    checkLength(password, 3, 15);
    checkLength(repassword, 3, 15);
    checkPasswords(password,repassword);
    checkPhone(phone);



})