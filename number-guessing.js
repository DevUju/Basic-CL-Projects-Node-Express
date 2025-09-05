const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

let counter = 1;
const randomNumber = Math.floor(Math.random() * 101);

function guessNumber() {

    rl.question("Enter number or type 'exit': ", async (input) => {

        if (input.toLowerCase() === "exit"){
            console.log("You have done well. Goodbye!!!");
            rl.close();
            return;
        } else if (input === ""){
            console.log("Field can not be empty. Enter a number: ");
            guessNumber();
        } else if (isNaN(input)){
            console.log("Input must be a number: ");
            guessNumber();
        } else {
            if (parseFloat(input) > randomNumber){
                console.log("Number is too high.");
                guessNumber();
            } else if (parseFloat(input) < randomNumber){
                console.log("Number is too low.");
                guessNumber();
            } else {
                console.log(`Congratulations!!! The correct number is ${randomNumber}`);
                guessNumber();
                counter = 1;
            }
            
            counter += 1

            if (counter <= 10){
                
            } else {
                console.log("Ooops!!! You have run out of chances.");
                rl.close();
                return;
            }
        };
    });
};

guessNumber()
