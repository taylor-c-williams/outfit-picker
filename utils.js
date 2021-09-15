import data from './data.js';

const CLOSET = 'CLOSET';

export function getClothing() {
    const pullClothing = localStorage.getItem(CLOSET);
    if (!pullClothing) {
        return data;
    }
    const parseClothing = JSON.parse(pullClothing);
    return parseClothing;
}


export function setClothing(closet) {
    const stringCloset = JSON.stringify(closet);
    localStorage.setItem(CLOSET, stringCloset);
}

export function getSelectedClothing() {
    const clothing = getClothing();
    const selectedClothing = clothing.filter((item) => item.selected);
    return selectedClothing;
}

export function getRandomIndex() {
    const selectedArray = getSelectedClothing();

    return Math.floor(Math.random() * selectedArray.length);

}


export function getRandomClothing() {
    let randomClothing1 = getRandomIndex();
    let randomClothing2 = getRandomIndex();
    let randomClothing3 = getRandomIndex();

    return [
        data[randomClothing1],
        data[randomClothing2],
        data[randomClothing3]

    ];
}

export function renderItems() {
    const topDiv = document.getElementById('top');
    // const pantsDiv = document.getElementById('pants');
    // const shoeDiv = document.getElementById('shoes');
    const randomizeButton = document.getElementById('randomize');


    const clothingArray = getSelectedClothing();
 

    topDiv.src = `../assets/clothes/${clothingArray[0].image}`;
    // pantsDiv.src = `../assets/clothes/${clothingArray[1].image}`;
    // shoeDiv.src = clothingArray[2].image;


    randomizeButton.addEventListener('click', () => {

        const selectedClothing = getSelectedClothing();
        getRandomClothing(selectedClothing);





    });



}
