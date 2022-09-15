const menuItems = [
    ['Croissant', '3 different kinds of croissant with yogurt, coffee and orange', '$2.20', './images/croissant.jpg'],
    ['Pancakes', 'Chocolate pancakes with some fruits', '$3.50', './images/pancakes.jpg'],
    ['Waffles', 'Chocolate Waffles', '$1.70', './images/waffles.jpg'],
    ['Beldi breakfast', 'Traditional Moroccan breakfast with mint thé and hrira', '$3.00', './images/beldi.jpg'],
    ['Eggs', 'Eggs with mint thé and hrira', '$2.50', './images/eggs.jpg'],
    ['Salad', 'A green salad', '$2.00', './images/vegetables.jpg'],
    ['Thé', 'Traditional Moroccan Thé', '$0.90', './images/thé.jpg'],
    ['Jus', 'We offer all kinds of juses', '$1.50', './images/jus.jpg'],
    ['Smoothie', 'We offer all kinds of smoothies', '$2.50', './images/smoothie.jpg']
];

const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Menu ';
    return title;
}

const createMenuContainer = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    return menuContainer;
}

//function that creates an image item
const createImage = (imagePath) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('menu-img-container');

    const img = document.createElement('img');
    img.classList.add('menu-img');
    img.setAttribute('alt', '');
    img.setAttribute('src', imagePath);
    imgContainer.append(img);

    return imgContainer;
}

//creates a menu Item
const createItem = (itemTitle, itemDescription, itemPrice, itemImg) => {

    const container = document.createElement('div');
    container.classList.add('menu-item-container');

    const title = document.createElement('h3');
    title.classList.add('menu-item-title');

    const description = document.createElement('p');
    description.classList.add('menu-item-text');

    const price = document.createElement('p');
    price.classList.add('menu-item-price');

    const img = createImage(itemImg);

    title.innerText = itemTitle;
    description.innerText = itemDescription;
    price.innerText = itemPrice;

    container.append(img);
    container.append(title);
    container.append(description);
    container.append(price);

    return container;
}

const Menu = () => {
    const main = document.querySelector('.main');
    main.textContent = '';

    const title = createTitle();
    const menu = createMenuContainer();

    // Loops through the array and appends each item to the menu Container
    menuItems.forEach((item) => {
        const currentItem = createItem(item[0], item[1], item[2], item[3]);
        menu.append(currentItem);
    });

    main.append(title);
    main.append(menu);
}

export { Menu };