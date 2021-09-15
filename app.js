import { populateTops, populatePants } from './populate-clothes.js';
import { checkSelectedTops, checkSelectedPants } from './check-number-selected.js';

populateTops();
populatePants();

const toDressingRoomBtn = document.getElementById('choices-submit');

toDressingRoomBtn.addEventListener('click', () => {

    const numberOfTops = checkSelectedTops();
    const numberOfPants = checkSelectedPants();

    if (numberOfTops < 3) {
        alert('more tops!');
    } else if (numberOfPants < 3) {
        alert('more pants!');
    } else window.location = './results';
}
);
