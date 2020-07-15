console.log("detail.js is conneceted");

let backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", (event) => {
  console.log("back button was clicked");
  window.location.href = "../index.html";
});
