"use strict";
import logos from "./logo.json" assert { type: "json" };
console.log(logos);

let dataBody = document.querySelector(".card-body");

// for (const item of logos) {
//   let card_button = document.createElement("button");
//   let card_img = document.createElement("img");
//   card_img.classList.add("logo");
//   card_button.classList.add("card");
//   card_button.classList.add("clickBtn");
//   card_button.textContent = item.id;
//   card_img.src = item.image;
//   card_button.appendChild(card_img);
//   dataBody.appendChild(card_button);
// }

{
  /* <img class="logo" src="${item.image}" alt="" /> */
}

// Function to display user data
// function showUserData(userId) {
//   // Find the clicked user data by id
//   const user = userData.find((user) => user.id === userId);

//   // Display the user data on the screen
//   const userInfo = document.getElementById("user-info");
//   userInfo.innerHTML = `
//     <h3>User Information</h3>
//     <p><strong>Name:</strong> ${user.name}</p>
//     <p><strong>Age:</strong> ${user.age}</p>
//     <p><strong>Email:</strong> ${user.email}</p>
//   `;
// }

// const clickBtn = document.getElementById("clickBtn");
// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("closeBtn");

// clickBtn.addEventListener("click", () => {
//   popup.style.display = "block";
// });
// closeBtn.addEventListener("click", () => {
//   popup.style.display = "none";
// });

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
  popupText.innerHTML = logoDetails.name;
}

const pop_up_header = document.querySelector(".pop-up-close");
pop_up_header.addEventListener("click", function () {
  document.querySelector(".popup-body").style.display = "none";
});
