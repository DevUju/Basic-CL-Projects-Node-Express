function Calculator(num1, operand, num2){
    if (operand === "+"){
        console.log(num1 + num2)
    } else if (operand === "-"){
        console.log(num1 - num2)
    } else if (operand === "*"){
        console.log(num1 * num2)
    } else if (operand === "/"){
        console.log(num1 / num2)
    } else{
        console.log("Operand does not exist.")
    }
};

Calculator(2, "*", 3)