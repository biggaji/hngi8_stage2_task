"use strict";

// contact form overlay controls
let formContainer = document.getElementById("contact-form-container");
function showContactForm() {
    formContainer.style.display = "block";
}

function hideContactForm() {
    formContainer.style.display = "none";
}

// open form
let openbtn = document.getElementById("form-opener");
openbtn.addEventListener("click", showContactForm);

// close form
let closebtn = document.getElementById("close-form");
closebtn.addEventListener("click", hideContactForm);

// form elements
let form = document.getElementById("form-container");
let btn = document.getElementById("submit-msg");
let msgMsg = document.getElementById("msg-msg");
let mailMsg = document.getElementById("mail-msg");
let fullnameMsg = document.getElementById("fullname-msg");
let requiredMsg = document.querySelectorAll("#required-msg");

let mail = document.getElementById("mail");
let msg = document.getElementById("msg");
let fullname = document.getElementById("fullname");

msgMsg.style.display = "none";
mailMsg.style.display = "none";
fullnameMsg.style.display = "none";

function validateInput() {
    fullname.addEventListener("mouseout", () => {
        if(fullname.value === "") {
            fullnameMsg.style.display = "block";
            fullnameMsg.style.color = "red";
            fullnameMsg.innerHTML = "This field is required"
        } else {
            fullnameMsg.style.display = "none";
        }
    });

    mail.addEventListener("mouseout", () => {
        if(mail.value === "") {
            mailMsg.style.display = "block";
            mailMsg.style.color = "red";
            mailMsg.innerHTML = "This field is required"
        } else {
            mailMsg.style.display = "none";
        }
    });

    msg.addEventListener("mouseout", () => {
        if(msg.value === "") {
            msgMsg.style.display = "block";
            msgMsg.style.color = "red";
            msgMsg.innerHTML = "This field is required"
        } else {
            msgMsg.style.display = "none";
        }
    });

    mail.addEventListener("input", () => {
        let email_regex = /[a-zA-Z0-9]+@[a-z]{1,}\W{1}[a-z]{2,}/gi;
        let mailMatch = email_regex.test(mail.value);

        if(!mailMatch) {
            mailMsg.style.display = "block";
            mailMsg.innerHTML = "Please enter a valid email address";
            mailMsg.style.color = "red";
        } else {
            mailMsg.style.display = "none";
        }
    })
    // btn.disabled = false;
}



validateInput();


form.addEventListener("submit", (e) => {
    if(fullname.value === "") {
        e.preventDefault();
        fullnameMsg.innerHTML = "This field is required"
    }

    if(mail.value === "") {
        e.preventDefault();
        mailMsg.innerHTML = "This field is required"
    }

    if(msg.value === "") {
        e.preventDefault();
        msgMsg.innerHTML = "This field is required"
    }
});