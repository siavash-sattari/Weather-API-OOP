let weatherData = new Weather("tehran");
let ui = new UI();

weatherData
  .getWeather()
  .then((data) => {
    console.log(data);
    ui.setWeatherInfo(data);
  })
  .catch((err) => console.log(err));
