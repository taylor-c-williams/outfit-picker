import { switchSelected } from './switch-selected.js';

// itemsArray needs to be coming from local storage!
export function renderClothingItems(itemsArray, ulToPopulate) {
    for (let item of itemsArray) {

// create a li to hold the button image and button
        const li = document.createElement('li');
        
// create img and checkbox elements
        const img = document.createElement('img');
        const switchCheck = document.createElement('input');
        const label = document.createElement('label');

// for the img grab image
        img.src = `./assets/clothes/${item.image}`;
        switchCheck.type = 'checkbox';
        switchCheck.style.display = 'none';
        if (item.selected) switchCheck.checked = true;

// add event listener with switch-select function to checkbox
        // this is really awesome -- an event listener that just calls a function with a parameter. nice work!
        // if you wanted to, you could make switchSelected return a function, then you don't have to do the anonymous callback here
        img.addEventListener('click', () => switchSelected(item.id));
        
// append image & checkbox to label
        label.append(switchCheck, img);
        li.append(label);
        ulToPopulate.append(li);
    }
}