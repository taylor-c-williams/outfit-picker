import { getSelectedClothing } from './utils.js';

function checkSelectedByType(type) {
    const selectedClothing = getSelectedClothing();
    const filteredItems = selectedClothing.filter((item) => 
        (item.category === type) 
    );

    return filteredItems.length;
}

export function checkSelectedTops() {
    return checkSelectedByType('top');
}

export function checkSelectedPants() {
    return checkSelectedByType('pants');
}