const open_detail = {
    para__time: "OPENS NEXT AT 6:30PM, TODAY",
    head: "Shakeoholic Foods",
    img_src: "../images/pexels-pixabay-461198.jpg",
    para__varieties: "Beverages, Chinese, Sn..."
}

// section start
const parent = document.querySelectorAll(".shops__closed");

const makeShopsClosed = (parent, obj) => {
    parent.forEach((parent, index)=>{
        const shop__unavailable = document.createElement("div");
    shop__unavailable.className = "shop__unavailable";

    // para tag

    const para__time = document.createElement("p");
    para__time.className = "shop__unavailable__card";
    para__time.textContent = obj.para__time;
    if(index == 0){
        shop__unavailable.appendChild(para__time);
    }

    const shop__unavailable__card = document.createElement("div");
    shop__unavailable__card.className = "shop__unavailable__card";
    const card__image = document.createElement("div");
    card__image.className = "card__image";
    const img = document.createElement("img");
    img.src = obj.img_src;
    img.alt = "Food Image";

    card__image.appendChild(img);
    shop__unavailable__card.appendChild(card__image);

    // card detail

    const card__detail = document.createElement("div");
    card__detail.className = "card__detail";
    const restaurant_name = document.createElement("h3");
    restaurant_name.textContent = obj.head;
    card__detail.appendChild(restaurant_name);

    const para_var = document.createElement("p");
    para_var.textContent = obj.para__varieties;
    card__detail.appendChild(para_var);
    shop__unavailable__card.appendChild(card__detail);

    shop__unavailable.appendChild(shop__unavailable__card);

    parent.appendChild(shop__unavailable);
    });    

}

for(let i=0; i<5; i++) makeShopsClosed(parent, open_detail)