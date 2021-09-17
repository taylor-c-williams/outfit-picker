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

export function getRandomIndex() {
    const selectedArray = getSelectedClothing();
    const randomNum = Math.floor(Math.random() * selectedArray.length);
    return randomNum;
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

export function renderItems() {
    const topDiv = document.getElementById('top');
    const pantsDiv = document.getElementById('pants');

    const randomShirt = getRandomShirt();
    topDiv.src = `../assets/clothes/${randomShirt.image}`;

    const randomPants = getRandomPants();
    pantsDiv.src = `../assets/clothes/${randomPants.image}`;
}

export function getRandomColdTops() {
    const selectedClothing = getSelectedClothing();
    const selectedColdShirts = selectedClothing.filter((item) => {
        if (item.category === 'top' && item.weather === 'cold') {

            return item;
        }
    });
    const randomIndex = Math.floor(Math.random() * selectedColdShirts.length);
    return selectedColdShirts[randomIndex];
}

export function getRandomColdBottoms() {
    const selectedClothing = getSelectedClothing();
    const selectedColdBottoms = selectedClothing.filter((item) => {
        if (item.category === 'pants' && item.weather === 'cold') {

            return item;
        }
    });
    const randomIndex = Math.floor(Math.random() * selectedColdBottoms.length);
    return selectedColdBottoms[randomIndex];
}

export function getRandomWarmTops() {
    const selectedClothing = getSelectedClothing();
    const selectedWarmShirts = selectedClothing.filter((item) => {
        if (item.category === 'top' && item.weather === 'warm') {

            return item;
        }
    });
    const randomIndex = Math.floor(Math.random() * selectedWarmShirts.length);
    return selectedWarmShirts[randomIndex];
}

export function getRandomWarmBottoms() {
    const selectedWarmPants = getSelectedClothing();
    const selectedWarmBottoms = selectedWarmPants.filter((item) => {
        if (item.category === 'pants' && item.weather === 'warm') {

            return item;
        }

    });
    const randomIndex = Math.floor(Math.random() * selectedWarmBottoms.length);
    return selectedWarmBottoms[randomIndex];
}

export function warmClothes() {
    const topImg = document.getElementById('top');
    const pantsImg = document.getElementById('pants');

    const warmTops = getRandomWarmTops();
    topImg.src = `../assets/clothes/${warmTops.image}`;

    const warmPants = getRandomWarmBottoms();
    console.log(warmPants);
    pantsImg.src = `../assets/clothes/${warmPants.image}`;
}

export function coldClothes() {
    const topImg = document.getElementById('top');
    const bottomImg = document.getElementById('pants');
    console.log(topImg);

    const coldTops = getRandomColdTops();
    console.log(coldTops);
    topImg.src = `../assets/clothes/${coldTops.image}`;
    const coldBottoms = getRandomColdBottoms();
    bottomImg.src = `../assets/clothes/${coldBottoms.image}`;
}
