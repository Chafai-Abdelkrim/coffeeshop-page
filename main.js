(()=>{"use strict";const e=document.querySelector("#content"),t=e=>{const t=document.createElement("li");t.classList.add("nav-list-item");const a=n(e,"nav-list-link","#");return t.append(a),t},n=(e,t,n)=>{const a=document.createElement("a");return a.classList.add(t),a.setAttribute("href",n),a.innerText=e,a},a=[["Croissant","3 different kinds of croissant with yogurt, coffee and orange","$2.20","./images/croissant.jpg"],["Pancakes","Chocolate pancakes with some fruits","$3.50","./images/pancakes.jpg"],["Waffles","Chocolate Waffles","$1.70","./images/waffles.jpg"],["Beldi breakfast","Traditional Moroccan breakfast with mint thé and hrira","$3.00","./images/beldi.jpg"],["Eggs","Eggs with mint thé and hrira","$2.50","./images/eggs.jpg"],["Salad","A green salad","$2.00","./images/vegetables.jpg"],["Thé","Traditional Moroccan Thé","$0.90","./images/thé.jpg"],["Jus","We offer all kinds of juses","$1.50","./images/jus.jpg"],["Smoothie","We offer all kinds of smoothies","$2.50","./images/smoothie.jpg"]],s=()=>{const e=document.querySelector(".main");e.textContent="";const t=(()=>{const e=document.createElement("h2");return e.classList.add("main-title"),e.innerText="Menu 📑",e})(),n=(()=>{const e=document.createElement("div");return e.classList.add("menu-container"),e})();a.forEach((e=>{const t=((e,t,n,a)=>{const s=document.createElement("div");s.classList.add("menu-item-container");const c=document.createElement("h3");c.classList.add("menu-item-title");const d=document.createElement("p");d.classList.add("menu-item-text");const o=document.createElement("p");o.classList.add("menu-item-price");const i=(e=>{const t=document.createElement("div");t.classList.add("menu-img-container");const n=document.createElement("img");return n.classList.add("menu-img"),n.setAttribute("alt",""),n.setAttribute("src",e),t.append(n),t})(a);return c.innerText=e,d.innerText=t,o.innerText=n,s.append(i),s.append(c),s.append(d),s.append(o),s})(e[0],e[1],e[2],e[3]);n.append(t)})),e.append(t),e.append(n)},c=()=>{const e=document.querySelector(".main");e.textContent="";const t=document.createElement("div");t.classList.add("main-content-container");const n=(()=>{const e=document.createElement("h2");return e.classList.add("main-title"),e.innerText="Welcome ",e})(),a=(()=>{const e=document.createElement("p"),t=document.createElement("br");return e.classList.add("main-para"),e.append("lorem ipsum dolor sit amet, consectetur adipiscing",t,"llorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ips."),e})(),c=(()=>{const e=document.createElement("button");return e.classList.add("main-btn"),e.append("Menu"),e.addEventListener("click",(()=>{s()})),e})();t.append(a),e.append(n,t,c)};(()=>{const n=document.createElement("header");n.classList.add("header");const a=document.createElement("h1");a.classList.add("header-title"),a.innerText="O'brown Coffee";const s=document.createElement("nav");s.classList.add("header-nav");const c=document.createElement("ul");c.classList.add("nav-list");const d=t("Home"),o=t("Menu"),i=t("Contact");c.append(d,o,i),s.append(c),n.append(a),n.append(s),e.append(n)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.append(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const a=document.createElement("p");a.classList.add("footer-para");const s=n("Abdelkrim Chafai","footer-link","https://github.com/Chafai-Abdelkrim");a.append("Made by ",s),t.append(a),e.append(t)})(),c(),document.querySelectorAll(".nav-list-link").forEach(((e,t)=>{e.addEventListener("click",(()=>{switch(t){case 0:c();break;case 1:s();break;case 2:(()=>{const e=document.querySelector(".main");e.textContent="";const t=document.createElement("div");t.classList.add("contact-container");const n=(()=>{const e=document.createElement("h2");return e.classList.add("contact-title"),e.innerText="Contact us! ",e})(),a=(()=>{const e=document.createElement("div");e.classList.add("contact-details");const t=document.createElement("h3");t.classList.add("contact-details-title"),t.innerText="Address";const n=document.createElement("p");n.classList.add("contact-details-text");const a=document.createElement("p");a.classList.add("contact-details-text");const s=()=>document.createElement("br");return n.append("Av. Tifaouine",s(),"Agadir, Morocco",s(),"9FXP+J8"),a.append("Phone Number: 0528285288",s(),"Email: O_brown@fakeemail.com"),e.append(t),e.append(n),e.append(a),e})(),s=(()=>{const e=document.createElement("div");e.classList.add("contact-details");const t=document.createElement("h3");t.classList.add("contact-details-title"),t.innerText="Schedule";const n=document.createElement("p");n.classList.add("contact-details-text");const a=()=>document.createElement("br");return n.append("Monday: 9:00am to 10:00pm",a()),n.append("Tuesday: 9:00am to 10:00pm",a()),n.append("Wednesday: 9:00am to 10:00pm",a()),n.append("Thursday: 9:00am to 10:00pm",a()),n.append("Friday: 9:00am to 10:00pm",a()),n.append("Saturday: 9:00am to 10:00pm",a()),n.append("Sunday: 9:00am to 10:00pm"),e.append(t),e.append(n),e})();t.append(a,s),e.append(n,t)})()}}))}))})();