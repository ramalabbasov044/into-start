"use strict";
import logos from "./logo.json" assert { type: "json" };
console.log(logos);

let logoContainer = document.querySelector(".card-body");

logos.forEach(function (logo) {
  var logoElement = document.createElement("button");
  logoElement.classList.add("card");
  logoElement.classList.add("clickBtn");
  logoElement.setAttribute("id", logo.id);
  logoElement.innerHTML = '<img class="logo" src="' + logo.image + '" alt="">';

  logoElement.addEventListener("click", function () {
    var logoDetails = getLogoDetails(logo.id);
    showLogoDetails(logoDetails);
  });

  logoContainer.appendChild(logoElement);
});

function getLogoDetails(logoId) {
  return logos.find(function (logo) {
    return logo.id === logoId;
  });
}

function showLogoDetails(logoDetails) {
  var detailsContainer = document.querySelector(".popup-body");
  detailsContainer.details;

  document.querySelector(".popup-body").style.display = "flex";


  const popupText = document.querySelector(".popup-text");
  const popupDescription = document.querySelector(".popup-description");
  popupText.innerHTML = logoDetails.name;
  popupDescription.innerHTML = logoDetails.description;
}

const pop_up_header = document.querySelector(".pop-up-close");

pop_up_header.addEventListener("click", function () {
  document.querySelector(".popup-body").style.display = "none";
});






// hmaburger menu

let menuIcon = document.querySelector(".menu-icon-body")
let sidebar = document.querySelector(".sidebar")
let closebutton = document.querySelector(".closeButton")
let body = document.querySelector("body")

menuIcon.addEventListener("click",function(){
    sidebar.style.display = "flex"
    body.style.backgroundColor = "#000000"
    body.style.opacity = .7
})

closebutton.addEventListener("click",function(){
    sidebar.style.display = "none"
    body.style.backgroundColor = ""
})