'use strict';

import {select, listen} from "./util.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZWhyZW4tc3RyaWZsaW5nIiwiYSI6ImNscTN3dmZoYjAxMG4ydm14ZnNjaWtqOW0ifQ.PtNGzOxZJvB9XIJGME7k3Q';
const map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
  zoom: 3
});