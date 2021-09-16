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







// PULLING WARM AND COLD APPROPRIATE CLOTHING

// export function getWarmClothes() {
//     const warmClothes = getSelectedClothing();
//     const warmSelection = warmClothes.filter((item) => {
//         if (item.weather === 'warm') {
//             return item.weather;
//         }
//     });
//     return warmSelection;
// }


// export function getColdClothes() {
//     const coldClothes = getSelectedClothing();
//     const coldSelection = coldClothes.filter((item) => {
//         if (item.weather === 'cold') {
//             return item.weather;
//         }
//     });
//     return coldSelection;
// }

// RENDERING COLD TOPS & BOTTOMS
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




        // const pullColdTops = coldTops.filter((item) => {
            //     if (item.weather === 'cold') {
            //         return item.weather;
            //     }
            //     });
            // return pullColdTops;


// export function renderColdTops() {
//     const coldTops = getColdClothes();
//     const pullColdTops = coldTops.filter((item) => {
//         if (item.category === 'top')
//             return item.category;
//     });
//     const randomIndex = Math.floor(Math.random() * pullColdTops.length);
//     return pullColdTops[randomIndex];
// }

// export function renderColdBottoms() {
//     const coldPants = getColdClothes();
//     const pullColdPants = coldPants.filter((item) => {
//         if (item.category === 'pants') {
//             return item.category;
//         }
//     });
//     const randomIndex = Math.floor(Math.random() * pullColdPants.length);
//     return pullColdPants[randomIndex];
// }

// // RENDERING WARM TOPS & BOTTOMS

// export function renderWarmTops() {
//     const warmTops = getWarmClothes();
//     const pullWarmTops = warmTops.filter((item) => {
//         if (item.category === 'top') {
//             return item.category;
//         }
//     });
//     const randomIndex = Math.floor(Math.random() * pullWarmTops.length);
//     return pullWarmTops[randomIndex];
// }

// export function renderWarmBottoms() {
//     const warmBottoms = getWarmClothes();
//     const pullWarmBottoms = warmBottoms.filter((item) => {
//         if (item.category === 'pants') {
//             return item.category;
//         }
//     });
//     const randomIndex = Math.floor(Math.random() * pullWarmBottoms.length);
//     return pullWarmBottoms[randomIndex];
// }

// export function warmClothes() {
//     const topDiv = document.getElementById('top');
//     const pantsDiv = document.getElementById('pants');

//     const warmTops = renderWarmTops();
//     topDiv.src = `../assets/clothes/${warmTops.image}`;

//     const warmPants = renderWarmBottoms();
//     pantsDiv.src = `../assets/clothes/${warmPants.image}`;
// }

// export function coldClothes() {
//     const topDiv = document.getElementById('top');
//     const pantsDiv = document.getElementById('pants');

//     const coldTops = renderColdTops();
//     topDiv.src = `../assets/clothes/${coldTops.image}`;

//     const coldPants = renderColdBottoms();
//     pantsDiv.src = `../assets/clothes/${coldPants.image}`;
//
