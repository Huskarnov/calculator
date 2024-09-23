
let calcBody = document.querySelector(".calcBody");
let input = document.querySelector(".screen");
let operationFirst = false;

calcBody.addEventListener("click", function(event){
    if(event.target.textContent === "C"){
        input.value ="";
        
    }
    if(event.target.id ==="number"){
        input.value += `${event.target.textContent}`;
        
    }

    console.log(input.value);
});