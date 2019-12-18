/* eslint-disable import/extensions */
import * as myModule from "./layout.js";

function showFutureDate() {
  const time = new Date();
  const optionsForWeek = {
    weekday: "long",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };
  const locales = ["en-Us", "ru", "be"];
  // Tomorrow
  const tomorrow = new Date(time.getTime() + 24 * 60 * 60 * 1000);
  const tomorrowStr = tomorrow.toLocaleTimeString(locales, optionsForWeek);
  const newTomorrowStr = tomorrowStr.substring(0, tomorrowStr.length - 7);
  myModule.nameOfTheFirstDay.innerHTML += newTomorrowStr;
  // The day after tomorrow
  const secondDay = new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000);
  const secondDayStr = secondDay.toLocaleTimeString(locales, optionsForWeek);
  const newSecondDayStr = secondDayStr.substring(0, secondDayStr.length - 7);
  myModule.nameOfTheSecondDay.innerHTML += newSecondDayStr;
  // The third day
  const thirdDay = new Date(secondDay.getTime() + 24 * 60 * 60 * 1000);
  const thirdDayStr = thirdDay.toLocaleTimeString(locales, optionsForWeek);
  const newThirdDayStr = thirdDayStr.substring(0, thirdDayStr.length - 7);
  myModule.nameOfTheThirdDay.innerHTML += newThirdDayStr;
}

showFutureDate();
