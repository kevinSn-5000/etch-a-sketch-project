const gridBtn = document.querySelector(".generate");
const container = document.querySelector(".container");

gridBtn.addEventListener("click", generateGrid)

function generateGrid(){
     container.replaceChildren();

    let promptNumber = window.prompt("Enter the dimensions of the grid you would like to generate: ", 16);
    let gridDimensions = +promptNumber;
    while(gridDimensions > 100){
       gridDimensions = window.prompt("Please enter a number equal or lower than 100: ");
    }

    for(let i = 0; i < (gridDimensions * gridDimensions); i++){
        const div = document.createElement("div");

        let divDimensions = 960 / gridDimensions;           
        div.style.width = `${divDimensions}px`;
        div.style.height = `${divDimensions}px`;

        let divsOpacity = 0;
        //random numbers for the rgb values
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
            divsOpacity = divsOpacity + 0.1;
            div.style.opacity = `${divsOpacity}`;
        })
        container.appendChild(div);
    }
};