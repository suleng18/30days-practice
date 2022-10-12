const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const value = document.querySelector('.value');
const shortDesc = document.querySelector('.short-desc');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const sun = document.querySelector('.sun span');
const time = document.querySelector('.time');
const content = document.querySelector('.content');

async function changeWeatherUI(capitalValue) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod === 200) {
    content.classList.remove('hide');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = `${data.visibility}m`;
    wind.innerText = `${data.wind.speed}m/s`;
    sun.innerText = `${data.main.humidity}(%)`;
    value.innerText = Math.round(data.main.temp);
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
    time.innerText = new Date().toLocaleString('vi');
  } else {
    content.classList.add('hide');
  }
}

search.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') {
    let capitalValue = search.value.trim();
    changeWeatherUI(capitalValue);
  }
});

changeWeatherUI('ha noi');
