// Constables
const weatherTemperature = document.getElementById("weatherTemperature");
const weatherCountry = document.getElementById("weatherCountry");
const weatherCity = document.getElementById("weatherCity");
const cityTime = document.getElementById("cityTime");
const weatherImage = document.getElementById("weatherImage");
const weatherType = document.getElementById("weatherType");
const cloudy = document.getElementById("cloudy");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const rain = document.getElementById("rain");
const secretApiText = document.getElementById("secretApiText");
const confirmSecret = document.getElementById("confirmSecret");
const secret = document.getElementById("secret");
const menu = document.getElementById("menu");
const left = document.getElementById("left");
const right = document.getElementById("right");
const goBack = document.getElementById("goBack");
const search = document.getElementById("search");
const escape = document.querySelector(".escape");

//Constable locations
const durban = document.getElementById("durban");
const mosselBay = document.getElementById("mosselBay");
const london = document.getElementById("london");
const hillcrest = document.getElementById("hillcrest");

//Variables
var city = "Durban";
var apiKey = null;
var secretShown = false;

if (localStorage.getItem("theme") === "warm") {
  warmTheme();
} else if (localStorage.getItem("theme") === "cold") {
  coldTheme();
} else {
  console.log("No theme stored in local storage");
}

async function setWeatherUsingPresets(cityLocation) {
  city = cityLocation.value;
  await updateElements();
}

function warmTheme() {
  const root = document.querySelector(":root");

  root.style.setProperty("--leftText", "#462224");
  root.style.setProperty("--leftBackground-rightText", "#9f8f80");
  root.style.setProperty("--rightBackground", "#3a312c");
}

function coldTheme() {
  const root = document.querySelector(":root");

  root.style.setProperty("--leftText", "#132e35");
  root.style.setProperty("--leftBackground-rightText", "#afb3b7");
  root.style.setProperty("--rightBackground", "#69818d");
}

async function setTheme() {
  const weather = await getTemperature();
  const temp = weather.current["temp_c"];
  if (temp < 20) {
    localStorage.setItem("theme", "cold");
    coldTheme();
  } else {
    localStorage.setItem("theme", "warm");
    warmTheme();
  }
}

async function showSecret() {
  secretApiText.style.display = "block";
  confirmSecret.style.display = "block";
}

async function hideSecret() {
  secretApiText.style.display = "none";
  confirmSecret.style.display = "none";
}

function goBackToHome() {
  if (left.style.display === "none") {
    left.style.display = "flex";
    right.style.display = "none";
  }
}

function setLocalStorageCity(getCity) {
  localStorage.setItem("city", getCity);
}

secret.addEventListener("click", async function () {
  if (secretShown === false) {
    await showSecret();
    secretShown = true;
  } else {
    await hideSecret();
    secretShown = false;
  }
});

confirmSecret.addEventListener("click", async function () {
  apiKey = secretApiText.value;
  await hideSecret();
  secretShown = false;
  await updateElements();
  weatherImage.style.display = "block";

  localStorage.setItem("api-key", apiKey);
});

durban.addEventListener("click", async function () {
  city = "Durban";
  goBackToHome();
  setLocalStorageCity(city);
  await updateElements();
});

mosselBay.addEventListener("click", async function () {
  city = "Mossel Bay";
  goBackToHome();
  setLocalStorageCity(city);
  await updateElements();
});

london.addEventListener("click", async function () {
  city = "London";
  goBackToHome();
  setLocalStorageCity(city);
  await updateElements();
});

hillcrest.addEventListener("click", async function () {
  city = "Hillcrest South Africa";
  goBackToHome();
  setLocalStorageCity(city);
  await updateElements();
});

var valid = localStorage.getItem("api-key");
var localCity = localStorage.getItem("city");
if (valid !== null) {
  apiKey = valid;
  city = localCity;
  weatherImage.style.display = "block";
  updateElements();
} else {
  console.log("Not a valid localStorage item");
}

menu.addEventListener("click", function () {
  left.style.display = "none";
  right.style.display = "flex";
});

goBack.addEventListener("click", function () {
  goBackToHome();
});

search.addEventListener("click", async function () {
  city = document.getElementById("addLocationInput").value;
  goBackToHome();
  setLocalStorageCity(city);
  await updateElements();
});

async function getTemperature() {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  const response = await fetch(url);
  const weather = await response.json();
  console.log(weather);
  return weather;
}

async function getTime() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentTime = new Date();
  let hours = currentTime.getHours().toString().padStart(2, "0");
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  // let seconds = currentTime.getSeconds().toString().padStart(2, "0");
  let weekday = weekdays[currentTime.getDay()];
  let day = currentTime.getDate();
  let month = months[currentTime.getMonth()];
  let year = currentTime.getFullYear();
  month = month.slice(0, 3);

  const formattedTime = `${hours}:${minutes} - ${weekday}, ${day} ${month} '${
    year % 100
  }`;

  cityTime.innerHTML = formattedTime;
}

async function updateElements() {
  const weatherData = await getTemperature();
  weatherTemperature.innerHTML =
    Math.round(weatherData.current["temp_c"]) + " °";
  weatherCountry.innerHTML = weatherData.location["country"] + ",";
  weatherCity.innerHTML = weatherData.location["name"];
  weatherImage.src = weatherData.current.condition["icon"];
  weatherType.innerHTML = weatherData.current.condition["text"];
  cloudy.innerHTML = weatherData.current["cloud"] + "%";
  wind.innerHTML = weatherData.current["wind_kph"] + "km/h";
  rain.innerHTML = weatherData.current["precip_mm"] + "mm";
  humidity.innerHTML = weatherData.current["humidity"] + "%";
  setInterval(getTime, 1000);

  await setTheme();
}

setInterval(updateElements, 600000);
