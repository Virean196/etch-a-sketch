let mainDiv = document.getElementById("mainDiv");
let sizeBtn = document.getElementById("sizeBtn");
let resetGridBtn = document.getElementById("resetGridBtn");
let colorBtn = document.getElementById("colorBtn");
let size = 16;
let color = "black";

colorBtn.addEventListener("click", function(){
    color = prompt("Choose a color:");
})

sizeBtn.addEventListener("click", function(){
    size = prompt("Choose the grid size (max 100)");
    deleteGrid();
    createGrid();
    drawColor();
});

resetGridBtn.addEventListener("click", resetGridColor);

function deleteGrid(){
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.lastChild);
    }
}

function createGrid(){
    for(let i = 0; i<(size*size); i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixels");
        pixel.style.height = `${(mainDiv.clientHeight)/size}px`;
        pixel.style.width = `${(mainDiv.clientWidth)/size}px`;
        mainDiv.appendChild(pixel);
    }
}

function drawColor(){
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) =>{
        pixel.addEventListener("mousemove", () => {
            pixel.style.background = color;
        });
        
    });
}

function resetGridColor(){
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) => {
        pixel.style.background = "white";
    });
}

createGrid();
drawColor();