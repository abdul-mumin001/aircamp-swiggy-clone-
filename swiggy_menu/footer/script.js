{/* <div class="area">
            <p></p>            
        </div>   */}


const div = document.querySelector(".area");
// console.log(div);

const makePara = (div) => {
    const para = document.createElement("p");
    para.textContent = "Deharadun";
    div.appendChild(para);
}

for(let i=0; i<501; i++) makePara(div);

