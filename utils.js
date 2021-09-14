const USER = 'USER';

export function getClothing() {
    const pullClothing = localStorage.getItem(USER);
    const parseUser = JSON.parse(pullClothing);

    return parseUser;
}


export function setClothing() {
    const stringUser = JSON.stringify(USER);
    localStorage.setItem(USER, stringUser);
}

export function getSelectedClothing() {
    const clothing = getClothing();
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
        itemData[randomClothing1],
        itemData[randomClothing2],
        itemData[randomClothing3]

    ];
}

export function renderItems() {
    const shirtDiv = document.getElementById('');
    const pantsDiv = document.getElementById('');
    const shoeDiv = document.getElementById('');


    const clothingArray = getRandomClothing();

    shirtDiv.src = clothingArray[0].image;
    pantsDiv.src = clothingArray[1].image;
    shoeDiv.src = clothingArray[2].image;



}
