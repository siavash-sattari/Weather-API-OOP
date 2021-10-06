class Weather {
  constructor(city) {
    this.apiKey = "eb48cd844fb3254d6b2a3ded10e649ec";
    this.city = city;
  }

  // Async/Await :

  async getWeather() {
    let responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
    let weatherData = await responseWeather.json();
    return weatherData;
  }

  // Fetch :

  // getWeather() {
  //   return new Promise((resolve, reject) => {
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }

  chageCity(city) {
    this.city = city;
  }
}
