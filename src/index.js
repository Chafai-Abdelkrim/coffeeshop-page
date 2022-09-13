import { pageLoad } from "./modules/page-load";
import { Home } from "./modules/home";
import { Menu } from "./modules/menu";
import { Contact } from "./modules/contact";

pageLoad();
Home();

const navBtns = document.querySelectorAll(".nav-list-link");

navBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        switch (i) {
            case 0:
                Home();
                break;
            case 1:
                Menu();
                break;
            case 2:
                Contact();
                break;
        };
    });
});