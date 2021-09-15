import data from './data.js';
import { setClothing } from './utils.js';
import { populateTops, populatePants } from './populate-clothes.js';

populateTops();
populatePants();

const allData = data;
setClothing(allData);
