const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function tempConverter() {
    rl.question("Enter temperature in Celsius or type exit:", (input)=> {

        if (input.toLowerCase() === "exit"){
            console.log("Goodbye!");
            rl.close();  
            return; 
        } else if (input === ""){
            console.log("Please, enter a number.")
        } else if (isNaN(input)){
            console.log("Kindly enter a valid number.")
        } else {
            let celsius = parseFloat(input)
            let fahrenheit = (9/5 * celsius) + 32 
            console.log(`${input}\u00B0C = ${fahrenheit.toFixed(2)}\u00B0F`)    
        }

        tempConverter()
    });
}

tempConverter()
