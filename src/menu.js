const createMenu = container => {
  let menuCont = document.createElement('div');
  menuCont.classList.add('menu-container');
 


  let menu = [
    {
      name: "First course",
      list: ["Shorpa ----------- 5$", "Chicken-soup ----------- 10$", "Koza-shourpa ----------- 40$", "Noxat-shorpa ----------- 20$", "Uygur-lagman ----------- 20$"]
    },
    {
      name: "Second course",
      list: ["Plov ----------- 20$", "Manty ----------- 10$", "Kazan-Kebab-lam ----------- 40$", "Dolma ----------- 20$", "Beshpanja ----------- 20$"]
    },
    {
      name: "Kebab",
      list: ["Lam-kebab ----------- 5$", "Ckicken-kebab ----------- 3$", "Khorazm-kebab ----------- 6$", "Koreyka ----------- 20$"]
    },
    {
      name: "Tea",
      list: ["Green ----------- 1$", "Black ----------- 1$", "Limon ----------- 0.5$", "Suger ----------- 0.1$"]
    },
    {
      name: "Bread",
      list: ["Uzbek patir ----------- 1$", "Bread asorti ----------- 3$"]
    }
  ];

  for(let i = 0; i < menu.length; i++){
    let items = document.createElement('div');
    let uList = document.createElement('ul');
    items.className = `list list-${i}`;
    let heading = document.createElement('h1');
    heading.innerHTML = menu[i].name;
    let dishList = menu[i].list;

    for(let g = 0; g < dishList.length; g++){
      let dish = document.createElement('li');
      dish.innerHTML = dishList[g];
      uList.appendChild(dish);
    }

    items.appendChild(heading);
    items.appendChild(uList);
    menuCont.appendChild(items);
  }

  container.appendChild(menuCont);
}

export default createMenu;