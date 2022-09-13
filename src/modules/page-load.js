const pageContent = document.querySelector('#content');

//Creating page header
const Header = () => {
    //create the header element
    const header = document.createElement('header');
    header.classList.add('header');

    //creates the H1 element
    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.innerText = "O'brown Coffee";

    //Creating a nav element
    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    //Creating a ul element
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');

    //Creating the li elements inside the ul
    const home = createListItem('Home');
    const menu = createListItem('Menu');
    const contact = createListItem('Contact');

    //adding elements to their parent elements
    ul.append(home, menu, contact);
    nav.append(ul);
    
    header.append(title);
    header.append(nav);

    pageContent.append(header);
}

//Creating page main area
const Main = () => {
    const main = document.createElement('main');
    main.classList.add('main');

    pageContent.append(main);
}

//Creating page footer
const Footer = () => {
    //Creates footer element
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    //Creates the footer "p" element
    const footerPara = document.createElement('p');
    footerPara.classList.add('footer-para');

    //Creates the footer link element
    const footerLink = createLink('Abdelkrim Chafai', 'footer-link', 'https://github.com/Chafai-Abdelkrim');

    //adding elements to thier parent elements
    footerPara.append('Made by ', footerLink);
    footer.append(footerPara);
    pageContent.append(footer);
}

//Funtion that creats a list item
const createListItem = (itemName) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-list-item'); 

    const listItemLink = createLink(itemName, 'nav-list-link', '#');

    listItem.append(listItemLink);
    return listItem;
}

//Function that creats links
const createLink = (linkText, className, hrefValue) => {
    const link = document.createElement('a');
    link.classList.add(className);
    link.setAttribute('href', hrefValue);
    link.innerText = linkText;

    return link;
}

const pageLoad = () => {
    Header();
    Main();
    Footer();
}

export { pageLoad };