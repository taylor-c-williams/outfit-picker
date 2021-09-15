import { getSelectedClothing } from './utils.js';

const selectedClothing = getSelectedClothing();
const getSelectedShirts = selectedClothing.filter((item) => {
    if (item.category === 'top') {
        return item.length;
    }
});
