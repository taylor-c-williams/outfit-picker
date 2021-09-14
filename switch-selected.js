import { getClothing, setClothing } from './utils.js';

export function switchSelected(id) {
    const clothing = getClothing();
    const singleClothing = clothing.find((item) => item.id === id);
    console.log(singleClothing);
    // singleClothing.selected = !singleClothing.selected;
    if (singleClothing.selected === true) {
        singleClothing.selected = false;
    } else {
        singleClothing.selected = true;
    }
    setClothing(clothing);
}