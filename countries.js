console.log("Countries is linked");

// let chosenRegion = document.querySelector(".region");
// console.log("Chosen Region", chosenRegion.value);
// let searchedCountry = document.getElementById("searched-country");
// console.log("Searched Value", searchedCountry.value);

let countries;
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
    .then((data) => initialize(data))
    .catch((err) => console.log("ERROR", err));

  const initialize = (regionData) => {
    console.log("This is the region data", regionData);

    // I might not need this function - will possibly only use displayCountryInfo function

    // region = regionData;

    // console.log("this should be each region", region);
    // let options = "";

    // countries.forEach((country) => {
    //   options += `<option value="${country.alpha3Code}">${country.region}</option>`;
    // });

    // countriesList.innerHTML = options;

    // displayCountryInfo("AFG");
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
});

// const displayCountryInfo = (countryByAlpha3Code) => {
//   const countryData = countries.find(
//     (country) => country.alpha3Code === countryByAlpha3Code
//   );
//   console.log("WHAT IS THIS?!?!", countryData);
//   document.querySelector(".flag-container img").src = countryData.flag;
//   document.querySelector(
//     ".flag-container img"
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
