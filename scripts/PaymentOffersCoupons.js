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


