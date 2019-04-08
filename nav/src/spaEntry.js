import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Nav from './Nav';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Nav,
  domElementGetter,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  // This is where single-spa will mount our application  
  const el = document.getElementById("nav");
  if (!el) throw new Error('missing element with id news')
  return el;
}