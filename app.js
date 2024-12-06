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
        square.addEventListener("mouseover", () => square.style.backgroundColor = getRandomColor())
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

function getRandomColor(){
    let result = "#"
    for(i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random()*15)
        if(randomNumber<10) 
            result += randomNumber
        else{
            switch(randomNumber){

            case 10: result += "A" 
            break

            case 11: result += "B" 
            break

            case 12: result += "C" 
            break    

            case 13: result += "D" 
            break

            case 14: result += "E" 
            break

            case 15: result += "F" 
            break
            }
        }
    }
    console.log(result)
    return result
}


newPadButton.addEventListener("click",() => getGridSizeUserInput())

