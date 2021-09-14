import { switchSelected } from './switch-selected.js';


export function renderClothingItems(itemsArray, ulToPopulate) {

    for (let item of itemsArray) {

// create a li to hold the button image and button
        const li = document.createElement('li');
// create img and checkbox elements
        const img = document.createElement('img');
        const switchCheck = document.createElement('input');
        const label = document.createElement('label');
// for the img grab image

        img.src = `./assets/${item.image}`;
        switchCheck.type = 'checkbox';
        switchCheck.style.display = 'none';

// add event listener with switch-select function to checkbox
        img.addEventListener('click', () => switchSelected(item.id));
// append image & checkbox to label
        label.append(switchCheck, img);
        li.append(label);
        ulToPopulate.append(li);
    }
}