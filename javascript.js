
let calcBody = document.querySelector(".calcBody");
let input = document.querySelector(".screen");
let inputMini = document.querySelector(".screenMini");


let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let percentButton = document.querySelector(".percent");


let firstPart;
let operation;
let deleteInput = false; //clears input for new value
let deleteMiniInput = false;
// let newAction = true;

calcBody.addEventListener("click", function(event){
    if(event.target.textContent === "C"){
        input.value = "0";
        inputMini.value ="0";
        // newAction = true;
        clearAll()
    }
    /////////////////////////////////////////////////////////////////////////////                                                                                
    if(event.target.textContent === "DEL" && !isNaN(inputMini.value[inputMini.value.length - 1])){

        input.value = input.value.slice(0, (input.value.length-1));
        inputMini.value = inputMini.value.slice(0, (inputMini.value.length-1));

        if(input.value === ""){
            input.value = 0;
        }
        if(inputMini.value === ""){
            inputMini.value = 0;
        }
        
    }
    /////////////////////////////////////////////////////////////////////////////
    if(input.value.length <= 11)
        {
            if(event.target.id ==="number" && !(event.target.textContent === "0")){
                if (deleteInput === true){
                    input.value = "";
                    deleteInput = false;
                }
                // if (deleteMiniInput === true){
                //     inputMini.value = "";
                //     deleteMiniInput = false;
                // }

                if(input.value ==="0"){
                    input.value = ""
                    inputMini.value = ""
                }
                input.value += `${event.target.textContent}`;
                inputMini.value += `${event.target.textContent}`;

                
            }

            if(event.target.id ==="zero" && !(input.value ==="0") ){
                if (deleteInput === true){
                    input.value = "";
                    deleteInput = false;
                }
                // if (deleteMiniInput === true){
                //     inputMini.value = "";
                //     deleteMiniInput = false;
                // }
                input.value += `${event.target.textContent}`;
                inputMini.value += `${event.target.textContent}`;
            }
        }
    /////////////////////////////////////////////////////////////////////////////
    if(   event.target.id ==="operation"){
        //////////////////////////////////////////////+++++++

        if(event.target.textContent === "+" &&( !inputMini.value.includes("+"))){ 

            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("-") &&  
                    !inputMini.value.includes("x") &&
                    !inputMini.value.includes("/") &&
                    !inputMini.value.includes("%") 
                        ){
                inputMini.value += "+";
            }
            
            if(inputMini.value.includes("-")){
                let index = inputMini.value.indexOf("-");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
                
                
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "+";
                
            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "+";

            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "+";
                
            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "+";
                
            }




            firstPart = input.value;
            operation = "+";

            
            
            event.target.classList.add("highLight");

            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
        }
        //////////////////////////////////////////////------

        if(event.target.textContent === "-" &&( !inputMini.value.includes("-"))){
            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("+") &&  
                    !inputMini.value.includes("x") &&
                    !inputMini.value.includes("/") &&
                    !inputMini.value.includes("%") 
                        ){
                inputMini.value += "-";
            }

            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "-";
                
            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "-";
                
            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "-";
                
            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "-";
                
            }


            firstPart = input.value;
            operation = "-";

            

            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            
        }
        //////////////////////////////////////////////******

        if(event.target.textContent === "x" &&( !inputMini.value.includes("x"))){

            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("-") &&  
                    !inputMini.value.includes("+") &&
                    !inputMini.value.includes("/") &&
                    !inputMini.value.includes("%") 
                        ){
                inputMini.value += "x";
            }

            if(inputMini.value.includes("-")){
                let index = inputMini.value.indexOf("-");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "x";
                
            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "x";
                
            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "x";
                
            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "x";
                
            }


            firstPart = input.value;
            operation = "x";

            

            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
        }
        ////////////////////////////////////////////// //////

        if(event.target.textContent === "/" &&( !inputMini.value.includes("/"))){

            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("-") &&  
                    !inputMini.value.includes("x") &&
                    !inputMini.value.includes("+") &&
                    !inputMini.value.includes("%") 
                        ){
                inputMini.value += "/";
            }

            if(inputMini.value.includes("-")){
                let index = inputMini.value.indexOf("-");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "/";
                
            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "/";
                
            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "/";
                
            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "/";
                
            }



            firstPart = input.value;
            operation = "/";

            

            event.target.classList.add("highLight");  
            
            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
        }

        ////////////////////////////////////////////// %%%%%%%%
        if(event.target.textContent === "%" &&( !inputMini.value.includes("%"))){

            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("-") &&  
                    !inputMini.value.includes("x") &&
                    !inputMini.value.includes("/") &&
                    !inputMini.value.includes("+") 
                        ){
                inputMini.value += "%";
            }

            if(inputMini.value.includes("-")){
                let index = inputMini.value.indexOf("-");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "%";
                
            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "%";
                
            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "%";
                
            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");
                // inputMini.value = inputMini.value.slice(0, inputMini.value.length-1);
                // inputMini.value += "%";
                
            }




            firstPart = input.value;
            operation = "%";

            
            
            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");

        }
        deleteInput = true;
        
        
        
    }

    if(   event.target.id ==="equal" ){
        if(operation === "+"){
        input.value = Math.floor(firstPart) + Math.floor(input.value); 
        clearHighlightAndClearInputs()
        }
        if(operation === "-"){
        input.value = Math.floor(firstPart) - Math.floor(input.value) ;
        clearHighlightAndClearInputs()
        }
        if(operation === "x"){
        input.value = Math.floor(firstPart) * Math.floor(input.value);
        clearHighlightAndClearInputs()
        }
        if(operation === "/"){
            if(firstPart === 0){
                input.value = "Dividing by 0, serious? Back to Kindergarten"
            }else{
                input.value = Math.floor(firstPart)  / Math.floor(input.value);
            }
        clearHighlightAndClearInputs()
        }
        if(operation === "%"){
        input.value = (Math.floor(firstPart) / Math.floor(input.value) )*100;
        clearHighlightAndClearInputs()
        }

        

        inputMini.value = input.value;
        firstPart.value = input.value
    }

});

function clearAll(){
    addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            operation = "";
}

function clearHighlightAndClearInputs(){
        clearAll();
        deleteInput = true;
        deleteMiniInput = true;
}