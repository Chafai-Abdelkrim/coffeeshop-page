import { Menu } from "./menu";

const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome ';
    return title;
}

const createDescription = () => {
    const para = document.createElement('p');
    const lineBreak = document.createElement('br');
    para.classList.add('main-para');
    para.append('lorem ipsum dolor sit amet, consectetur adipiscing', lineBreak, 'llorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ips.');
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