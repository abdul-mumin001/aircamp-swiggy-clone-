const parent = document.querySelector('.footer-ull') 

const creatLi = parent =>{
    const li = document.createElement('li')
    li.textContent = 'Madhya pradesh'
    parent.appendChild(li)

}
for(let i =0; i<500;i++)
creatLi(parent)