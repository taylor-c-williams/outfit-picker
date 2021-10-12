import { renderClothingItems } from './create-elements.js';
import { getClothing } from './utils.js';


//grab ul element for tops
const topUl = document.getElementById('tops-choices');

// could be refactored into an abstracted function to reduce repitition
function populateClothing(type, ul) {
    const clothingArray = getClothing();
    // grab all pants from local storage
    const items = clothingArray.filter(({ category }) => category === type);
    renderClothingItems(items, ul);

}

export function populateTops() {
    populateClothing('tops', topUl);
}

//grab ul element for pants
const pantsUl = document.getElementById('pants-choices');

export function populatePants() {
    populateClothing('pants', pantsUl);
}