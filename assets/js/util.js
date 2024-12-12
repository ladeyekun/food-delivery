'use strict';

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