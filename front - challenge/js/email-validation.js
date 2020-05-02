let button = document.querySelector(".contact-button");
let resultBG = document.querySelector(".result-bg");
let resultTxt = document.querySelector(".result-bg .result-text");
let errorIcon = document.querySelector(".result-bg .error-icon");

function validateEmail() {
  let email = document.getElementById("email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email !== "") {
    resultBG.className = "result-bg bg-green-500 rounded-md p-1 mb-3 flex flex-col lg:mr-4";
    resultTxt.style.display = "block";
    resultTxt.innerHTML = "You are successfully subscribed!";
    errorIcon.style.display = "none";
  } else {
    resultBG.className = "result-bg bg-soft-red rounded-md p-1 mb-3 flex flex-col lg:mr-4";
    resultTxt.style.display = "block";
    resultTxt.innerHTML = "Whoops, make sure it's an email";
    errorIcon.style.display = "block";
  }
}

button.addEventListener('click', validateEmail);