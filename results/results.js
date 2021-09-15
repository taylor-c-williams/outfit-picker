import { renderItems } from '../utils.js';

renderItems();
// getRandomIndex();
// getRandomShirt();
// const randomShirt = getRandomShirt();
// const getRandomNum = getRandomIndex();
// console.log(randomShirt, getRandomNum);
const randomizeButton = document.getElementById('randomize');



randomizeButton.addEventListener('click', () => {
    renderItems();


});
