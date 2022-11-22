import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
import {clear, footer, header} from "./functions.js"


header();
home();
footer();

const homebtn=document.querySelector('#homebtn');
const menubtn=document.querySelector('#menubtn');
const contactbtn=document.querySelector('#contactbtn');



homebtn.addEventListener('click', function(){
    clear();
    home();
    footer();
});

menubtn.addEventListener('click', function(){
    clear();
    menu();
    footer();
});

contactbtn.addEventListener('click', function(){
    clear();
    contact();
    footer();
});