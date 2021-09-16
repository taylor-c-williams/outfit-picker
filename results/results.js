import { renderItems } from '../utils.js';


renderItems();

const randomizeButton = document.getElementById('randomize');

randomizeButton.addEventListener('click', () => {
    renderItems();
});
