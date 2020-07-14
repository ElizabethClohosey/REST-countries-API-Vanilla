
// Building search results section structure
let resultsSection = document.querySelector(".search-results");

let resultsContainer = document.createElement("div");
resultsContainer.setAttribute("class", "results-container");
resultsSection.appendChild(resultsContainer);

let resultsRow = document.createElement("div");
resultsRow.setAttribute("class", "row mt-5 results-row");
resultsContainer.appendChild(resultsRow);

// Global Variables
let countries;
// let regions;
let regionList = document.querySelector("#region");
let countriesList = document.querySelector("#searched-country");

// Searching by region
regionList.addEventListener("change", (event) => {
  // displayCountryInfo(event.target.value);

  // Getting value from the region select menu
  let chosenRegion = event.target.value;
  console.log("This will be the value of the region select", chosenRegion);

  // fetching the REST countries API for each chosen region
  const getRegionData = fetch(
    `https://restcountries.eu/rest/v2/region/${chosenRegion}`
  )
    .then((res) => res.json())
    // .then((data) => initialize(data))
    .then((data) => displayRegionInfo(data)) // Displaying search results
    .catch((err) => console.log("ERROR", err));

  // Function to display region search results
  const displayRegionInfo = (countryData) => {
    countries = countryData;

    countries.forEach((country) => {
      // document.querySelector(".search-results").empty;
      // Adding to search results section
      let resultsCols = createCols();
      let countryInfo = createInfoDiv(resultsCols);
      getFlagImg(country, countryInfo);
      let countryInfoBody = createInfoBody(countryInfo);
      getName(countryInfoBody, country);
      getPopulation(countryInfoBody, country);
      getRegion(countryInfoBody, country);
      getCapital(countryInfoBody, country);
    });
  };
});

countriesList.addEventListener("change", (event) => {
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

  const displayCountryInfo = (countryData) => {
    countries = countryData;

    countries.forEach((country) => {
      let resultsCols = createCols();
      let countryInfo = createInfoDiv(resultsCols);
      getFlagImg(country, countryInfo);
      let countryInfoBody = createInfoBody(countryInfo);
      getName(countryInfoBody, country);
      getPopulation(countryInfoBody, country);
      getRegion(countryInfoBody, country);
      getCapital(countryInfoBody, country);
    });
  };
});

function createCols() {
  let resultsCols = document.createElement("div");
  resultsCols.setAttribute("class", "col-lg-3 mb-2");
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
