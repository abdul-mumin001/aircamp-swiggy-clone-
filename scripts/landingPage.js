let randomTextHeading = document.getElementById("randomTextHeading");
let randomText = [
  "Hungry?",
  "Game night?",
  "Unexpected guests?",
  "Late night at office?",
  "Cooking gone wrong?",
  "Movie marathon?",
];
let index = 1;
randomTextHeading.innerText = randomText[index];
setInterval(() => {
  if (index == randomText.length - 1) {
    index = 0;
  }
  randomTextHeading.innerText = randomText[index];
  index++;
}, 2000);

showProfileSection();

import { footerHTML } from '../scriptInside-landingPage/footer.js'
document.getElementById('footerPart').innerHTML = footerHTML();

import {
  overlayHTML,
  signUpHtml,
  loginHTML,
  showLoginBox,
  showSignupBox,
  initialPosition,
 
} from "../scriptInside-landingPage/signupLogin.js";

document.getElementById("import1").innerHTML = overlayHTML();
document.getElementById("import2").innerHTML = signUpHtml();
document.getElementById("import3").innerHTML = loginHTML();

document.querySelector("#overlay").addEventListener("click", initialPosition);
document
  .querySelector("#closeBtnForSignup")
  .addEventListener("click", initialPosition);
document
  .querySelector("#closeBtnForLogin")
  .addEventListener("click", initialPosition);
document.querySelector("#loginBtn").addEventListener("click", showLoginBox);
document.querySelector("#signupBtn").addEventListener("click", showSignupBox);

import {
  popupHTML,
  showAlertPopupOverlay,
  showAlertPopupBody,
  closeAlertPopup1,
  closeAlertPopup2,
} from "../scriptInside-landingPage/popup.js";
document.getElementById("alertBoxUpperDiv1").innerHTML = popupHTML();
document.getElementById("alertBoxUpperDiv2").innerHTML = popupHTML();
document
  .querySelector("#alertBoxUpperDiv1>.alertBox>.closePopup")
  .addEventListener("click", closeAlertPopup1);
document
  .querySelector("#alertBoxUpperDiv2>.alertBox>.closePopup")
  .addEventListener("click", closeAlertPopup2);

// localStorage 
userSignupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var userPhoneNo=document.getElementById("userPhoneNumber").value;
  var userName=document.getElementById("userName").value;
  var userEmail=document.getElementById("userEmail").value;
  var userPass=document.getElementById("userPassword").value;


  localStorage.setItem("userId_1",userPhoneNo)
  localStorage.setItem("userName_1",userName)
  localStorage.setItem("userId_1",userEmail)
  localStorage.setItem("pass_1",userPass)

  document.querySelector(".submitBtn").addEventListener("click", showLoginBox);
  
});

// localStorage 
userLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  var userId=document.getElementById("enteredEmailOrPhoneNumber").value;
  var pass=document.getElementById("enteredPassword").value;

  var userId_1=localStorage.getItem("userId_1");
  var pass_1=localStorage.getItem("pass_1");
  if(userId==userId_1 && pass==pass_1){
    window.location.href="./swiggy_firstpage/firstpage.html";
  }else{
    alert("user id and password is incorrect")
  }

});

function showProfileSection() {

  
    document.querySelector("#loggedUpperDiv").style.display = "none";
    document.querySelector("#navButtonUpperDiv").style.display = "block";

}

document.getElementById("searchBtn").addEventListener("click", () => {
  window.location.href = "./swiggy_firstpage/firstpage.html";
});

document.getElementById("goToLoginBox").addEventListener("click", () => {
  // initialPosition();
  showLoginBox();
});

document.getElementById("goToSignupBox").addEventListener("click",() => {
  showSignupBox();
});

// responsive part


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let randomTextHead = document.getElementById("randomText");
let text = [
  "Order from top & favourite restaurants",
  "with a wide collection of cuisines",
  "delivered quickly to your doorstep",
];
let ind = 1;
randomTextHead.innerText = text[ind];
setInterval(() => {
  if (ind == text.length) {
    ind = 0;
  }
  randomTextHead.innerText = text[ind];
  ind++;
}, 2000);
