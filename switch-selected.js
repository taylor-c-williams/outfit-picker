export function switchSelected(id) {
    const clothing = getClothing();
    for (let singleItem of clothing) {
        if (id === singleItem.id && singleItem.selected === true) {
            singleItem.selected = false;
        }
        else if (id === singleItem.id && singleItem.selected === false) {
            singleItem.selected = true;
        }
        setClothing(clothing);
        // renderClothing?
    }
}