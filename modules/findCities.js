/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-lonely-if */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable eqeqeq */
import * as myModule from "./layout.js";
import * as main from "../src/app";

myModule.mapContainer.addEventListener("mouseout", changeContent);

window.addEventListener("keydown", event => {
  if (event.key == "Enter") {
    changeContent();
  }
});

// eslint-disable-next-line import/prefer-default-export
export function changeContent() {
  const search = document.querySelector(".mapboxgl-ctrl-geocoder--input");
  console.log(search.value);
  if (search.value !== "" || null || undefined) {
    const inputText = search.value;
    const coords = `https://api.opencagedata.com/geocode/v1/json?q=${inputText}&key=72d62933e228412281651b0f767b819f`;
    fetch(coords)
      .then(res => res.json())
      .then(data => {
        myModule.latitude.innerHTML = `Latitude: ${data.results[0].geometry.lat}`;
        myModule.longitude.innerHTML = `Longitude: ${data.results[0].geometry.lng}`;
        const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}&lang=ua&units=metric&APPID=3bef9beac26aff61a3f3cd977a9918b3`;
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
            myModule.feelsLike.innerHTML = `Feels like: ${data.list[0].main.temp_max}`;
            const url = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            myModule.currentTemperaturePicture.setAttribute("src", url);

            // Country and city
            myModule.currentPlace.innerHTML =
              data.city.country + "," + " " + data.city.name;

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
            myModule.temperatureButtonFahrenheit.addEventListener(
              "click",
              () => {
                myModule.currentTemperature.innerHTML = `${Math.ceil(
                  resultToday
                )}°`;
                myModule.futureTemperature.innerHTML = `${Math.ceil(
                  resultTomorrow
                )}°`;
                myModule.futureTemperature2.innerHTML = `${Math.ceil(
                  resultSecond
                )}°`;
                myModule.futureTemperature3.innerHTML = `${Math.ceil(
                  resultThird
                )}°`;
              }
            );

            myModule.temperatureButtonCelsius.addEventListener("click", () => {
              const resultToday1 = (resultToday - 32) / 1.8;
              const resultTomorrow1 = (resultTomorrow - 32) / 1.8;
              const resultSecond1 = (resultSecond - 32) / 1.8;
              const resultThird1 = (resultThird - 32) / 1.8;
              myModule.currentTemperature.innerHTML = `${Math.ceil(
                resultToday1
              )}°`;
              myModule.futureTemperature.innerHTML = `${Math.ceil(
                resultTomorrow1
              )}°`;
              myModule.futureTemperature2.innerHTML = `${Math.ceil(
                resultSecond1
              )}°`;
              myModule.futureTemperature3.innerHTML = `${Math.ceil(
                resultThird1
              )}°`;
            });

            // Change background by summary of Weather, times of a day and season
            myModule.backgroundImage.addEventListener("click", () => {
              const baseUrl = "https://api.unsplash.com/photos/random";
              const query = `${main.season()},${main.timeOfADay()},${
                data.list[0].weather[0].main
              }`;
              const queryString = `?query=${query}`;
              const url =
                baseUrl +
                queryString +
                "&client_id=f848a54a9ccac0fd64e2118fc2b79b9c336ec5c2c7bfa9c80f3bb4d1b72bb261";

              fetch(url)
                .then(res => res.json())
                .then(data => {
                  myModule.body.style.backgroundImage = `url(${data.urls.small})`;
                });
            });

            // Date
            function showCurrentDate() {
              const time = new Date();
              const options = {
                weekday: "short",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false
              };
              const locales = ["en-Us", "ru", "be"];
              const timeStr = time.toLocaleTimeString(locales, options);
              const newStr = timeStr.substr(0, timeStr.length - 6);
              const timeMin = time.getMinutes();
              const timeHours = time.getHours();
              let dayToday = time.getDate();
              let timeHoursZero = timeHours - 3;
              const responseTimeZone = data.city.timezone;
              function changeTimeZone() {
                const result = Math.floor(responseTimeZone / 3600);
                if (result > 0) {
                  timeHoursZero += result;

                  if (timeHoursZero >= 24) {
                    dayToday += 1;
                    const newHours = timeHoursZero - 24;
                    const anotherTime = 0 + newHours;
                    const nextDayStr = timeStr.substr(0, timeStr.length - 9);
                    if (newHours <= 9) {
                      myModule.currentTime.innerHTML = `${nextDayStr} ${dayToday}, 0${anotherTime}:${timeMin}`;
                    } else {
                      myModule.currentTime.innerHTML =
                        nextDayStr +
                        dayToday +
                        ", " +
                        anotherTime +
                        ":" +
                        timeMin;
                    }
                  } else {
                    if (timeHoursZero <= 9) {
                      myModule.currentTime.innerHTML =
                        newStr + " 0" + timeHoursZero + ":" + timeMin;
                    } else {
                      myModule.currentTime.innerHTML =
                        newStr + " " + timeHoursZero + ":" + timeMin;
                    }
                  }
                } else {
                  timeHoursZero += result;

                  if (timeHoursZero <= 0) {
                    dayToday -= 1;
                    const anotherTime = 24 + timeHoursZero;
                    const previousDayStr = timeStr.substr(
                      0,
                      timeStr.length - 8
                    );
                    if (timeHoursZero <= 9) {
                      myModule.currentTime.innerHTML =
                        previousDayStr +
                        dayToday +
                        ", 0" +
                        anotherTime +
                        ":" +
                        timeMin;
                    } else {
                      myModule.currentTime.innerHTML =
                        previousDayStr +
                        dayToday +
                        ", " +
                        anotherTime +
                        ":" +
                        timeMin;
                    }
                  } else {
                    if (timeHoursZero <= 9) {
                      myModule.currentTime.innerHTML =
                        newStr + " 0" + timeHoursZero + ":" + timeMin;
                    } else {
                      myModule.currentTime.innerHTML =
                        newStr + " " + timeHoursZero + ":" + timeMin;
                    }
                  }
                }
              }
              changeTimeZone();
            }
            showCurrentDate();
          });
      });
  }
}

// myModule.voiceContainer.addEventListener("mouseout", changeContent);
