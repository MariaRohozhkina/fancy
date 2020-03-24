export const body = document.getElementById("body");
const main = document.getElementById("main");

const weatherBlock = document.createElement("div");
weatherBlock.className = "weather-block";
main.appendChild(weatherBlock);

const navigation = document.createElement("nav");
navigation.className = "nav";
weatherBlock.appendChild(navigation);

const navigationUl = document.createElement("ul");
navigation.appendChild(navigationUl);

const backgroundImageButton = document.createElement("li");
navigationUl.appendChild(backgroundImageButton);

export const backgroundImage = document.createElement("button");
backgroundImage.innerHTML = "ChangeBack";
backgroundImageButton.appendChild(backgroundImage);

// const language = document.createElement("li");
// navigationUl.appendChild(language);

// const languageEN = document.createElement("button");
// languageEN.innerHTML = "EN";
// language.appendChild(languageEN);

// const languageBE = document.createElement("button");
// languageBE.innerHTML = "BE";
// language.appendChild(languageBE);

// const languageRU = document.createElement("button");
// languageRU.innerHTML = "RU";
// language.appendChild(languageRU);

const temperatureButton = document.createElement("li");
navigationUl.appendChild(temperatureButton);

export const temperatureButtonFahrenheit = document.createElement("button");
temperatureButtonFahrenheit.innerHTML = "°F";
temperatureButton.appendChild(temperatureButtonFahrenheit);

export const temperatureButtonCelsius = document.createElement("button");
temperatureButtonCelsius.innerHTML = "°C";
temperatureButton.appendChild(temperatureButtonCelsius);

const weatherTodayBlock = document.createElement("div");
weatherTodayBlock.className = "weather-today";
weatherBlock.appendChild(weatherTodayBlock);

const currentCountryContainer = document.createElement("div");
weatherTodayBlock.appendChild(currentCountryContainer);

const currentCountryName = document.createElement("h2");
currentCountryContainer.appendChild(currentCountryName);

const currentDataAndTime = document.createElement("div");
currentDataAndTime.className = "data-and-time-container";
weatherTodayBlock.appendChild(currentDataAndTime);

export const currentPlace = document.createElement("h3");
currentDataAndTime.appendChild(currentPlace);

export const currentTime = document.createElement("h3");
currentTime.id = "currentTime";
currentDataAndTime.appendChild(currentTime);

const currentWeather = document.createElement("div");
currentWeather.className = "current-weather";
weatherTodayBlock.appendChild(currentWeather);

const currentTemperatureContainer = document.createElement("div");
currentTemperatureContainer.className = "current-temperature";
currentWeather.appendChild(currentTemperatureContainer);

export const currentTemperature = document.createElement("h2");
currentTemperature.className = "current-temperature__number";
currentTemperatureContainer.appendChild(currentTemperature);

export const currentTemperaturePicture = document.createElement("img");
currentTemperaturePicture.id = "currentTemperaturePicture";
currentTemperatureContainer.appendChild(currentTemperaturePicture);

const characteristics = document.createElement("div");
characteristics.className = "characteristics";
currentWeather.appendChild(characteristics);

export const summary = document.createElement("p");
characteristics.appendChild(summary);

export const wind = document.createElement("p");
characteristics.appendChild(wind);

export const humidity = document.createElement("p");
characteristics.appendChild(humidity);

export const feelsLike = document.createElement("p");
characteristics.appendChild(feelsLike);

const weatherForThreeDays = document.createElement("div");
weatherForThreeDays.className = "weather-for-three-days";
weatherBlock.appendChild(weatherForThreeDays);

const weatherForFirstDay = document.createElement("div");
weatherForThreeDays.appendChild(weatherForFirstDay);

export const nameOfTheFirstDay = document.createElement("p");
weatherForFirstDay.appendChild(nameOfTheFirstDay);

const futureTemperatureContainer = document.createElement("div");
weatherForFirstDay.appendChild(futureTemperatureContainer);

export const futureTemperature = document.createElement("p");
futureTemperatureContainer.appendChild(futureTemperature);

export const futureTemperaturePicture = document.createElement("img");
futureTemperatureContainer.appendChild(futureTemperaturePicture);

const weatherForSecondDay = document.createElement("div");
weatherForThreeDays.appendChild(weatherForSecondDay);

export const nameOfTheSecondDay = document.createElement("p");
weatherForSecondDay.appendChild(nameOfTheSecondDay);

const futureTemperatureContainer2 = document.createElement("div");
weatherForSecondDay.appendChild(futureTemperatureContainer2);

export const futureTemperature2 = document.createElement("p");
futureTemperatureContainer2.appendChild(futureTemperature2);

export const futureTemperaturePicture2 = document.createElement("img");
futureTemperatureContainer2.appendChild(futureTemperaturePicture2);

const weatherForThirdDay = document.createElement("div");
weatherForThreeDays.appendChild(weatherForThirdDay);

export const nameOfTheThirdDay = document.createElement("p");
weatherForThirdDay.appendChild(nameOfTheThirdDay);

const futureTemperatureContainer3 = document.createElement("div");
weatherForThirdDay.appendChild(futureTemperatureContainer3);

export const futureTemperature3 = document.createElement("p");
futureTemperatureContainer3.appendChild(futureTemperature3);

export const futureTemperaturePicture3 = document.createElement("img");
futureTemperatureContainer3.appendChild(futureTemperaturePicture3);

const currentLocation = document.createElement("div");
currentLocation.className = "location";
main.appendChild(currentLocation);

export const voiceContainer = document.createElement("div");
voiceContainer.id = "voiceContainer";
currentLocation.appendChild(voiceContainer);

const voiceIcon = document.createElement("img");
voiceIcon.id = "voiceIcon";
voiceIcon.setAttribute("src", "../src/assets/microphone.png");
voiceContainer.appendChild(voiceIcon);

export const mapContainer = document.createElement("div");
mapContainer.id = "mapContainer";
currentLocation.appendChild(mapContainer);

const longitudeAndLatitude = document.createElement("div");
longitudeAndLatitude.id = "longlat";
currentLocation.appendChild(longitudeAndLatitude);

export const latitude = document.createElement("p");
longitudeAndLatitude.appendChild(latitude);

export const longitude = document.createElement("p");
longitudeAndLatitude.appendChild(longitude);
