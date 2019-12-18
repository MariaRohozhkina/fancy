/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as myModule from "./layout.js";

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
  myModule.currentTime.innerHTML = timeStr;

  let timeUp = time.getMinutes();

  function getCurrentTime() {
    myModule.currentTime.innerHTML = timeStr;
  }
  function updateTime() {
    timeUp += 1;
    time.setMinutes(timeUp);
    const timeStr1 = time.toLocaleTimeString(locales, options);
    myModule.currentTime.innerHTML = timeStr1;
  }
  getCurrentTime();
  setInterval(updateTime, 60000);
}

showCurrentDate();

async function getCountryAndCity() {
  const url = "https://ipinfo.io/json?token=08048a02980665";
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (e) {
    console.error(e);
  }
  if (data.country == "BY") {
    data.country = "Belarus";
  }
  // eslint-disable-next-line no-return-assign
  return (myModule.currentPlace.innerHTML =
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line no-useless-concat
    data.country + "," + " " + data.city);
}

getCountryAndCity();
