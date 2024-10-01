const gridBtn = document.querySelector(".generate");
const container = document.querySelector(".container");

gridBtn.addEventListener("click", ()=>{
    container.replaceChildren();
    generateGrid()
})

function generateGrid(){
    let promptNumber = window.prompt("Enter the dimensions of the grid you would like to generate: ");
    let gridDimensions = +promptNumber;
    while(gridDimensions > 100){
       gridDimensions = window.prompt("Please enter a number equal or lower than 100: ");
    }

    for(let i = 0; i < (gridDimensions * gridDimensions); i++){
        const div = document.createElement("div");

        let divDimensions = 960 / gridDimensions;           
        div.style.width = `${divDimensions}px`;
        div.style.height = `${divDimensions}px`;
        div.style.backgroundColor = "aliceblue";

        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
};