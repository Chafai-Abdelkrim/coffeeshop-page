const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('contact-title');
    title.innerText = ' Contact us ! ';

    return title;
}
//function to create contact details elements
const createContactDetails = () => {
    const Container = document.createElement('div');
    Container.classList.add('contact-details');

    const title = document.createElement('h3');
    title.classList.add('contact-details-title');
    title.innerText = 'Address';

    const address = document.createElement('p');
    address.classList.add('contact-details-text');

    const phoneEmail = document.createElement('p');
    phoneEmail.classList.add('contact-details-text');

    const lineBreak = () => document.createElement('br');

    address.append('Av. Tifaouine', lineBreak(), 'Agadir, Morocco', lineBreak(), '9FXP+J8');
    phoneEmail.append('Phone Number: 0528285288', lineBreak(), 'Email: O_brown@fakeemail.com');

    Container.append(title);
    Container.append(address);
    Container.append(phoneEmail);

    return Container;
}

//function to create the open houre schedule
const createSchedule = () => {
    const Container = document.createElement('div');
    Container.classList.add('contact-details');

    const title = document.createElement('h3');
    title.classList.add('contact-details-title');
    title.innerText = 'Schedule';

    const hours = document.createElement('p');
    hours.classList.add('contact-details-text');

    const lineBreak = () => document.createElement('br');

    hours.append('Monday: 9:00am to 10:00pm', lineBreak());
    hours.append('Tuesday: 9:00am to 10:00pm', lineBreak());
    hours.append('Wednesday: 9:00am to 10:00pm', lineBreak());
    hours.append('Thursday: 9:00am to 10:00pm', lineBreak());
    hours.append('Friday: 9:00am to 10:00pm', lineBreak());
    hours.append('Saturday: 9:00am to 10:00pm', lineBreak());
    hours.append('Sunday: 9:00am to 10:00pm');

    Container.append(title);
    Container.append(hours);

    return Container;
}

//function to create the image in the contact page
const createImage = () => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('contact-img-container');

    const img = document.createElement('img');
    img.classList.add('contact-img');
    img.setAttribute('alt', '');
    img.setAttribute('src', './images/coffeeshop_pic.jpg');
    imgContainer.append(img);

    return imgContainer;
}

//function to create the Contact page
const Contact = () => {
    const main = document.querySelector('.main');
    main.textContent = '';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const title = createTitle();
    const details = createContactDetails();
    const Schedule = createSchedule();
    const img = createImage();

    contactContainer.append(details, Schedule, img);
    main.append(title, contactContainer);
}

export { Contact }