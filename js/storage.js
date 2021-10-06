class Storage {
  constructor() {
    this.defaultCity = "tehran";
  }

  getCityFromLS() {
    let city;
    if (localStorage.getItem("city") === null) {
      city = this.defaultCity;
    } else {
      city = localStorage.getItem("city");
    }
    return city;
  }

  setCityToLs(city) {
    localStorage.setItem("city", city);
  }
}
