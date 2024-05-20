'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const inputEl = document.querySelector('input') 
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', () => {
  destroyBoxes(); //для того, щоб нова колекція рендерилась поверх старої
 
  const num = inputEl.value;
  if (num % 1 === 0 && num >= 1 && num <= 100) {
    boxesEl.append(...createBoxes(num, { width: 30, height: 30, }));
  }
  inputEl.value = '';
});


destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount, sizeObj) {
  const divElements = [];
  for (let i = 0; i < amount; i++){
    const divEl = document.createElement('div');
    divEl.style.width = `${sizeObj.width}px`;
    divEl.style.height = `${sizeObj.height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divElements.push(divEl);
    sizeObj.width += 10;
    sizeObj.height += 10;
  }
  return divElements;
}

 function destroyBoxes() {
    boxes.innerHTML = '';
  }
