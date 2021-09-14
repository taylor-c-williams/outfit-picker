import { switchSelected } from './switch-selected.js';


export function renderClothingItem(item) {
// create a li to hold the button image and button
    const li = document.createElement('li');
// create img and checkbox elements
    const img = document.createElement('img');
    const switchCheck = document.createElement('input');
    const label = document.createElement('label');
// for the img grab image

    img.src = item.img;
    switchCheck.type = 'checkbox';
    switchCheck.style.display = 'none';

    label.addEventListener('click', () => switchSelected(item.id, item.category));
// append image & checkbox to label
    label.append(switchCheck, img);
    li.append(label);
// add event listener with switch-select function to checkbox

}