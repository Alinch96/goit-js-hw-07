'use strict';

const itemElms = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElms.length}`);
 
//Перетворюємо NodeList в масив за допомогою [...NodeList]

[...itemElms].forEach(itemEl => {
    console.log(`Category: ${itemEl.querySelector('h2').textContent}`);
    console.log(`Elements: ${itemEl.querySelectorAll('ul li').length}`)
});