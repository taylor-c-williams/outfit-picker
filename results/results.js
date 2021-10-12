import { coldClothes, renderItems, warmClothes } from '../utils.js';

renderItems();

const randomizeButton = document.getElementById('randomize');
const coldButton = document.getElementById('coldButton');
const warmButton = document.getElementById('warmButton');

// If all your click handler does is call another function, you can just point the handler to that function
randomizeButton.addEventListener('click', renderItems);

coldButton.addEventListener('click', coldClothes);

warmButton.addEventListener('click', warmClothes);
