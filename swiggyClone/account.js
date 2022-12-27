let nav2 = document.getElementById("user-page-main-content-header");
let container = document.getElementById("user-page-inner-content");
let header1 =document.getElementById("navbar");

document.addEventListener('scroll', (e) => {
    let axis = container.getBoundingClientRect().top;
    console.log(axis);
    if(axis < 0) {
        nav2.style.position = "fixed";
        header1.style.position = "static"
    } else {
        nav2.style.position = "static";
        header1.style.position = "fixed"
        nav2.style.backgroundColor="#003a55d0"
        nav2.style.width="90em"
        nav2.style.height="2em"
        nav2.style.marginBottom="1em"
        container.style.width="100%"
        container.style.margin="display:none"

    }
})