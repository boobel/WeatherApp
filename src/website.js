import { loadUI, fillWeatherTextContent, openWeatherblock } from './UI';
import { getData, buildWeatherRequestURL, getWeather } from './API';

const addListeners = () => {
  const searchBarInput = document.querySelector('#searchBox');
  searchBarInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      fillWeatherTextContent(getWeather(buildWeatherRequestURL(getData())));
      openWeatherblock();
    }
  });
};

const runWeather = () => {
  loadUI();
  addListeners();
};

export default runWeather;
