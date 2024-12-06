const container = document.querySelector("#container")

const AMOUNT_OF_SQUARES_ROW = 16
const AMOUNT_OF_SQUARES_COLUMN = 16
for(i=0;i<AMOUNT_OF_SQUARES_COLUMN;i++){
        const row  = document.createElement("div")
        row.style.display = "flex"
        row.classList.add("row");
        container.append(row)
    for(j=0;j<AMOUNT_OF_SQUARES_ROW;j++){
        const span  = document.createElement("span")
        span.classList.add("square");
        span.style.borderStyle= "solid"
        span.style.borderColor = "black"
        span.style.backgroundColor ="red"
        span.style.height = "50px"
        span.style.width = "50px"
        row.appendChild(span)
    }
}

