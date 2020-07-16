console.log("Hi Liz");

// body = document.body;
// darkMode = false;
// console.log("Dark mode should be false", darkMode);

document
  .getElementById("toggle-theme")
  .addEventListener("click", function (event) {
    console.log("Theme Changed");
    // darkMode = true;
    document.body.classList.toggle("dark-mode");

    let moonIcon = document.querySelector(".moon-icon");
    // let body = document.querySelector(".body");
    if (document.body.classList.contains("dark-mode")) {
      console.log("Body contains dark-mode class");
      // document.querySelector(".moon-icon").style.color = "red";

      moonIcon.removeAttribute("name", "moon-outline");
      moonIcon.setAttribute("name", "moon");
    } else {
      console.log("Body DOES NOT contain dark-mode class");
      moonIcon.removeAttribute("name", "moon");
      moonIcon.setAttribute("name", "moon-outline");
    }
  });
