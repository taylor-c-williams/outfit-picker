import { getSelectedClothing } from './utils.js';

export function checkSelectedTops() {
    const selectedClothing = getSelectedClothing();
    const getSelectedShirts = selectedClothing.filter((item) => 
        (item.category === 'top') 
    );
    return getSelectedShirts.length;
}

export function checkSelectedPants() {
    const selectedClothing = getSelectedClothing();
    const getSelectedPants = selectedClothing.filter((item) => 
        (item.category === 'pants') 
    );
    return getSelectedPants.length;
}
