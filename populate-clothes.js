import { renderClothingItems } from './create-elements.js';
import { getClothing } from './utils.js';


//grab ul element for shirts
const shirtUl = document.getElementById('shirts-choices');
const pantsUl = document.getElementById('pants-choices');

export function populateShirts() {
    const clothingArray = getClothing();
// grab all shirts from local storage
    const shirts = clothingArray.filter((oneClothing) => {
        if (oneClothing.category === 'shirt'){
            return oneClothing.category;
        }
    });
    renderClothingItems(shirts, shirtUl);
}

export function populatePants() {
    const clothingArray = getClothing();
// grab all pants from local storage
    const pants = clothingArray.filter((oneClothing) => {
        if (oneClothing.category === 'pants'){
            return oneClothing.category;
        }
    });
    renderClothingItems(pants, pantsUl);
}

