import { setClothing, getClothing } from '../utils.js';

const test = QUnit.test;


// setClothing
test('setClothing should take an array of clothing, string it and store it in local ', (expect) => {

    const taylorsCloset = [
        {
            name:'top-3',
            id: 7,
            image: 'tops03.jpg',
            selected: false,
            category: 'top',
        },
        {
            name:'top-4',
            id: 8,
            image: 'tops04.jpg',
            selected: false,
            category: 'top',
        },
    ];    

    setClothing(taylorsCloset);
    const stringyClothes = localStorage.getItem('CLOSET');
    const unstrungClothes = JSON.parse(stringyClothes);

    const expected = taylorsCloset;
    const actual = unstrungClothes;

    expect.deepEqual(actual, expected);
});


// getClothing
test('getClothing should return an array of clothing items which has been stored in local', (expect) => {
    
    const closet = [
        {
            name:'top-3',
            id: 7,
            image: 'tops03.jpg',
            selected: false,
            category: 'top',
        },
        {
            name:'top-4',
            id: 8,
            image: 'tops04.jpg',
            selected: false,
            category: 'top',
        },
    ];    

    const stringyCloset = JSON.stringify(closet);
    localStorage.setItem('CLOSET', stringyCloset);

    const actual = getClothing();

    expect.deepEqual(actual, closet);
});