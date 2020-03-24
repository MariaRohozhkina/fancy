/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import "./style.css";
import * as myModule from "../modules/layout.js";
import * as currentData from "../modules/currentData.js";
import * as map from "../modules/map.js";
import * as futureDates from "../modules/dateForFutureDays";
import * as findCities from "../modules/findCities";

myModule.temperatureButtonCelsius.style.background = "#ffeac1";
const url = "https://ipinfo.io/json?token=08048a02980665";
fetch(url)
  .then(res => res.json())
  .then(data => {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&lang=ua&units=metric&APPID=3bef9beac26aff61a3f3cd977a9918b3`;

    fetch(weatherAPI)
      .then(res => res.json())
      .then(data => {
        // For today
        myModule.currentTemperature.innerHTML = `${Math.ceil(
          data.list[0].main.temp
        )}°`;
        myModule.summary.innerHTML = `Summary: ${data.list[0].weather[0].main}`;
        myModule.humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
        myModule.wind.innerHTML = `Wind: ${data.list[0].wind.speed} m/s`;
        myModule.feelsLike.innerHTML = `Feels like: ${data.list[0].main.feels_like}`;
        const url = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        myModule.currentTemperaturePicture.setAttribute("src", url);

        // For other days
        myModule.futureTemperature.innerHTML = `${Math.ceil(
          data.list[8].main.temp
        )}°`;
        myModule.futureTemperaturePicture.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`
        );
        myModule.futureTemperature2.innerHTML = `${Math.ceil(
          data.list[16].main.temp
        )}°`;
        myModule.futureTemperaturePicture2.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`
        );
        myModule.futureTemperature3.innerHTML = `${Math.ceil(
          data.list[32].main.temp
        )}°`;
        myModule.futureTemperaturePicture3.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`
        );

        // Conversion
        const resultToday = data.list[0].main.temp * 1.8 + 32;
        const resultTomorrow = data.list[8].main.temp * 1.8 + 32;
        const resultSecond = data.list[16].main.temp * 1.8 + 32;
        const resultThird = data.list[32].main.temp * 1.8 + 32;
        myModule.temperatureButtonFahrenheit.addEventListener("click", () => {
          myModule.temperatureButtonCelsius.style.background = "#f5cf86";
          myModule.temperatureButtonFahrenheit.style.background = "#ffeac1";
          myModule.currentTemperature.innerHTML = `${Math.ceil(resultToday)}°`;
          myModule.futureTemperature.innerHTML = `${Math.ceil(
            resultTomorrow
          )}°`;
          myModule.futureTemperature2.innerHTML = `${Math.ceil(resultSecond)}°`;
          myModule.futureTemperature3.innerHTML = `${Math.ceil(resultThird)}°`;
        });

        myModule.temperatureButtonCelsius.addEventListener("click", () => {
          myModule.temperatureButtonCelsius.style.background = "#ffeac1";
          myModule.temperatureButtonFahrenheit.style.background = "#f5cf86";
          const resultToday1 = (resultToday - 32) / 1.8;
          const resultTomorrow1 = (resultTomorrow - 32) / 1.8;
          const resultSecond1 = (resultSecond - 32) / 1.8;
          const resultThird1 = (resultThird - 32) / 1.8;
          myModule.currentTemperature.innerHTML = `${Math.ceil(resultToday1)}°`;
          myModule.futureTemperature.innerHTML = `${Math.ceil(
            resultTomorrow1
          )}°`;
          myModule.futureTemperature2.innerHTML = `${Math.ceil(
            resultSecond1
          )}°`;
          myModule.futureTemperature3.innerHTML = `${Math.ceil(resultThird1)}°`;
        });

        // Background when reload page
        const baseUrl = "https://api.unsplash.com/photos/random";
        // eslint-disable-next-line no-use-before-define
        const query = `${season()},${timeOfADay()},${
          data.list[0].weather[0].main
        }`;
        const queryString = `?query=${query}`;
        const url1 =
          // eslint-disable-next-line prefer-template
          baseUrl +
          queryString +
          "&client_id=f848a54a9ccac0fd64e2118fc2b79b9c336ec5c2c7bfa9c80f3bb4d1b72bb261";

        fetch(url1)
          .then(res => res.json())
          .then(data => {
            myModule.body.style.backgroundImage = `url(${data.urls.regular})`;
            myModule.body.style.repeat = 'no-repeat';
            myModule.body.style.backgroundSize = 'cover';
          });

        // Change background by summary of Weather, times of a day and season
        myModule.backgroundImage.addEventListener("click", () => {
          const baseUrl = "https://api.unsplash.com/photos/random";
          // eslint-disable-next-line no-use-before-define
          const query = `${season()},${timeOfADay()},${
            data.list[0].weather[0].main
          }`;
          const queryString = `?query=${query}`;
          const url =
            // eslint-disable-next-line prefer-template
            baseUrl +
            queryString +
            "&client_id=f848a54a9ccac0fd64e2118fc2b79b9c336ec5c2c7bfa9c80f3bb4d1b72bb261";

          fetch(url)
            .then(res => res.json())
            .then(data => {
              myModule.body.style.backgroundImage = `url(${data.urls.regular})`;
            });
        });
      });
  });

export const season = function getSeason() {
  const time = new Date();
  const numberOfMonth = time.getMonth();
  // eslint-disable-next-line consistent-return
  function getNameOfSeason() {
    // eslint-disable-next-line eqeqeq
    if (numberOfMonth == 0 || numberOfMonth == 1 || numberOfMonth == 11) {
      return "winter";
      // eslint-disable-next-line eqeqeq
    }
    // eslint-disable-next-line eqeqeq
    if (numberOfMonth == 2 || numberOfMonth == 3 || numberOfMonth == 4) {
      console.log("spring");
      // eslint-disable-next-line eqeqeq
    } else if (numberOfMonth == 5 || numberOfMonth == 6 || numberOfMonth == 7) {
      console.log("summer");
    } else {
      console.log("autumn");
    }
  }
  return getNameOfSeason();
};

export const timeOfADay = function getTimeOfADay() {
  const time = new Date();
  const hours = time.getHours();
  function getNameTimeOfADay() {
    // eslint-disable-next-line no-bitwise
    if ((hours > 4) & (hours < 16)) {
      return "day";
      // eslint-disable-next-line no-else-return
    } else {
      return "night";
    }
  }
  return getNameTimeOfADay();
};
