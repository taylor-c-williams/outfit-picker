import data from './data.js';



export function getClothing() {
    const pullClothing = localStorage.getItem(data);
    if (!pullClothing) {
        return data;
    }
    const parseUser = JSON.parse(pullClothing);

    return parseUser;
}


export function setClothing() {
    const stringUser = JSON.stringify(data);
    localStorage.setItem(data, stringUser);
}

export function getSelectedClothing() {
    const clothing = getClothing();
    console.log(clothing);
    return clothing.filter((item) => item.selected);
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
    const shirtDiv = document.getElementById('shirt');
    const pantsDiv = document.getElementById('pants');
    const shoeDiv = document.getElementById('shoes');
    const randomizeButton = document.getElementById('randomize');


    const clothingArray = getSelectedClothing();
    console.log(clothingArray);
    if (clothingArray.length) {

        shirtDiv.src = clothingArray[0].image;
        pantsDiv.src = clothingArray[1].image;
        shoeDiv.src = clothingArray[2].image;
    }

    randomizeButton.addEventListener('click', () => {

        const selectedClothing = getSelectedClothing();
        getRandomClothing(selectedClothing);





    });



}
