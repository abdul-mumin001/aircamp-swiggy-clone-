let nav2 = document.getElementById("user-page-main-content-header");
let nav3 = document.querySelector(".user-page-main-content");
let container = document.getElementById("user-page-inner-content");
let header1 =document.getElementById("navbar");

document.addEventListener('scroll', (e) => {
    let axis = container.getBoundingClientRect().top;
    console.log(e);
    console.log(axis);
    if(axis < 0) {
        nav2.style.position = "sticky";
        header1.style.opacity = "0"
        // header1.style.zIndex="1"
        // nav2.style.zIndex="1"
        nav3.style.backgroundColor = "#fff"
    } else {
        nav3.style.backgroundColor = "#003a55"
        nav2.style.position = "block";
        header1.style.opacity = "1"
        nav2.style.background="#003a55"
        nav2.style.width="90em"
        nav2.style.height="2.5em"
        nav2.style.marginBottom="1em"
        container.style.width="90em"
        nav2.style.paddingTop="0em"
        nav2.style.paddingLeft="2em"
    }
})

// var scrollTrigger = 60;

// window.onscroll = function() {
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     console.log("OK")
//     document.querySelector(".user-page-main-content-header").classList.add("on-scroll");
//   } else {
//   document.querySelector(".user-page-main-content-header").classList.remove("on-scroll");
//   }
// };
