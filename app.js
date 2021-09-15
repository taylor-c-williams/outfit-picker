import { populateTops, populatePants } from './populate-clothes.js';
import { getSelectedClothing } from './utils.js';

populateTops();
populatePants();

const allSelected = getSelectedClothing();
console.log(allSelected.length);
