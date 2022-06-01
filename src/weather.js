const city = document.querySelector(".city");
const select_city = document.querySelector(".select-city");
const checkIcon = document.querySelector(".check-icon");
const location_weather = document.querySelector(".location-weather");
const weather_icon = document.querySelector(".weather-icon");
const weather_container = document.querySelector(".weather-container");
//.weather-container

let weather = {
  appKey: "48b287be2a3392698910b87d61c23d37",
  fetchWeather: (city) => {
    const selectedCity = /* select_city.firstElementChild.value */ city;
    localStorage.setItem("Selected City", selectedCity);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${weather.appKey}`
    )
      .then((res) => res.json())
      .then((data) => weather.displayWeather(data));
  },
  displayWeather: async function (data) {
    const { name } = data;
    const { icon } = data.weather[0];

    // clear
    // day
    if (data.weather[0].main === "Clear" && icon === "01d") {
      weather_container.style.backgroundImage = "url(./assets/img/clear.gif)";
      // night
    } else if (data.weather[0].main === "Clear" && icon === "01n") {
      weather_container.style.backgroundImage =
        "url(./assets/img/clear_night.gif)";
    }
    // clouds
    //day
    else if (data.weather[0].main === "Clouds" && icon === "02d") {
      weather_container.style.backgroundImage = "url(./assets/img/clouds.gif)";
    } else if (data.weather[0].main === "Clouds" && icon === "03d") {
      weather_container.style.backgroundImage =
        "url(./assets/img/clouds_night.gif)";
    } else if (data.weather[0].main === "Clouds" && icon === "04d") {
      weather_container.style.backgroundImage =
        "url(./assets/img/broken_clouds.gif)";
    }
    //night
    else if (data.weather[0].main === "Clouds" && icon === "02n") {
      weather_container.style.backgroundImage =
        "url(./assets/img/moon_and_clouds.gif)";
    } else if (
      (data.weather[0].main === "Clouds" && icon === "04n") ||
      (data.weather[0].main === "Clouds" && icon === "03n")
    ) {
      weather_container.style.backgroundImage =
        "url(./assets/img/clouds_night.gif)";
      //rain
    } else if (data.weather[0].main === "Rain" && icon === "10d") {
      weather_container.style.backgroundImage =
        "url(./assets/img/rainy_day.gif)";
    } else if (data.weather[0].main === "Rain" && icon === "10n") {
      weather_container.style.backgroundImage =
        "url(./assets/img/rainy_day.gif)";
    } else if (data.weather[0].main === "Thunderstorm" && icon === "11n") {
      weather_container.style.backgroundImage =
        "url(./assets/img/storm_night.gif)";
    } else if (data.weather[0].main === "Thunderstorm" && icon === "11d") {
      weather_container.style.backgroundImage =
        "url(./assets/img/storm_day.gif)";
    } else if (data.weather[0].main === "Snow") {
      weather_container.style.backgroundImage = "url(./assets/img/snow.gif)";
    } else if (data.weather[0].main === "Mist") {
      weather_container.style.backgroundImage = "url(./assets/img/mist.gif)";
    }
    console.log(icon);
    console.log(data.weather[0].main);

    city.innerHTML = `<p>${name}</p>`;
    weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    select_city.setAttribute("hidden", "");
    city.removeAttribute("hidden");
  },
};

city.addEventListener("click", () => {
  city.setAttribute("hidden", "");
  select_city.removeAttribute("hidden", "");
  select_city.children[0].focus();
});

checkIcon.addEventListener("click", async () => {
  const selectedCity = select_city.firstElementChild.firstElementChild.value;
  await weather.fetchWeather(selectedCity);
  /* await weather.displayWeather(); */
});

if (localStorage.getItem("Selected City")) {
  const selectedCitySaved = localStorage.getItem("Selected City");
  console.log(selectedCitySaved);
  weather.fetchWeather(selectedCitySaved);
}
