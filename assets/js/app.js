'use strict';

import {select, listen, create, sleep} from "./util.js";

const API_KEY = 'pk.eyJ1IjoiZWhyZW4tc3RyaWZsaW5nIiwiYSI6ImNscTN3dmZoYjAxMG4ydm14ZnNjaWtqOW0ifQ.PtNGzOxZJvB9XIJGME7k3Q';
const mapContainer = select('.map-container');
const locationBtn = select('.location');
const options = { enableHighAccuracy: true };

//mapboxgl.accessToken = API_KEY;

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

const map = new mapboxgl.Map({
  accessToken: API_KEY,
  container: mapContainer,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
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

function setLocationMarker(position) {
  let { latitude, longitude } = position.coords;

  const el = create('div');
  el.className = 'marker';

  new mapboxgl.Marker(el).setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler() {

}

listen('load', window, () => {
  //setLocationMarker();
});

listen('click', locationBtn, () => {
  if ('geolocation' in navigator) {
    const el = create('div');
    el.className = 'marker';
    
    navigator.geolocation.getCurrentPosition(
      setLocationMarker, errorHandler, options
    );
  } else {
   // display error that geolocation is not supported
  }
});





