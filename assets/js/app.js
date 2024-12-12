'use strict';

import {select, listen, create} from "./util.js";

const MAPBOX_TOKEN_KEY = 'pk.eyJ1IjoiZWhyZW4tc3RyaWZsaW5nIiwiYSI6ImNscTN3dmZoYjAxMG4ydm14ZnNjaWtqOW0ifQ.PtNGzOxZJvB9XIJGME7k3Q';
const mapContainer = select('.map-container');
const locationBtn = select('.location');
const options = { enableHighAccuracy: true };


const map = new mapboxgl.Map({
  accessToken: MAPBOX_TOKEN_KEY,
  container: mapContainer,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [3.336510,6.598233],
  zoom: 3
});


function loadCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      setLocationMarker, errorHandler, options
    );
  } else {
   mapContainer.innerHTML = 'Device location cannot be retrieved';
  }
}

function setLocationMarker(position) {
  let { latitude, longitude } = position.coords;

  const el = create('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
  .setLngLat([longitude, latitude])
  .addTo(map);

  setTimeout(() => {
    map.flyTo({center: [longitude, latitude], zoom: 15, speed: 0.3});
  }, 1000);
}

function errorHandler() {
  mapContainer.innerHTML = '<p>Unable to get your device location</p>';
}

listen('load', window, () => {
  loadCurrentLocation();
});






