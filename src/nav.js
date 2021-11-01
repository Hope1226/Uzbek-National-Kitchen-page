const createNav = () => {
  let navigation = document.createElement('nav');
  navigation.classList.add('main-nav');
  let homeLink = document.createElement('a');
  homeLink.innerHTML = 'Home';
  homeLink.id = "homeLink" 
  let menuLink = document.createElement('a'); 
  menuLink.innerHTML = 'Menu';
  menuLink.id = "menuLink"
  let contactLink = document.createElement('a');
  contactLink.innerHTML = 'Contacts';
  contactLink.id = "contactLink"
  
  navigation.appendChild(homeLink);
  navigation.appendChild(menuLink);
  navigation.appendChild(contactLink);

  return navigation
};

export default createNav;