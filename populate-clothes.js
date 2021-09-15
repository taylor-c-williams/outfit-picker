import { renderClothingItems } from './create-elements.js';
import { getClothing } from './utils.js';


//grab ul element for tops
const topUl = document.getElementById('tops-choices');

export function populateTops() {
    const clothingArray = getClothing();
    // grab all tops from local storage
    const tops = clothingArray.filter((oneClothing) => {
        if (oneClothing.category === 'top') {
            return oneClothing.category;
        }
    });
    renderClothingItems(tops, topUl);
}

//grab ul element for pants
const pantsUl = document.getElementById('pants-choices');

export function populatePants() {
    const clothingArray = getClothing();
    // grab all pants from local storage
    const pants = clothingArray.filter((oneClothing) => {
        if (oneClothing.category === 'pants') {
            return oneClothing.category;
        }
    });
    renderClothingItems(pants, pantsUl);
}
