console.log("countries.js is connected");

// Building search results section structure
let resultsSection = document.querySelector(".search-results");

// Adding container where results will populate to DOM
let resultsContainer = creteResultsContainer();

// Adding row to results container for cols to populate
let resultsRow = createResultsRow();

// Global Variables
let countries;
let regionList = document.querySelector("#region");
let countriesList = document.querySelector("#searched-country");
// let details;
let countryDetail = false;
console.log("Should be false", countryDetail);

// Searching by region on change event for select dropdown
regionList.addEventListener("change", (event) => {
  countryDetail = true;
  console.log("Should be true", countryDetail);
  // Getting value from the region select menu
  let chosenRegion = event.target.value;

  // fetching the REST countries API for each chosen region
  const getRegionData = fetch(
    `https://restcountries.eu/rest/v2/region/${chosenRegion}`
  )
    .then((res) => res.json())
    // .then((data) => initialize(data))
    .then((data) => displayCountryInfo(data)) // Displaying search results
    .catch((err) => console.log("ERROR", err));
});

// Searching by country on change event for input textbox
countriesList.addEventListener("change", (event) => {
  countryDetail = true;
  console.log("Should be true", countryDetail);
  let searchedCountry = countriesList.value.toLowerCase();
  console.log("This will be the value of the input", searchedCountry);

  const getCountryData = fetch(
    `https://restcountries.eu/rest/v2/name/${searchedCountry}?fullText=true`
  )
    .then((res) => res.json())
    .then((data) => displayCountryInfo(data)) // Displaying search results
    .catch((err) => {
      console.log("ERROR", err);
      // alert("Please enter a valid country name");
    });
});

function handleCountrySelection(countryInfo) {
  // let details = document.querySelector(".country-info");
  details = document.querySelector(".country-info");

  // details.forEach((detail) => {});
  if (countryDetail === true) {
    console.log("It worked!");
    console.log(
      "Country info in handle country selection function",
      countryInfo
    );

    countryInfo.addEventListener("click", (event) => {
      console.log("Country Info was clicked!!");
      window.location.href = "detail-page/detail.html";
      // createResultsContainer();
      // createResultsRow();
    });
  } else {
    console.log("Nope, it didn't work");
  }
  // resultsCols.addEventListener("click", (event) => {
  //   console.log("Country Info was clicked!!");
  // });
}
// handleCountrySelection();

function createResultsRow() {
  let resultsRow = document.createElement("div");
  resultsRow.setAttribute("class", "row mt-5 results-row");
  resultsContainer.appendChild(resultsRow);
  return resultsRow;
}

function creteResultsContainer() {
  let resultsContainer = document.createElement("div");
  resultsContainer.setAttribute("class", "results-container");
  resultsSection.appendChild(resultsContainer);
  return resultsContainer;
}

function createCols() {
  let resultsCols = document.createElement("div");
  resultsCols.setAttribute("class", "col-lg-3 mb-2");
  // resultsCols.setAttribute(`value ${country.name}`);
  resultsRow.appendChild(resultsCols);
  return resultsCols;
}

function createInfoDiv(resultsCols) {
  let countryInfo = document.createElement("div");
  countryInfo.setAttribute("class", "country-info");
  resultsCols.appendChild(countryInfo);

  return countryInfo;
}

function createInfoBody(countryInfo) {
  let countryInfoBody = document.createElement("div");
  countryInfoBody.setAttribute("class", "info-body");
  countryInfo.appendChild(countryInfoBody);
  return countryInfoBody;
}

function getFlagImg(country, countryInfo) {
  let flagImg = document.createElement("img");
  flagImg.setAttribute("src", country.flag);
  flagImg.setAttribute("alt", `"Flag for ${country.name}`);
  countryInfo.appendChild(flagImg);
}

function getName(countryInfoBody, country) {
  let countryName = document.createElement("h5");
  countryInfoBody.appendChild(countryName);
  countryName.innerHTML = country.name;
}

function getPopulation(countryInfoBody, country) {
  let population = document.createElement("p");
  countryInfoBody.appendChild(population);
  population.innerHTML = `Population:
      ${country.population.toLocaleString("en-US")}`;
}

function getRegion(countryInfoBody, country) {
  let region = document.createElement("p");
  countryInfoBody.appendChild(region);
  region.innerHTML = `Region:
      ${country.region}`;
}

function getCapital(countryInfoBody, country) {
  let capital = document.createElement("p");
  countryInfoBody.appendChild(capital);
  capital.innerHTML = `Capital:
      ${country.capital}`;
}

const displayCountryInfo = (countryData) => {
  countries = countryData;

  countries.forEach((country) => {
    // Adding to search results section
    let resultsCols = createCols();
    let countryInfo = createInfoDiv(resultsCols);
    getFlagImg(country, countryInfo);
    let countryInfoBody = createInfoBody(countryInfo);
    getName(countryInfoBody, country);
    getPopulation(countryInfoBody, country);
    getRegion(countryInfoBody, country);
    getCapital(countryInfoBody, country);

    handleCountrySelection(countryInfo);
  });
};

function createDetailCols() {
  let resultsCols = document.createElement("div");
  resultsCols.setAttribute("class", "col-6");
  // resultsCols.setAttribute(`value ${country.name}`);
  resultsRow.appendChild(resultsCols);
  return resultsCols;
}
