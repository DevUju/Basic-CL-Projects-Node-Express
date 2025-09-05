const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    NGN: 1600
};

function convert(amount, from, to) {
    if (!rates[from] || !rates[to]) {
        console.log("❌ Unsupported currency.");
        return null;
    }
    const inUSD = amount / rates[from];
    return inUSD * rates[to];
}

rl.question("Enter amount: ", (amount) => {
    rl.question("From currency (USD, EUR, GBP, NGN): ", (from) => {
        rl.question("To currency (USD, EUR, GBP, NGN): ", (to) => {
            const result = convert(parseFloat(amount), from.toUpperCase(), to.toUpperCase());
            
            if (result !== null) {
                console.log(`\n💱 ${amount} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`);
            }
            rl.close();
        });
    });
});
