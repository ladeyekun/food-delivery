'use strict';

import {select, listen, create, sleep} from "./util.js";

const MAPBOX_TOKEN_KEY = 'pk.eyJ1IjoiZWhyZW4tc3RyaWZsaW5nIiwiYSI6ImNscTN3dmZoYjAxMG4ydm14ZnNjaWtqOW0ifQ.PtNGzOxZJvB9XIJGME7k3Q';
const mapContainer = select('.map-container');
const locationBtn = select('.location');
const options = { enableHighAccuracy: true };

/*
const geoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington DC.'
      }
    }
  ]
};
*/
const map = new mapboxgl.Map({
  accessToken: MAPBOX_TOKEN_KEY,
  container: mapContainer,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [3.336510,6.598233],
  zoom: 3
});
/*
function setLocationMarker() {
  for (const feature of geoJSON.features) {
    const el = create('div');
    el.className = 'marker';
  
    //new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    new mapboxgl.Marker(el).setLngLat(getDe).addTo(map);
  }
}
  */

function loadCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      setLocationMarker, errorHandler, options
    );
  } else {
   // display error that geolocation is not supported
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

}

listen('load', window, () => {
  loadCurrentLocation();
});

listen('click', locationBtn, () => {

});





