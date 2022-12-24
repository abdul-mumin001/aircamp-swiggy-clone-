// {/* <div class="area">
//             <p></p>            
//         </div>   */}


// const div = document.querySelector(".area");
// // console.log(div);

// const makePara = (div) => {
//     const para = document.createElement("p");
//     para.textContent = "Deharadun";
//     div.appendChild(para);
// }

// for(let i=0; i<501; i++) makePara(div);

// Fetch practice for swiggy

fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&page_type=DESKTOP_WEB_LISTING")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

