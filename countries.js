console.log("Countries is linked");

// adding to DOM structure

let resultsSection = document.querySelector(".search-results");

let resultsContainer = document.createElement("div");
resultsContainer.setAttribute("class", "results-container");
resultsSection.appendChild(resultsContainer);

let resultsRow = document.createElement("div");
resultsRow.setAttribute("class", "row mt-5");
resultsContainer.appendChild(resultsRow);

let countries;
let regions;
let countriesList = document.querySelector("#searched-country");
let regionList = document.querySelector("#region");

// Searching by region
regionList.addEventListener("change", (event) => {
  // displayCountryInfo(event.target.value);
  let chosenRegion = event.target.value;
  console.log("This will be the value of the region select", chosenRegion);

  const getRegionData = fetch(
    `https://restcountries.eu/rest/v2/region/${chosenRegion}`
  )
    .then((res) => res.json())
    // .then((data) => initialize(data))
    .then((data) => displayRegionInfo(data))
    .catch((err) => console.log("ERROR", err));

  const initialize = (regionData) => {
    console.log("This is the region data", regionData);
  };

  const displayRegionInfo = (countryData) => {
    console.log(
      "This is the country data when seraching by region",
      countryData
    );
    // console.log(
    //   "This will be the info that is returned when user searches by region"
    // );
    countries = countryData;

    countries.forEach((country) => {
      let resultsCols = document.createElement("div");
      resultsCols.setAttribute("class", "col-lg-3 mb-2");
      resultsRow.appendChild(resultsCols);

      let countryInfo = document.createElement("div");
      countryInfo.setAttribute("class", "country-info");
      resultsCols.appendChild(countryInfo);
      // document.querySelector(".flag-img").src = country.flag;
      // document.querySelector(".flag-img").alt = `Flag of ${country.name}`;

      // let flagImg = document.createElement("img");
      // flagImg.setAttribute("src", country.flag);
      // document.querySelector(".results-div").appendChild(flagImg);

      console.log("Name:", country.name);
      console.log("Population", country.population.toLocaleString("en-US"));
      console.log("Region", country.region);
      console.log("Capital", country.capital);
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
    .then((data) => initialize(data))
    .catch((err) => console.log("ERROR", err));

  const initialize = (countryData) => {
    console.log("This is the region data", countryData);
  };

  const displayCountryInfo = () => {
    console.log(
      "This will be the info that is returned when user searches by country"
    );
  };
});

// const displayCountryInfo = (countryByAlpha3Code) => {
//   const countryData = countries.find(
//     (country) => country.alpha3Code === countryByAlpha3Code
//   );
//   console.log("WHAT IS THIS?!?!", countryData);
//   document.querySelector(".flag-img").src = countryData.flag;
//   document.querySelector(
//     ".flag-img"
//   ).alt = `Flag of ${countryData.name}`;
//   document.querySelector(".capital").innerHTML = countryData.capital;
//   document.querySelector(
//     ".dialing-code"
//   ).innerHTML = `+${countryData.callingCodes[0]}`;
//   document.querySelector(
//     ".population"
//   ).innerHTML = countryData.population.toLocaleString("en-US");
//   document.querySelector(
//     ".currencies"
//   ).innerHTML = countryData.currencies
//     .filter((currency) => currency.name)
//     .map((currency) => ` ${currency.name} ${currency.code}`);
//   document.querySelector(".region").innerHTML = countryData.region;
//   document.querySelector(".subregion").innerHTML = countryData.subregion;
// };

// const displayRegionInfo = (countryData) => {
//   console.log(
//     "This is the country data when seraching by region",
//     countryData
//   );
//   // console.log(
//   //   "This will be the info that is returned when user searches by region"
//   // );
//   countries = countryData;

//   countries.forEach((country) => {
//     document.querySelector(".flag-img").src = country.flag;
//     document.querySelector(".flag-img").alt = `Flag of ${country.name}`;
//     // let resultsDiv = document.getElementsByClassName("country-info");

//     // img.src = country.flag;
//     // console.log("country flag url", country.flag);

//     // let resultsDiv = document.createElement("div");
//     // resultsDiv.setAttribute("class", "results-div");
//     // document.querySelector(".results").appendChild(resultsDiv);
//     // document.querySelector(".flag-img");

//     // let flagImg = document.createElement("img");
//     // flagImg.setAttribute("src", country.flag);
//     // document.querySelector(".results-div").appendChild(flagImg);

//     console.log("Name:", country.name);
//     console.log("Population", country.population.toLocaleString("en-US"));
//     console.log("Region", country.region);
//     console.log("Capital", country.capital);
//   });
// };
// });
