/* eslint-disable import/no-cycle */
/* eslint-disable object-shorthand */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
import * as myModule from "./layout.js";
import * as Cities from "./findCities.js";

window.onload = function() {
  let startPos;
  let geoSuccess = function(position) {
    startPos = position;
    const array = startPos.coords.latitude.toFixed(2).split(".");
    const firstPart = `${array[0]}°`;
    const secondPart = array[1] * 60;
    const secondPartMod = `${secondPart}'`;
    const array1 = startPos.coords.longitude.toFixed(2).split(".");
    const firstPart1 = `${array1[0]}°`;
    const secondPart1 = array1[1] * 60;
    const secondPartMod1 = `${secondPart1}'`;
    myModule.latitude.innerHTML = `Latitude: ${firstPart}${secondPartMod}`;
    myModule.longitude.innerHTML = `Longitude: ${firstPart1}${secondPartMod1}`;

    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFyaWEyMjgiLCJhIjoiY2szbHZhOGs1MGoxbDNxcW9rd3Rwc2U1ciJ9.6FW9P7QIfwUcqmZwsR5PcQ";
    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [startPos.coords.longitude, startPos.coords.latitude],
      zoom: 13
    });

    // Search with voice
    // eslint-disable-next-line no-underscore-dangle
    myModule.voiceContainer.addEventListener("mousedown", () => {
      const SpeechRecognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();
      SpeechRecognition.lang = "ru-RU";
      const search = document.querySelector(".mapboxgl-ctrl-geocoder--input");
      SpeechRecognition.onresult = function(event) {
        search.value = event.results[0][0].transcript;
        const coords = `https://api.opencagedata.com/geocode/v1/json?q=${event.results[0][0].transcript}&key=72d62933e228412281651b0f767b819f`;
        fetch(coords)
          .then(res => res.json())
          .then(data => {
            // map.transform._center.lat = data.results[0].geometry.lat;
            // map.transform._center.lng = data.results[0].geometry.lng;
            // eslint-disable-next-line no-shadow
            let map = new mapboxgl.Map({
              container: "mapContainer",
              style: "mapbox://styles/mapbox/streets-v11",
              center: [
                data.results[0].geometry.lng,
                data.results[0].geometry.lat
              ],
              zoom: 13
            });
            map.addControl(
              new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
              })
            );
          });
        Cities.changeContent();
      };
      SpeechRecognition.start();
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);

  // Background
  // const url =
  //   "https://api.unsplash.com/photos/random?query=town,Moscow&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17";
  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     myModule.body.style.backgroundImage = `url(${data.urls.small})`;
  //   });
  // myModule.body.style.backgroundImage = "url(../src/assets/backgroundmain.jpg)";
};
