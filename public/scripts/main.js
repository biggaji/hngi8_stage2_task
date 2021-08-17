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