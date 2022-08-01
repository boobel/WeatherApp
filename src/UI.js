const makeSearchBar = () => {
  const searchBar = document.createElement('input');
  searchBar.setAttribute('id', 'searchBox');
  searchBar.setAttribute('placeholder', 'Enter location');
  return searchBar;
};

const makeWeather = () => {
  const weatherBlock = document.createElement('div');
  const weatherTempReal = document.createElement('p');
  const weatherDesc = document.createElement('p');
  const weatherPressure = document.createElement('p');
  const weatherWind = document.createElement('p');
  const Location = document.createElement('p');

  // some default values
  weatherTempReal.innerHTML = 'TEMP REAL';
  weatherDesc.innerHTML = 'DESCRIPTION';
  weatherPressure.innerHTML = 'PRESSURE';
  weatherWind.innerHTML = 'WIND';
  Location.innerHTML = 'LOCATION';

  weatherBlock.setAttribute('class', 'weatherBlock');
  weatherTempReal.setAttribute('class', 'weatherTempReal');
  weatherDesc.setAttribute('class', 'weatherDesc');
  weatherPressure.setAttribute('class', 'weatherPressure');
  weatherWind.setAttribute('class', 'weatherWind');
  Location.setAttribute('class', 'Location');

  weatherBlock.appendChild(Location);
  weatherBlock.appendChild(weatherDesc);
  weatherBlock.appendChild(weatherTempReal);
  weatherBlock.appendChild(weatherPressure);
  weatherBlock.appendChild(weatherWind);

  return weatherBlock;
};

const openWeatherblock = () => {
  const weatherBlock = document.querySelector('.weatherBlock');
  weatherBlock.classList.add('open-weatherBlock');
};

const fillWeatherTextContent = async (data) => {
  const actualdata = await data;
  const result = await actualdata;
  const city = document.querySelector('.Location');
  const tempReal = document.querySelector('.weatherTempReal');
  const description = document.querySelector('.weatherDesc');
  const pressure = document.querySelector('.weatherPressure');
  const wind = document.querySelector('.weatherWind');

  city.innerHTML = result.city;
  tempReal.innerHTML = `${result.tempReal} &degC`;
  description.innerHTML = result.weather;
  pressure.innerHTML = `${result.pressure} Hpa`;
  wind.innerHTML = `${result.wind} m/s`;
};

const loadUI = () => {
  const content = document.querySelector('.content');
  content.innerHTML = '';

  content.appendChild(makeSearchBar());
  content.appendChild(makeWeather());
};

export { loadUI, fillWeatherTextContent, openWeatherblock };
