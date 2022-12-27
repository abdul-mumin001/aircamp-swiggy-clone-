const category = [
    "Recommended",
    "Vegetable Veg Pag Pizza",
    "Best In Pizza Veg",
    "Chicken Pizza (Pan Pizza)",
    "Cheese Stuffed Crust Pizza",
    "Vegetable Starters",
    "Chicken Starters",
    "Desserts",
    "End of List"
]

const menu_page = document.querySelector(".menu-page");


// Categories Section Menu item
const menu__categories = document.createElement("div");
menu__categories.className = "menu__categories";

const add_menu_categories = (parent, category) => {
    category.forEach(menu => {
        const para = document.createElement("p");
        para.textContent = menu;

        parent.appendChild(para);
    })
    
    menu_page.appendChild(menu__categories);
    // const menu__item__page = document.querySelector(".menu__item__page");

}

add_menu_categories(menu__categories, category);

// ***************************************Priya's Part *************************************************

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const count = document.querySelector(".item-count");

plus.addEventListener("click", () => {
    
  number.innerText++;

  count.innerText++;

  // number.value("")
});
minus.addEventListener("click", () => {
    if(number.innerText == 0){
        return
    }
  number.innerText--;

  count.innerText--;
});

// End of Priya part

// Footer

import { footerHTML } from '../scriptInside-landingPage/footer.js'
document.getElementById('footerPart').innerHTML = footerHTML();
