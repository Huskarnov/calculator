
const calcBody = document.querySelector(".calcBody");
const input = document.querySelector(".screen");
const inputMini = document.querySelector(".screenMini");

//to add-remouve highlight animation class only
let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let percentButton = document.querySelector(".percent");

// const operatorButtons = {
//     add: document.querySelector(".add"),
//     subtract: document.querySelector(".substract"),
//     multiply: document.querySelector(".multiply"),
//     divide: document.querySelector(".divide"),
//     percent: document.querySelector(".percent")
//     };


let firstOperand;  //first part of the operation
let secondOperand; //second part of the operation
let operation;  //set current operation type (+ - x / %)
let deleteInput = false;         //both authorize numbers 
let deleteMiniInput = false;     //to clean the slate for next input



//////////////////////mega click event//////////////////////
//////////////////////mega click event//////////////////////

calcBody.addEventListener("click", function(event){
    if(event.target.textContent === "C"){
        input.value = "0";
        inputMini.value = "0";
        clearAll()
    }
    /////////////////////////////////////////////////////////////////////////////                                                                                
    if(event.target.textContent === "DEL"){

        if(!isNaN(inputMini.value[inputMini.value.length - 1]) ||
        (inputMini.value[inputMini.value.length - 1] === ".")){

            input.value = input.value.slice(0, (input.value.length-1));
            inputMini.value = inputMini.value.slice(0, (inputMini.value.length-1));

            if(input.value === ""){
                input.value = 0;
            }
            if(inputMini.value === ""){
                inputMini.value = 0;
            }
        }else{
            
            inputMini.value = inputMini.value.slice(0, (inputMini.value.length-1));

            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            operation = null;
            deleteInput = false;
            
        }

        deleteInput = false;
        deleteInput = false;

    }
    ////////////////////////////////////////////////////////////////////////
    if (event.target.textContent === "." && !input.value.includes(".")){

        if( inputMini.value[inputMini.value.length - 1] === "+" ||
            inputMini.value[inputMini.value.length - 1] === "-" ||
            inputMini.value[inputMini.value.length - 1] === "x" ||
            inputMini.value[inputMini.value.length - 1] === "/" ||
            inputMini.value[inputMini.value.length - 1] === "%"
        ){
            input.value ="";
            input.value += "0";
            inputMini.value += "0";
        }

        input.value += `${event.target.textContent}`;
        inputMini.value += `${event.target.textContent}`;
        deleteInput = false;
        deleteMiniInput = false;
    }
    //////////////////////////NUMBERS///////////////////////////////////////

    
            if(event.target.id ==="number" && !(event.target.textContent === "0")){
                //prepares inputs for secondpart value
                if (deleteInput === true){
                    input.value = "";
                    deleteInput = false;
                }
                if (deleteMiniInput === true){
                    inputMini.value = "";
                    deleteMiniInput = false;
                }

                //to avoid having 0 at the right of a new number
                if(input.value === "0"){
                    input.value = "";
                }
                
                if(inputMini.value === "0"){
                    inputMini.value = "";
                }

                if(input.value.length <= 11)
                    {
                input.value += `${event.target.textContent}`;
                inputMini.value += `${event.target.textContent}`;
                    }
                
            }

            if(event.target.id ==="zero" && !(input.value ==="0") ){
                if (deleteInput === true){
                    input.value = "";
                    deleteInput = false;
                }
                if(input.value.length <= 11)
                    {
                input.value += `${event.target.textContent}`;
                inputMini.value += `${event.target.textContent}`;
                    }
            }
    /////////////////////////////////OPERATIONS//////////////////////////////////
    /////////////////////////////////OPERATIONS//////////////////////////////////

    if(   event.target.id ==="operation"){

        if(inputMini.value[inputMini.value.length - 1] === "."){
            input.value = input.value.slice(0, (input.value.length-1));
            inputMini.value = inputMini.value.slice(0, (inputMini.value.length-1));
            }

        if(!(inputMini.value.includes("+") ||
            inputMini.value.includes("-") ||
            inputMini.value.includes("x") ||
            inputMini.value.includes("/") ||
            inputMini.value.includes("%"))){

        deleteInput = true;
    }

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

                let lastIndex = inputMini.value.lastIndexOf("-");
                console.log(lastIndex);
                if (lastIndex > 0){
                    let inputMiniArray = inputMini.value.split("");
                    inputMiniArray[lastIndex] = "+";
                    inputMini.value = inputMiniArray.join("");   
                }else if(!operation){
                    inputMini.value += "+";
                }

            }

            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
                }

            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
            }

            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "+";
                inputMini.value = inputMiniArray.join("");
            }




            if(!(operation === "+") && !(operation === "-") && !(operation === "x") &&
                    !(operation === "/") && !(operation === "%") ){
                    firstOperand = input.value;}

            operation = "+";
            
            
            
            event.target.classList.add("highLight");

            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
        }
        //////////////////////////////////////////////------ minus is special cuz of 
        //                                                          neg value 

        if(event.target.textContent === "-"){

        if(!inputMini.value.includes("-")){

            if(   (!isNaN(inputMini.value[inputMini.value.length - 1])) &&
                    !inputMini.value.includes("+") &&  
                    !inputMini.value.includes("x") &&
                    !inputMini.value.includes("/") &&
                    !inputMini.value.includes("%") &&
                    !operation
                        ){
                inputMini.value += "-"; 
                
            }

            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
            }

            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
            }

            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");

            }



            

            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            
        }else{
            if (  ((String(inputMini.value)[0]) === "-") &&
                    (  !isNaN((inputMini.value)[inputMini.value.length - 1])  ) &&
                !operation){
                inputMini.value += "-";

            }

            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
            }

            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");
            }

            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "-";
                inputMini.value = inputMiniArray.join("");

            }


        }

        
        if(!(operation === "+") && !(operation === "-") && !(operation === "x") &&
                !(operation === "/") && !(operation === "%") ){
                firstOperand = input.value;
            }

            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            operation = "-";






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

                let lastIndex = inputMini.value.lastIndexOf("-");
                if (lastIndex > 0){
                    let inputMiniArray = inputMini.value.split("");
                    inputMiniArray[lastIndex] = "x";
                    inputMini.value = inputMiniArray.join("");   
                }else if(!operation){
                    inputMini.value += "x";
                }

            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "x";
                inputMini.value = inputMiniArray.join("");

            }


            if(!(operation === "+") && !(operation === "-") && !(operation === "x") &&
                !(operation === "/") && !(operation === "%") ){
                firstOperand = input.value;}
                
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
                let lastIndex = inputMini.value.lastIndexOf("-");
                if (lastIndex > 0){
                    let inputMiniArray = inputMini.value.split("");
                    inputMiniArray[lastIndex] = "/";
                    inputMini.value = inputMiniArray.join("");   
                }else if(!operation){
                    inputMini.value += "/";
                }

            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("%")){
                let index = inputMini.value.indexOf("%");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "/";
                inputMini.value = inputMiniArray.join("");

            }



        
            if(!(operation === "+") && !(operation === "-") && !(operation === "x") &&
            !(operation === "/") && !(operation === "%") ){
            firstOperand = input.value;}

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
                let lastIndex = inputMini.value.lastIndexOf("-");
                if (lastIndex > 0){
                    let inputMiniArray = inputMini.value.split("");
                    inputMiniArray[lastIndex] = "%";
                    inputMini.value = inputMiniArray.join("");   
                }else if(!operation){
                    inputMini.value += "%";
                }

            }
            if(inputMini.value.includes("x")){
                let index = inputMini.value.indexOf("x");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("/")){
                let index = inputMini.value.indexOf("/");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");

            }
            if(inputMini.value.includes("+")){
                let index = inputMini.value.indexOf("+");
                let inputMiniArray= inputMini.value.split("");
                inputMiniArray[index] = "%";
                inputMini.value = inputMiniArray.join("");

            }




            if(!(operation === "+") && !(operation === "-") && !(operation === "x") &&
                !(operation === "/") && !(operation === "%") ){
                firstOperand = input.value;}
                
            operation = "%";
            
            
            
            
            event.target.classList.add("highLight");

            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");

        }
        
        
        deleteMiniInput = false;
        
    }

    if(   event.target.id ==="equal" && !(isNaN(firstOperand)) && !(operation === "") ){
        if(operation === "+"){
        input.value = parseFloat(firstOperand) + parseFloat(input.value); 
        
        clearHighlightAndClearInputs();
        }
        if(operation === "-"){
        input.value = parseFloat(firstOperand) - parseFloat(input.value) ;
        
        clearHighlightAndClearInputs();
        }
        if(operation === "x"){
        input.value = parseFloat(firstOperand) * parseFloat(input.value);
        
        clearHighlightAndClearInputs();
        }

        if(operation === "/"){
            if(input.value === "0"){
                alert("Dividing by 0, Back to Kindergarten");

            }else{
                input.value = parseFloat(firstOperand)  / parseFloat(input.value);
            }

        
        clearHighlightAndClearInputs();
        }

        if(operation === "%"){
            if (firstOperand === 0){
                alert("Dividing by 0, Back to Kindergarten");
            }else{
        input.value = (parseFloat(firstOperand) / parseFloat(input.value) )*100;
        
        clearHighlightAndClearInputs();
            }
        }

        
        proceedWithLastResult();
        
    }

});

