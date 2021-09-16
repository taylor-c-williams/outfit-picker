import { switchSelected } from '../switch-selected.js';
import { setClothing, getClothing } from '../utils.js';
const test = QUnit.test;

test('switchSelected should toggle a selected true and false', (expect) => {

    const taylorsCloset = [
        {
            name:'top-1',
            id: 5,
            image: 'tops01.jpg',
            selected: false,
            category: 'top',
        },
        {
            name:'top-2',
            id: 6,
            image: 'tops02.jpg',
            selected: false,
            category: 'top',
        },
    ];

    setClothing(taylorsCloset);

    switchSelected(5); 

    const newCloset = getClothing();

    const expected = true;
    const actual = newCloset[0].selected;

    expect.equal(actual, expected);
});
