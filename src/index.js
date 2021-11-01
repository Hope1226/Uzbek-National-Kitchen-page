import "./style.scss";
import createNav from "./nav";
import createHome from "./home";

const mainContainer = document.querySelector('.container');

mainContainer.appendChild(createNav());
createHome(mainContainer);
