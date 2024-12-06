const container = document.querySelector("#container")

let padSize = 16
let squareSize = 500/padSize
createSketchPad(padSize)
function createSketchPad(padSize){
    for(i=0;i<padSize;i++){
        const row  = document.createElement("div")
        row.style.display = "flex"
        row.classList.add("row");
        container.append(row)
        for(j=0;j<padSize;j++){
            const span  = document.createElement("span")
            span.classList.add("square");
            span.style.borderStyle= "solid"
            span.style.borderColor = "black"
            span.style.backgroundColor ="red"
            span.style.height= `${squareSize}px`
            span.style.width = `${squareSize}px`
            row.appendChild(span)
        }
    }
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => square.style.backgroundColor ="black")
    })
}
function getGridSizeUserInput(){
    let userInput = Number.parseInt(prompt("Enter new grid size"))
    squareSize = 500/userInput
    if(userInput<=100){
        console.log(container.querySelectorAll(".row").forEach(item => item.remove()))
        createSketchPad(userInput)
    }
}



const newPadButton = document.querySelector("#new-pad-button")




newPadButton.addEventListener("click",() => getGridSizeUserInput())

