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
    const randomNum = Math.floor(Math.random() * selectedArray.length);
    return randomNum;

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
    const pantsDiv = document.getElementById('pants');

    const randomShirt = getRandomShirt();
    topDiv.src = `../assets/clothes/${randomShirt.image}`;

    const randomPants = getRandomPants();
    pantsDiv.src = `../assets/clothes/${randomPants.image}`;
}


export function getRandomShirt() {
    const selectedClothing = getSelectedClothing();
    const getSelectedShirts = selectedClothing.filter((item) => {
        
        if (item.category === 'top') {
            return item.category;
        }
    });
    const randomIndex = Math.floor(Math.random() * getSelectedShirts.length);
    return getSelectedShirts[randomIndex];
}


export function getRandomPants() {
    const clothingSelected = getSelectedClothing();
    const getSelectedPants = clothingSelected.filter((item) => {

        if (item.category === 'pants') {
            return item.category;
        }
    });
    const randomIndex = Math.floor(Math.random() * getSelectedPants.length);
    return getSelectedPants[randomIndex];
}