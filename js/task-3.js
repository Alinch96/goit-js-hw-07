'use strict';

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
    
    const trimedInputValue = inputEl.value.trim();
    //Якщо користувач ввів лише пробіли, то trimedInputValue  буде містити пустий рядок, який в умові if буде неявно приведений до false, якщо пробіли і хоча б один символ - до true
    if (trimedInputValue) spanEl.textContent = trimedInputValue;
    else spanEl.textContent = 'Anonymous';
    //Тут можна було б обмежитися лише блоком if (без else), але у випадку, якщо користувач ввів якісь символи, а потім все видалив, то в spanEl.textContent залишиться останнє значення trimedInputValue, яке приводилось до true замість Anonymous;
});