import { coldClothes, renderItems, warmClothes } from '../utils.js';

renderItems();

const randomizeButton = document.getElementById('randomize');
const coldButton = document.getElementById('coldButton');
const warmButton = document.getElementById('warmButton');

// const coldArray = getRandomColdTops();
// console.log(coldArray);



randomizeButton.addEventListener('click', () => {
    renderItems();
});


coldButton.addEventListener('click', () => {
    coldClothes();
});


// warmButton.addEventListener('click', () => {
//     warmClothes();
// });

warmButton.addEventListener('click', () => {
    warmClothes();
});
