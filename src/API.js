// this fetches data from searchbar
const getData = () => {
  const searchBarInput = document.querySelector('#searchBox');
  return searchBarInput.value;
};

// build string for requesting weather from API
const buildWeatherRequestURL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ba2b21572c62ebad6870e64d8040d76a`;

const convertWeather = (data) => {
  const dataDict = {
    city: data.name,
    tempReal: (data.main.temp / 10).toFixed(2),
    pressure: data.main.pressure,
    weather: data.weather[0].description,
    wind: data.wind.speed,
  };
  return dataDict;
};

// gets weather for users location
const getWeather = async (url) => {
  const weather = await fetch(url, { mode: 'cors' });
  let json = await weather.json();
  json = convertWeather(json);
  return json;
};

export { getData, buildWeatherRequestURL, getWeather };
