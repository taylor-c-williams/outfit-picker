// import functions and grab DOM elements
import data from './data.js';
import { setClothing } from './utils.js';
import { populateShirts, populatePants } from './populate-clothes.js';

populateShirts();
populatePants();

const allData = data;
setClothing(allData);















// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
