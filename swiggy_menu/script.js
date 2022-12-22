const myImage = document.querySelector('img');

const myRequest = new Request('Norway.jpg');

try {
    
    fetch(myRequest)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        return response.blob();
      })
      .then((response) => {
        myImage.src = URL.createObjectURL(response);
      });
} catch (error){
    console.error(error);
}

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");


  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;

  // #282C3F
  

