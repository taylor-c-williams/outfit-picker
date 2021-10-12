import data from './data.js';

const CLOSET = 'CLOSET';

export function setClothing(closet) {
    const stringCloset = JSON.stringify(closet);
    localStorage.setItem(CLOSET, stringCloset);
}

export function getClothing() {
    const pullClothing = localStorage.getItem(CLOSET);
    if (!pullClothing) {
        return data;
    }
    const parseClothing = JSON.parse(pullClothing);
    return parseClothing;
}

export function getSelectedClothing() {
    const clothing = getClothing();
    const selectedClothing = clothing.filter((item) => item.selected);
    return selectedClothing;
}

export function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// could abstract this down into a function that filters by multiple categories
function getRandomItemByTypes(type, weatherType) {
    const selectedClothing = getSelectedClothing();
    const filteredItems = selectedClothing.filter((item) => 
    // if a weather is supplied, filter by type AND weather
        weatherType 
    // otherwise, just filter by type, since no weather is supplied
            ? item.category === type && item.weather === weatherType 
            : item.category === type
    );

    return filteredItems[getRandomIndex(filteredItems)];

}

export function getRandomShirt() {
    return getRandomItemByTypes('shirt');
}

export function getRandomPants() {
    return getRandomItemByTypes('pants');
}

export function getRandomColdTops() {
    return getRandomItemByTypes('top', 'cold');
}

export function getRandomColdBottoms() {
    return getRandomItemByTypes('bottoms', 'cold');
}

export function getRandomWarmTops() {
    return getRandomItemByTypes('top', 'warm');
}

export function getRandomWarmBottoms() {
    return getRandomItemByTypes('bottoms', 'warm');
}

export function renderItems() {
    const topDiv = document.getElementById('top');
    const pantsDiv = document.getElementById('pants');

    const randomShirt = getRandomShirt();
    topDiv.src = `../assets/clothes/${randomShirt.image}`;

    const randomPants = getRandomPants();
    pantsDiv.src = `../assets/clothes/${randomPants.image}`;
}

export function warmClothes() {
    const topImg = document.getElementById('top');
    const pantsImg = document.getElementById('pants');

    const warmTops = getRandomWarmTops();
    topImg.src = `../assets/clothes/${warmTops.image}`;

    const warmPants = getRandomWarmBottoms();
    pantsImg.src = `../assets/clothes/${warmPants.image}`;
}

export function coldClothes() {
    const topImg = document.getElementById('top');
    const bottomImg = document.getElementById('pants');

    const coldTops = getRandomColdTops();
    topImg.src = `../assets/clothes/${coldTops.image}`;
    const coldBottoms = getRandomColdBottoms();
    bottomImg.src = `../assets/clothes/${coldBottoms.image}`;
}