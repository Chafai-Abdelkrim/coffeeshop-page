import { Menu } from "./menu";

const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = ' Welcome ';
    return title;
}

const createDescription = () => {
    const para = document.createElement('p');
    const lineBreak = document.createElement('br');
    para.classList.add('main-para');
    para.append('Welcome to the O\'brown Coffee shop', lineBreak, 'where it is adorable, classy and calm, at O\'brown we offer a variety of coffee, jus, and smoothies as well as multiple plates of different kind of foods from the sweet to the salty. we make sure we prepare our food and drinks in the cleanest environment so you can enjoy your O\'brown coffee experience and stay healthy.');

    return para;
}

const createBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('main-btn');
    btn.append('Menu');
    btn.addEventListener('click', () => {
        Menu();
    });
    return btn;
}

const Home = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-content-container');
    const title = createTitle();
    const para = createDescription();
    const btn = createBtn();

    mainContainer.append(para);
    main.append(title, mainContainer, btn);
}

export { Home };