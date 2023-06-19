"use strict";
import logos from "./logo.json" assert { type: "json" };
console.log(logos);

let dataBody = document.querySelector(".card-body");
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
