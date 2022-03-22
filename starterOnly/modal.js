function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const modalValid = document.querySelector(".modal-thanks");
const formDisplay = document.querySelector(".formDisplay");
const modalForm = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".btn-close");

// Regex
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
const nameRegExp = /[^0-9<>()\[\]\\.,;:\s@"][A-Za-z]{1,}/
const birthdateRegExp = /[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{2}|[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{2}|[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{4}/
const quantityRegExp = /[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{0,}/

// DOM form inputs
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
//const location = document.querySelector('input[name="location"]:checked');
const cgu = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  // reset input when modal is closed
  document.querySelector("form").reset();
}


// verify first name
function firstNameInvalid(){
  if (!first.value.match(nameRegExp)){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Entrez un prénom valide");
    return false;
  }
  else{
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify last name
function lastNameInvalid(){
  if (!last.value.match(nameRegExp)){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Entrez un nom valide");
    return false;
  }
  else{
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
}

//verify email
function emailInvalid(){
  if (!email.value.match(emailRegExp)){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Entrez un email valide");
    return false;
  }
  else{
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify birthdate
function birthdateInvalid(){
  if (!birthdate.value.match(birthdateRegExp)){
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Entrez une date de naissance valide");
    return false;
  }
  else{
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify quantity
function quantityInvalid(){
  if (!quantity.value.match(quantityRegExp)){
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Veuillez renseigner un nombre de tournois");
    return false;
  }
  else{
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify location
function locationInvalid(){
  if (document.querySelector('input[name="location"]:checked') === null){
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Sélectionnez un tournoi.");
    return false;
  }
  else{
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify cgu
function cguInvalid(){
  if (!cgu.checked){
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Veuillez lire et accepter les conditions générales.");
    return false;
  }
  else{
    formData[6].setAttribute("data-error-visible", "false");
    return true;
  }
}

// validate modal form
submitBtn.addEventListener("click", validate);

// Form validation
function validate(e) {
  // Prevents systematic page reload on submit
  e.preventDefault();
  if(
    firstNameInvalid() &&
    lastNameInvalid() &&
    emailInvalid() &&
    birthdateInvalid() &&
    quantityInvalid() &&
    locationInvalid() &&
    cguInvalid() === true
  ){// Change the display of the modal 
    function modalValidate(){
      /*formDisplay.style.visibility= 'hidden';
      submitBtn.setAttribute("value", "Fermer");
      modalValid.style.display= 'block';
      submitBtn.style.visibility= 'visible';
      submitBtn.addEventListener("click", closeModal);
      */
      modalForm.style.display= 'none';
      modalValid.style.display= 'block';
      closeBtn.addEventListener("click", closeModal);
      console.log("Formulaire complet");
    }
    modalValidate();
  }
  else{
    firstNameInvalid(),
    lastNameInvalid(),
    emailInvalid(),
    birthdateInvalid(),
    quantityInvalid(),
    locationInvalid(),
    cguInvalid(),
    console.log("Formulaire incomplet");
  }
}
