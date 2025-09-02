const axios = require("axios");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terinal: false
})


async function getJoke(){
    try{
        const response = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random");
        const joke = await response.data[0];
        console.log("\n😂 From API: ");
        console.log(`${joke.setup}\n${joke.punchline}`);
    }
    catch (error) {
        const jokes = JSON.parse(fs.readFileSync("jokes.json", "utf-8"));
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        console.log(`${randomJoke.setup}\n${randomJoke.punchline}`);
    };
};

function askQuestion(){
    rl.question("Do you want to laugh out loud? yes / no: ", async (answer) => {
        if (answer.toLowerCase() === "no"){
            console.log("We are happy you had a great time. Goodbye!!!");
            rl.close;
            return
        } else if (answer.toLowerCase() === "yes"){
            await getJoke()
            askQuestion()
        } else {
            console.log("Kindly enter either 'yes' or 'no'!!!");
            askQuestion();   
        }
    })
}
   
askQuestion()