// Variables

let storage = new Storage();
let city = storage.getCityFromLS();
let weatherData = new Weather(city);
let ui = new UI();

// Load Content

document.addEventListener("DOMContentLoaded", (e) => {
  getWeather();
});

// Change The City

document.querySelector("#save-change").addEventListener("click", changeCity);

// Functions

function getWeather() {
  weatherData
    .getWeather()
    .then((data) => {
      console.log(data);
      ui.setWeatherInfo(data);
      document.querySelector("#city").value = "";
    })
    .catch((err) => {
      localStorage.clear();
      alert("Please serach a valid city!");
      document.querySelector("#city").value = "";
    });
}

function changeCity() {
  let city = document.querySelector("#city").value;
  weatherData.chageCity(city);
  getWeather();
  $("#showModals").modal("hide");
  storage.setCityToLs(city);
}
