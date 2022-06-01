const city = document.querySelector(".city");
const select_city = document.querySelector(".select-city");
const checkIcon = document.querySelector(".check-icon");
const location_weather = document.querySelector(".location-weather");
const weather_icon = document.querySelector(".weather-icon");
//

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
    /*   console.log(weather_icon);
    console.log(data.weather[0].main); */
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
