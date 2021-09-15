import { getRandomPants, getRandomShirt, renderItems } from '../utils.js';

renderItems();
// getRandomIndex();
// getRandomShirt();
// const randomShirt = getRandomShirt();
// const getRandomNum = getRandomIndex();
// console.log(randomShirt, getRandomNum);
const randomizeButton = document.getElementById('randomize');



randomizeButton.addEventListener('click', () => {
    const topDiv = document.getElementById('top');
    const pantsDiv = document.getElementById('pants');

    const randomShirt = getRandomShirt();
    topDiv.src = `../assets/clothes/${randomShirt.image}`;


    const randomPants = getRandomPants();
    pantsDiv.src = `../assets/clothes/${randomPants.image}`;

});
