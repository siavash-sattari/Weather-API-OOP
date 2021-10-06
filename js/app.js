let weatherData = new Weather("tehran");
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
      alert("Please serach for a valid city!");
      document.querySelector("#city").value = "";
    });
}

function changeCity() {
  let city = document.querySelector("#city").value;
  weatherData.chageCity(city);
  getWeather();
  $("#showModals").modal("hide");
}
