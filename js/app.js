let weatherData = new Weather("tehran");

weatherData
  .getWeather()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
