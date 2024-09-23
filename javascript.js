
let calcBody = document.querySelector(".calcBody");
let input = document.querySelector(".screen");
let inputOp = "";

calcBody.addEventListener("click", function(event){
    if(event.target.textContent === "C"){
        inputOp = "";
        input.value =inputOp;
    }
    if(event.target.textContent === "DEL"){
        inputOp = inputOp.slice(0, (inputOp.length-1));
        input.value = inputOp;
    }
    
    if(input.value.length <= 11)
        {
            if(event.target.id ==="number"){

                inputOp += `${event.target.textContent}`;
                input.value = inputOp;
            }
            
            if(   event.target.id ==="operation" ){
                inputOp += `${event.target.textContent}`; 
                input.value = inputOp;
            }
        }
    
});