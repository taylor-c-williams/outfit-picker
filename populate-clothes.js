import { renderClothingItem } from './create-elements.js';
import { getClothing } from './utils.js';


//grab ul element for shirts
const shirtUl = document.getElementById('shirts-choices');


export function populateShirts() {
    const clothingArray = getClothing();
// grab all shirts from local storage
    const shirts = clothingArray.filter((oneClothing) => {
        if (oneClothing.category === 'shirt'){
            return oneClothing.category;
        }
    });
    renderClothingItem(shirts);
    shirtUl.append(shirts);
}