function clearAll(){
            addButton.classList.remove("highLight");
            substractButton.classList.remove("highLight");
            multiplyButton.classList.remove("highLight");
            divideButton.classList.remove("highLight");
            percentButton.classList.remove("highLight");
            operation = null;
            firstOperand = "";
            
}

function clearHighlightAndClearInputs(){
        clearAll();
        deleteInput = true;
        deleteMiniInput = true;
}

function proceedWithLastResult(){
    inputMini.value = input.value;
    // firstOperand = input.value;
    
}

document.addEventListener("keydown", function(event){

    event.preventDefault();

    switch(event.key){
        case '+':
            addButton.click();
            break;

        case '-':
            substractButton.click();
            break;

        case '*':
            multiplyButton.click();
            break;
        
        case '/':
            divideButton.click();
            break;

        case '%':
            percentButton.click();
            break;
        
        case 'Enter':
            document.querySelector(".equal").click();
            break;
        
        case "Backspace":
            document.querySelector(".backspace").click();
            break;

        case "Escape":
            document.querySelector(".suppr").click();
            break;

        case ".":
            document.querySelector(".dot").click();
            break;
            
        case "1":
            document.querySelector(".one").click();
            break;

        case "2":
            document.querySelector(".two").click();
            break;

        case "3":
            document.querySelector(".three").click();
            break;

        case "4":
            document.querySelector(".four").click();
            break;

        case "5":
            document.querySelector(".five").click();
            break;

        case "6":
            document.querySelector(".six").click();
            break;

        case "7":
            document.querySelector(".seven").click();
            break;

        case "8":
            document.querySelector(".eight").click();
            break;

        case "9":
            document.querySelector(".nine").click();
            break;

        case "0":
            document.querySelector(".zero").click();
            break;
        case "r":
            console.log(operation);
            // console.log(String(firstOperand));
            break;

        // default:
        //     if (!isNaN(event.key)){
        //     document.querySelector(`.${(event.key)}`).click();
            
        //     }
        //     break;

    }

});


