'use strict';

import {API_KEY, select, listen, create, sleep} from "./util.js";

const mapContainer = select('.map-container');

mapboxgl.accessToken = API_KEY;

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
  container: 'map-container',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
  zoom: 3
});

function setLocationMarker() {
  for (const feature of geoJSON.features) {
    const el = create('div');
    el.className = 'marker';
  
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }
}

setLocationMarker();





