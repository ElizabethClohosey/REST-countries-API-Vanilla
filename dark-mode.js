console.log("Hi Liz");

document
  .getElementById("toggle-theme")
  .addEventListener("click", function(event) {
    console.log("Theme Changed");
    document.body.classList.toggle("dark-mode");
  });

  


