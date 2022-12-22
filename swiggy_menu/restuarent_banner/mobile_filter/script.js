{/* <div class="filter__popup__content--item">
    <input type="checkbox" />
    <p>Relevance</p>
</div> */}


const parent0 = document.querySelector(".filter__popup--right .filter__popup__content");

const makeCheckbox = (parent0) => {
    const div = document.createElement('div');
    div.className = "filter__popup__content--item";

    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    const para = document.createElement("p");
    const text = document.createTextNode("Biryani");

    para.appendChild(text);
    div.appendChild(inputCheck);
    div.appendChild(para);

    parent0.appendChild(div);
}

for(let i=0; i< 2; i++){
    makeCheckbox(parent0);
}

// another ffff----

const restaurant = {
    imgSrc: "../images/pexels-ella-olsson-1640772.jpg",
    name: "AirCampus Sweets & Restaurant",
    varaities: "Sweets, North Indian, Chinese, South Indian, Italian, Pizzas",
    estTime: "30 MINS",
    price: "250 FOR TWO",
    rating: 4.2,
    offer: "50% off | Use WELCOME50",
}

const parent = document.querySelector(".restaurant__container");

const makeRestaurantCard = (parent, restaurant) => {
    const restaurant__wrapper = document.createElement("div");
    restaurant__wrapper.className = "restaurant__wrapper";

    const restaurent__image = document.createElement("div");
    restaurent__image.className = "restaurent__image";
    let img_tag = document.createElement("img");
    img_tag.src = restaurant.imgSrc;
    img_tag.alt = "Restaurent Img";

    restaurent__image.appendChild(img_tag);
    restaurant__wrapper.appendChild(restaurent__image);

    // restaurent--name

    const restaurant__name = document.createElement("div");
    restaurant__name.className = "restaurant__name";

    const h3 = document.createElement("h3");
    h3.textContent = restaurant.name;
    let para__menu = document.createElement("p");
    para__menu.className = "restaurant__menu--items";
    para__menu.textContent = restaurant.varaities;

    restaurant__name.appendChild(h3);
    restaurant__name.appendChild(para__menu);
    restaurant__wrapper.appendChild(restaurant__name);

    // restaurent--feature

    const restaurant__feature = document.createElement("div");
    restaurant__feature.className = "restaurant__feature";
    const restaurant__rating = document.createElement("div");
    restaurant__rating.className = "restaurant__rating";
    const span = document.createElement("span");
    span.className = "material-symbols-sharp white";
    span.textContent = "star";

    const para__rating = document.createElement("p");
    para__rating.textContent = "4.2";

    restaurant__rating.appendChild(span);
    restaurant__rating.appendChild(para__rating);
    restaurant__feature.appendChild(restaurant__rating);

    let circle = document.createElement("div");
    circle.className = "div__circle";
    restaurant__feature.appendChild(circle);

    const para__estTime = document.createElement("p");
    para__estTime.textContent = restaurant.estTime;
    restaurant__feature.appendChild(para__estTime);
    restaurant__feature.appendChild(circle);

    const para__offer = document.createElement("p");
    para__offer.textContent = restaurant.price;
    restaurant__feature.appendChild(para__offer);

    restaurant__wrapper.appendChild(restaurant__feature);

    // hr tag
    const hr = document.createElement("hr");
    restaurant__wrapper.appendChild(hr);

    // restaurant--discount

    const restaurant__discount = document.createElement("div");
    restaurant__discount.className = "restaurant__discount";

    const img_discount = document.createElement("img");
    img_discount.src = "../images/discount-icon.png";
    img_discount.alt = "discount";

    const para__discount = document.createElement("p");
    para__discount.textContent = restaurant.offer;

    restaurant__discount.appendChild(img_discount);
    restaurant__discount.appendChild(para__discount);

    restaurant__wrapper.appendChild(restaurant__discount);

    // quick- view

    const quick__view = document.createElement("div");
    quick__view.className = "quick__view";
    let bold = document.createElement("b");
    bold.textContent = "QUICK VIEW";

    const para__button = document.createElement("p");
    para__button.appendChild(bold);
    quick__view.appendChild(para__button);

    restaurant__wrapper.appendChild(quick__view);

    parent.appendChild(restaurant__wrapper);

}

for(let i=0; i<1; i++) makeRestaurantCard(parent, restaurant);

// hover effecg Quick view

const quick_hover = document.querySelector(".restaurant__wrapper");

quick_hover.addEventListener("mouseenter", ()=> {   
    document.querySelector(".restaurant__wrapper .quick__view").style.opacity = 1;
});

quick_hover.addEventListener("mouseleave", ()=> {   
    document.querySelector(".restaurant__wrapper .quick__view").style.opacity = 0;
});