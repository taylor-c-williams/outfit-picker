import { populateTops, populatePants } from './populate-clothes.js';
import { checkSelectedTops, checkSelectedPants } from './check-number-selected.js';

populateTops();
populatePants();

const toDressingRoomBtn = document.getElementById('choices-submit');

toDressingRoomBtn.addEventListener('click', () => {

    const numberOfTops = checkSelectedTops();
    const numberOfPants = checkSelectedPants();

    if (numberOfTops < 3) {
        alert('As if you can look fly without picking more tops!');
    } else if (numberOfPants < 3) {
        alert('You picked enough skirts... not!');
    } else window.location = './results';
}
);
