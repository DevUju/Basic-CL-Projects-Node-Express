const readline = require("readline");
const stopwatch = require("./stop-watch");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log("Welcome to CLI Stopwatch! 🚀");
console.log("Commands: start | stop | exit");

rl.on("line", (input) => {
    const cmd = input.trim().toLowerCase()

    switch (cmd){
        case "start":
            stopwatch.start();
            break;

        case "stop":
            stopwatch.stop();
            break;

        case "exit":
            console.log("Goodbye! 👋");
            rl.close(); 
            break;
        default:
            console.log("❓ Unknown command. Use: start | stop | exit");
    }
});

rl.on("SIGINT", () => {
    console.log("\nReceived SIGINT. Exiting.");
    rl.close();
});