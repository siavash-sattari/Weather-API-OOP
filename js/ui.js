class UI {
  constructor() {
    this.locationW = document.querySelector("#w-location");
    this.condition = document.querySelector("#w-condition");
    this.icon = document.querySelector("#w-icon");
    this.temp = document.querySelector("#w-temp");
    this.humidity = document.querySelector("#w-humidity");
    this.feelsLike = document.querySelector("#w-feels-likes");
    this.wind = document.querySelector("#w-wind");
    this.bgColor = document.querySelector(".card-body");
  }

  setWeatherInfo(weatherData) {
    // Location
    this.locationW.textContent = `${weatherData.name} , ${weatherData.sys.country}`;

    // Condition
    this.condition.textContent = `${weatherData.weather[0]["description"]}`;

    // Icon
    let iconURL = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherData.weather[0].icon}.svg`;
    this.icon.setAttribute("src", iconURL);

    // Temp
    this.temp.textContent = `Temp : ${weatherData.main.temp.toFixed(1)} \u00b0C`;

    // Humidity
    this.humidity.textContent = `Humidity : ${weatherData.main.humidity}%`;

    // Feels Like
    this.feelsLike.textContent = `Feels Like : ${Math.ceil(weatherData.main.feels_like)} \u00b0C`;

    // Wind Speed
    this.wind.textContent = `Wind Speed :  ${(weatherData.wind.speed / 3.6).toFixed(1)} km/h`;

    // Background Color
    this.bgColor.style.backgroundColor = "#e8e8e8";
    // if (weatherData.main.temp > 30) {
    //   this.bgColor.style.backgroundColor = "#fcdc88";
    // } else {
    //   this.bgColor.style.backgroundColor = "#b1ecfc" ;
    // }
  }
}
