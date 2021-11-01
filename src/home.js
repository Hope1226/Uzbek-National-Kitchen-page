import createNav from "./nav";

const createHome = (container) => {
  let homeCont = document.createElement('div');
  homeCont.classList.add('homeCont');
  let headline = document.createElement('div');
  headline.classList.add('headline')
  let heroTxt = document.createElement('h1');
  heroTxt.innerHTML = "Wellcome to Uzbek National kitchen"
  heroTxt.classList.add('hero-text');
  let subHero = document.createElement('small');
  subHero.innerHTML = "Reserve a place now!";

  headline.appendChild(heroTxt);
  headline.appendChild(subHero);

  let form = document.createElement('form');
  form.classList.add('reservationForm');
  let inputName = document.createElement('input');
  inputName.type = "text";
  inputName.placeholder = "Enter your name";
  let inputEmail = document.createElement('input');
  inputEmail.type = "emial";
  inputEmail.placeholder = "Enter your email"
  let inputDate = document.createElement('input');
  inputDate.type = "date";
  inputDate.id = "date";
  let textArea = document.createElement('textarea');
  textArea.placeholder = 'Enter your message here';
  let submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = "submitBtn";
  submitButton.innerHTML = "Place the reservation";
 

  form.appendChild(inputName);
  form.appendChild(inputEmail);
  form.appendChild(inputDate);
  form.appendChild(textArea);

  homeCont.appendChild(headline);
  homeCont.appendChild(form);

  container.appendChild(homeCont);
};

export default createHome;