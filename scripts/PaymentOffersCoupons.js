import { footerHTML } from '../scriptInside-landingPage/footer.js'
document.getElementById('footerPart').innerHTML = footerHTML();

let restaurantButton = document.getElementById("restaurantButton");
restaurantButton.addEventListener("click", function() {
    restaurantButton.style.borderBottom = "2px solid black"
    dishesButton.style.borderBottom = "1px solid white"
    dishesButton.style.color = "grey"
    restaurantButton.style.color = "black"
    couponsContainer.style.display = "none"
    SeccouponsContainer.style.display="none"
})

let dishesButton = document.getElementById("dishesButton");
dishesButton.addEventListener("click", function() {
    restaurantButton.style.borderBottom = "1px solid white"
    dishesButton.style.borderBottom = "2px solid black"
    dishesButton.style.color = "black"
    restaurantButton.style.color = "grey"
    couponsContainer.style.display = "block"
    SeccouponsContainer.style.display="block"

    // Bhupesh addition code
    const restaurant__container = document.querySelector(".restaurant__container");
    restaurant__container.classList.add("open");
})


// console.log(alltpyesOfRestaurentOffers);
// console.log(couponsContainer)

// let couponCode = document.getElementById("couponCode").innerText;
// console.log(couponCode);


// couponCode.addEventListener
// document.getElementById("textCopyBotton").addEventListener("click",function(){
//    couponCode.ariaSelected();
//    document.execCommand("copy");
// })

// textCopyBotton.onclick = function(){
//   couponCode.ariaSelected();
//   document.execCommand("copy");
// } 

// couponCode.addEventListener("click", ()=>{
//   textCopyBotton.classList.add("avtive");
//   copyToClipboard();
// })

// Bhupesh Section Restaurant Card 

const restaurant__Button = document.getElementById('restaurantButton');
restaurant__Button.addEventListener("click", () => {
    const restaurant__container = document.querySelector(".restaurant__container");
    restaurant__container.classList.remove("open");
})

const restaurant = {
    imgSrc: "images/pexels-chan-walrus-958545.jpg",
    name: "Shree Krishna Sweets & Restaurant",
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

    // heading div for offer
    const offer_div = document.createElement("div");
    offer_div.className = "restaurent__offer--view";
    const offer_div_head = document.createElement("h4");
    offer_div_head.textContent = "50% OFF";
    offer_div.appendChild(offer_div_head);
    restaurent__image.appendChild(offer_div);


    restaurant__wrapper.appendChild(restaurent__image);

    // restaurent--name

    const restaurant__name = document.createElement("div");
    restaurant__name.className = "restaurant__name";

    const h3 = document.createElement("h3");
    h3.textContent = restaurant.name;
    let para__menu = document.createElement("p");
    para__menu.className = "restaurant__menu--items";
    para__menu.textContent = restaurant.varaities;

    // restaurant__wrapper.appendChild(restaurant__name);

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

    restaurant__name.appendChild(h3);
    restaurant__name.appendChild(para__menu);
    restaurant__name.appendChild(restaurant__feature);

    restaurant__wrapper.appendChild(restaurant__name);

    // hr tag
    const hr = document.createElement("hr");
    restaurant__wrapper.appendChild(hr);

    // restaurant--discount

    const restaurant__discount = document.createElement("div");
    restaurant__discount.className = "restaurant__discount";

    const img_discount = document.createElement("img");
    img_discount.src = "images/discount-icon.png";
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

for(let i=0; i<10; i++) makeRestaurantCard(parent, restaurant);

