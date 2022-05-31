const city = document.querySelector(".city");
const select_city = document.querySelector(".select-city");

city.addEventListener("click", () => {
  city.setAttribute("hidden", "");
  select_city.removeAttribute("hidden", "");
  select_city.children[0].focus();
});

console.log(select_city.children[0]);
