// import functions and grab DOM elements
import data from './data.js';
import { setClothing } from './utils.js';
import { populateShirts } from './populate-clothes.js';

populateShirts();

const allData = data;

setClothing(allData);

// for (let item of allData) { 
//     console.log(item.image);
// }


// console.log(allData);

// const clothinhgSelectionEL = document.getElementById('clothing-selection');
// const clothingLayoutEL = document.getElementById('clothing-layout');
// const shirtsChoicesEL = document.getElementById('shirts-choices');
// const pantsChoicesEL = document.getElementById('pants-choices');
// const choicesSubmitbuttonEl = document.getElementById('choices-submit');















// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
