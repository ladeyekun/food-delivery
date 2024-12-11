'use strict';

export const API_KEY = 'pk.eyJ1IjoiZWhyZW4tc3RyaWZsaW5nIiwiYSI6ImNscTN3dmZoYjAxMG4ydm14ZnNjaWtqOW0ifQ.PtNGzOxZJvB9XIJGME7k3Q';

export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

export function create(element) {
  return document.createElement(element);
}

export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}