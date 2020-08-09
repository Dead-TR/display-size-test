'use strict';

const header = document.querySelector('.header');
const widthTextElement = document.querySelector('.width');
const heightTextElement = document.querySelector('.height');
widthTextElement.innerText = `Width = ${header.offsetWidth}px`;
heightTextElement.innerText = `Height = ${header.offsetHeight}px`;
