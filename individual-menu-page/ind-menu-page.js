import { footerHTML } from '../scriptInside-landingPage/footer.js'
document.getElementById('footerPart').innerHTML = footerHTML();

// header 
const sidebar=document.getElementById('sidebar');
const left=document.getElementById('left');




function myfunction(){
    sidebar.style.width="30rem";
    // left.style.color="0rem";
}

function closebtn(){
    sidebar.style.width="0rem";
    // left.style.height="4rem";
}
// header end 

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

        const rec = document.createElement("div");
        rec.className = "menu__categories--feature";
        para.appendChild(rec);

        parent.appendChild(para);

    })
    
    menu_page.appendChild(menu__categories);   

}

add_menu_categories(menu__categories, category);

// List items

const menu_page_item = {
    item_heading:"Bhuna Chicken Roll",
    price:350,
    item_para:"tomato,onion,capsicum, and chicken tikka.",
    item_img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/yhgvbkcr2mp431pwtfji"
  
}

const menu__item__category = document.querySelector(".menu__item__category");

const menuList = (parent, item) => {
    const menu__item__details = document.createElement("div");
    menu__item__details.className = "menu__item--details";

    const menu__item__text = document.createElement("div");
    menu__item__text.className = "menu__item--text";

    const first_para = document.createElement("p");
    first_para.innerHTML  = "<span>&#9856;</span>";
    const head_three = document.createElement("h3");
    head_three.textContent = item.item_heading;
    const second_para = document.createElement("p");
    second_para.innerHTML = `<span>&#8377;</span> ${item.price}`;
    // second_para.textContent = item.price;
    const third_para = document.createElement("p");
    third_para.textContent = item.item_para;

    menu__item__text.appendChild(first_para);
    menu__item__text.appendChild(head_three);
    menu__item__text.appendChild(second_para);
    menu__item__text.appendChild(third_para);

    menu__item__details.appendChild(menu__item__text);

    const menu__item__img = document.createElement("div");
    menu__item__img.className = "menu__item--img";
    const menu__item__glance = document.createElement("div");
    menu__item__glance.className = "menu__item--glance";
    const imgTag = document.createElement("img");
    imgTag.src = item.item_img;

    menu__item__glance.appendChild(imgTag);

    const add__button = document.createElement("div");
    add__button.className = "add__button";
    const button_para = document.createElement("p");
    button_para.textContent = "ADD";

    add__button.appendChild(button_para);

    menu__item__img.appendChild(menu__item__glance);
    menu__item__img.appendChild(add__button);

    menu__item__details.appendChild(menu__item__img);

    parent.appendChild(menu__item__details);

}

// menuList(menu__item__category, menu_page_item);

fetch("https://prakash-dey.github.io/api/menu_item.json")
    .then(res => res.json())
    .then(data => {
        for(const [category, values] of Object.entries(data)){
            values.forEach(item => {
                menuList(menu__item__category, item)
            });
        }
    })
    .catch(err => console.log(err))

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

// End of Priya part




