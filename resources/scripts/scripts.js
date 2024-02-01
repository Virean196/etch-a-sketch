let mainDiv = document.getElementById("frame");
let sizeBtn = document.getElementById("sizeBtn");
let resetGridBtn = document.getElementById("resetGridBtn");
let colorBtn = document.getElementById("colorBtn");
let size = 16;
let color = "black";

function deleteGrid(){
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.lastChild);
    }
}

function createGrid(){
    if(size <= 100){
        for(let i = 0; i<(size*size); i++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixels");
            pixel.style.height = `${((mainDiv.clientHeight)/size).toFixed(2)}px`;
            pixel.style.width = `${((mainDiv.clientWidth)/size).toFixed(2)}px`;
            pixel.addEventListener("mousemove", () => {
                pixel.style.background = color;
            });
            mainDiv.appendChild(pixel);
        }
    }
}

function resetGridColor(){
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) => {
        pixel.style.background = "white";
    });
}

colorBtn.addEventListener("click", function(){
    color = prompt("Choose a color:");
})

sizeBtn.addEventListener("click", function(){
    size = prompt("Choose the grid size (max 100)");
    deleteGrid();
    createGrid();
});

resetGridBtn.addEventListener("click", resetGridColor);


createGrid();