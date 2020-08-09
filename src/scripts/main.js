'use strict';

const header = document.querySelector('.header');
const widthTextElement = document.querySelector('.width');
const heightTextElement = document.querySelector('.height');

setTimeout(() => {
  widthTextElement.innerText = `Width = ${document.body.offsetWidth}px`;
  heightTextElement.innerText = `Height = ${document.body.offsetHeight}px`;
}, 500);
