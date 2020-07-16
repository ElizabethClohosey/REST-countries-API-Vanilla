console.log("detail.js is conneceted");

var url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");
console.log(code);

const getCountryData = fetch(
  `https://restcountries.eu/rest/v2/alpha?codes=${code}`
)
  .then((res) => res.json())
  .then((data) => console.log(data[0])) // Displaying search results
  .catch((err) => {
    console.log("ERROR", err);
    // alert("Please enter a valid country name");
  });

let backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", (event) => {
  console.log("back button was clicked");
  window.location.href = "../index.html";
});
