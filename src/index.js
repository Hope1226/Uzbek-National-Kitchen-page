import "./style.scss";
import createNav from "./nav";
import createHome from "./home";
import createMenu from "./menu";

const mainContainer = document.querySelector('.container');
const content = document.querySelector('.content');
let listItems;

mainContainer.insertBefore(createNav(), content);
createHome(content);

const menuLink = document.querySelector('#menuLink');
const homeLink = document.querySelector('#homeLink');

menuLink.addEventListener('click', (e)=> {
  content.innerHTML = " ";
  createMenu(content);
  e.target.style.color = "wheat";
  homeLink.style.color = "white";
  listItems = document.querySelectorAll('.list');
  listItems.forEach(list => list.addEventListener('click', function (){
    this.classList.toggle('open-acive');
  }))
});

homeLink.addEventListener('click', (e)=> {
  content.innerHTML = " ";
  createHome(content);
  e.target.style.color = "wheat";
  menuLink.style.color = "white";
})

